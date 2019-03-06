import React, { Component } from 'react';
import Table from './Table';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import classnames from 'classnames';
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Polygon,
    DrawingManager
} from "react-google-maps";
import {
    Drawing,
} from "./maps/index";
import { getLocation,add } from '../actions/area';
class Area extends Component {
    constructor(props) {
        super(props);
        this.state = {
            center: {lat: 16.0181811307909  , lng: 108.24604725771815},
            zoom: 15,
            listArea: [],
            isInfoWindow:false,
            isDrawing:true,
            showInfoIndex:'',
            data:[],
            geo:{},
            name:"",
            city:"",
            fillColor:"",
            strokeColor:"",
            errors:{},
            polygonDraw: null,
        };
        this.handleDragEnd = this.handleDragEnd.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
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
    handleSubmit(e) {
        e.preventDefault();
        var arrPath = this.polygon.getPaths().getAt(0).getArray().map((option) => {
            if(typeof option.lat === 'number') {
                return [option.lng, option.lat]
            } else {
                return [option.lng(), option.lat()]
            }

        })
        arrPath.push(arrPath[0]);
        const area = {
            name: this.state.name,
            geo: {
                coordinates: [arrPath], //this.state.polygonDraw.props.paths,
                type: "Polygon"
            },
            city: this.state.city,
            fillColor: this.state.fillColor,
            strokeColor: this.state.strokeColor,
        }
        this.props.add(area, '');
    }
    handleDrawingFinish = (polygon) => {
        let polygonDraw =
            <Polygon
                onClick={()=>{}}
                onRightClick={()=>{}}
                onDragStart={()=>{}}
                paths={polygon.getPaths().getAt(0).getArray()}
                editable={true}
                ref={p=>{this.editMapRef(p)}}
                />
        polygon.setMap(null);
        polygon = null;
        this.setState({polygonDraw,isDrawing:false})

    }
    editMapRef(p){
        this.polygon = p;
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.listArea) {
            this.setState({
                listArea: nextProps.listArea
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
            <div class="col-md-12" style={{ padding: '10px'}}>
                <div className="row">
                    <form onSubmit={ this.handleSubmit }>
                        <div className="form-group ">
                            <label for="name">Name</label>
                            <input
                                type="text"
                                placeholder="Name"
                                className={classnames('form-control ', {
                                 })}
                                name="name"
                                onChange={ this.handleInputChange }
                                value={ this.state.name }
                                />
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary">
                                Save
                            </button>
                        </div>
                    </form>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <Drawing
                            center={this.state.center}
                            zoom={this.state.zoom}
                            handleDragEnd={this.handleDragEnd}
                            isDrawing={this.state.isDrawing}
                            showInfo={this.handleShowInfo}
                            showInfoIndex={this.state.showInfoIndex}
                            blocks={this.state.listArea}
                            handleDrawingFinish={this.handleDrawingFinish}
                            drawMode={true}
                            polygonDraw={this.state.polygonDraw}
                            />
                    </div>
                    <div className="col-md-6">
                        <Table listData={this.state.listArea} showInfoIndex={this.state.showInfoIndex} showInfo={this.handleShowInfo} type='2'/>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state, props) {
    return {
        listArea: state.area.listArea
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getLocation: bindActionCreators(getLocation, dispatch),
        add:bindActionCreators(add, dispatch)
    };

}
const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(Area);
