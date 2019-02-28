import React,{Component} from "react";
import { compose, withProps } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    Polygon,
    InfoWindow,
    DrawingManager
} from "react-google-maps";
import {
    STROKE_ZONE_COLOR,
    HIGHLIGHT_STROKE_ZONE_COLOR
} from "./Color";
const DrawingGoogleMap = withGoogleMap(props => {

    return (
        <GoogleMap
            defaultZoom={props.zoom}
            center={props.center}
            onBoundsChanged={props.onBoundsChanged}
            ref={props.onMapMounted}
            onDragEnd={props.onDragEnd}
            onZoomChanged={props.onDragEnd}
            >
            { props.isDrawing &&
            <DrawingManager
                defaultDrawingMode={window.google.maps.drawing.OverlayType.POLYGON}
                defaultOptions={{
                  drawingControl: false,
                  drawingControlOptions: {
                      position: window.google.maps.ControlPosition.TOP_CENTER,
                      drawingModes: [
                          window.google.maps.drawing.OverlayType.POLYGON,
                      ],
                  },
                }}
            />
            }
            {
                props.data.map((td, rowIndex) => {
                    return <Marker position={{ lat: td.geo[1], lng: td.geo[0] }}/>
                })

            }
        </GoogleMap>
    )

});

export default class Drawing extends Component {

    state = {
        bounds: null,
        center: {},
        markers: [],
        zoom:7
    };

    handleMapMounted = this.handleMapMounted.bind(this);
    handleBoundsChanged = this.handleBoundsChanged.bind(this);
    handleDragEnd = this.handleDragEnd.bind(this);
    someEventHandler =  this.someEventHandler.bind(this);


    someEventHandler(id,arrCoordinates){
        return (<Polygon key={id.id} paths={arrCoordinates} options={{strokeColor: STROKE_ZONE_COLOR,}}  />)
    }
    handleMapMounted(map) {
        this._map = map;
        if(this._map) {
            setTimeout(()=>{
                this.handleDragEnd();
            },500)
        }
    }

    handleBoundsChanged() {
        this.setState({
            bounds: this._map.getBounds(),
            center: this._map.getCenter(),
        });
    }

    handleDragEnd() {
        // Calculating 4 corner points of map
        if (this._map.getBounds()) {
            let dataArray =
                [
                    [
                        this._map.getBounds().getNorthEast().lng(),
                        this._map.getBounds().getNorthEast().lat(),
                    ],
                    [
                        this._map.getBounds().getNorthEast().lng(),
                        this._map.getBounds().getSouthWest().lat(),
                    ],
                    [
                        this._map.getBounds().getSouthWest().lng(),
                        this._map.getBounds().getSouthWest().lat(),
                    ],
                    [
                        this._map.getBounds().getSouthWest().lng(),
                        this._map.getBounds().getNorthEast().lat(),
                    ],
                    [
                        this._map.getBounds().getNorthEast().lng(),
                        this._map.getBounds().getNorthEast().lat(),
                    ]
                ];
            if(this.props.handleDragEnd) {
                this.props.handleDragEnd(dataArray);
            }
        }
    }

    componentWillReceiveProps(nextProps) {
       console.log("nextProps",nextProps)
    }

    render() {
        return (
            <DrawingGoogleMap
                data={this.props.data}
                center={this.props.center}
                onMapMounted={this.handleMapMounted}
                onBoundsChanged={this.handleBoundsChanged}
                onDragEnd={this.handleDragEnd}
                onZoomChanged={this.handleDragEnd}
                bounds={this.props.bounds}
                someEventHandler= {this.someEventHandler}
                markers={this.state.markers}
                zoom={this.props.zoom}
                containerElement={
                    <div  style={{ height: "400px",width:"600px" }} />
                }
                mapElement={
                    <div style={{ height: "100%" }} />
                }
                />
        );
    }
}
