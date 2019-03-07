import React, { Component } from 'react';
import FormFilters from './FormFilters';
import Table from './Table';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import {
    Drawing,
} from "./maps/index";
import { getLocation,getLocationLocal } from '../actions/home';
//console.log(location);
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            center: {lat: 16.0181811307909  , lng: 108.24604725771815},
            zoom: 12,
            listData: [],
            isInfoWindow:false,
            isDrawing:false,
            showInfoIndex:'',
            listBlock:[],
        };
        this.handleDragEnd = this.handleDragEnd.bind(this);
        this.handleShowInfo = this.handleShowInfo.bind(this);
        this.handleSelectArea = this.handleSelectArea.bind(this);
    }
    changeCity = (city) =>{

    }
    handleDragEnd = (points) => {
        var parameters = {
            coordinates: [points]
        };
        this.props.getLocation(parameters, this.props.history);
        console.log("parameters:",parameters);
    }
    handleSelectArea= (points) => {
        var parameters = {
            coordinates: [points]
        };

        var bounds = new window.google.maps.LatLngBounds();
        let arrCoordinates = points.map((option) => {
            return {lat: option[1], lng: option[0]}
        })
        for (var j = 0; j < arrCoordinates.length; j++) {
            bounds.extend(arrCoordinates[j]);
        }
        this.setState({ center: bounds.getCenter() ,zoom:16});
        this.props.getLocation(parameters, this.props.history);
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
        if(nextProps.listBlock) {
            this.setState({
                listBlock: nextProps.listBlock
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
    componentWillMount() {
        this.props.getLocationLocal();
    }
    render() {
        return (
            <div style={{ padding: '10px'}}>
                <div className="row">
                        <FormFilters getListArea={this.changeCity} handleDragEnd={this.handleSelectArea}/>
                </div>
                <div className="row">
                    <div className="col-md-7">
                            <Drawing
                                blocks={this.state.listBlock}
                                data={this.state.listData}
                                center={this.state.center}
                                zoom={this.state.zoom}
                                handleDragEnd={this.handleDragEnd}
                                isDrawing={this.state.isDrawing}
                                showInfo={this.handleShowInfo}
                                showInfoIndex={this.state.showInfoIndex}
                            />
                        <div>
                            <span className="glyphicon glyphicon-chevron-left"></span>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <Table listData={this.state.listData} showInfoIndex={this.state.showInfoIndex} showInfo={this.handleShowInfo} type='1'/>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state, props) {
    return {
        listData: state.home.listData,
        listBlock: state.home.listBlock,
        location: state.home.coords
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getLocation: bindActionCreators(getLocation, dispatch),
        getLocationLocal: bindActionCreators(getLocationLocal,dispatch),

    };
}
const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(Home);
