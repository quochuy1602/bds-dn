import React, { Component } from 'react';
import FormFilters from './FormFilters';
import Table from './Table';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import {
    Drawing,
} from "./maps/index";
import { getLocation } from '../actions/home';
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            center: {lat: 16.0181811307909  , lng: 108.24604725771815},
            zoom: 6,
            listData: [],
            isInfoWindow:false,
            isDrawing:false
        };
        this.handleDragEnd = this.handleDragEnd.bind(this);
    }
    handleDragEnd = (points) => {
        var parameters = {
            coordinates: [points]
        };
        this.props.getLocation(parameters, this.props.history);
        console.log("parameters:",parameters);
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.listData) {
            this.setState({
                listData: nextProps.listData
            });
        }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }
    componentDidMount(){
        var parameters = {
            coordinates: [[
                [
                    [
                        108.24003910952479,
                        16.018882364614225
                    ],
                    [
                        108.24604725771815,
                        16.0181811307909
                    ],
                    [
                        108.24840760165125,
                        16.015912416247065
                    ],
                    [
                        108.24660515719324,
                        16.01195241635069
                    ],
                    [
                        108.2445452206698,
                        16.007951086679654
                    ],
                    [
                        108.23939537936121,
                        16.00126827487403
                    ],
                    [
                        108.23424553805262,
                        16.00419718905034
                    ],
                    [
                        108.23347306185633,
                        16.00889986282251
                    ],
                    [
                        108.23446011477381,
                        16.0131899247565
                    ],
                    [
                        108.24003910952479,
                        16.018882364614225
                    ]
                ]
            ]]
        };
        this.props.getLocation(parameters, this.props.history);
        console.log("parameters:",parameters);
    }
    render() {
        const { listData,getLocation } = this.props;
        return (
            <div style={{ padding: '10px'}}>
                <div className="row">
                    <div className="col-md-2">
                        <FormFilters/>
                    </div>
                    <div className="col-md-5">
                        <Drawing
                            data={this.state.listData}
                            center={this.state.center}
                            zoom={this.state.zoom}
                            handleDragEnd={this.handleDragEnd}
                            isDrawing={this.state.isDrawing}
                            />
                    </div>
                    <div className="col-md-5">
                        <Table listData={this.state.listData} getLocation={getLocation}/>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state, props) {
    return {
        listData: state.home.listData,

    };
}
function mapDispatchToProps(dispatch) {
    return {
        getLocation: bindActionCreators(getLocation, dispatch)
    };
}
const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(Home);
