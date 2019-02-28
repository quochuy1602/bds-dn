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
            zoom: 15,
            listData: [],
            isInfoWindow:false,
            isDrawing:false,
            showInfoIndex:''
        };
        this.handleDragEnd = this.handleDragEnd.bind(this);
        this.handleShowInfo = this.handleShowInfo.bind(this);
    }
    handleDragEnd = (points) => {
        var parameters = {
            coordinates: [points]
        };
        this.props.getLocation(parameters, this.props.history);
        console.log("parameters:",parameters);
    }
    handleShowInfo = (id) => {
        this.setState({
            showInfoIndex: id
        });
        console.log("showInfoIndex:",this.state.showInfoIndex);
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

    }
    render() {
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
                            showInfo={this.handleShowInfo}
                            showInfoIndex={this.state.showInfoIndex}
                            />
                    </div>
                    <div className="col-md-5">
                        <Table listData={this.state.listData} showInfoIndex={this.state.showInfoIndex} />
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
