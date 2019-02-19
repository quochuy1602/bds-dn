import _ from "lodash";
import React from "react";
import { compose, withProps } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    Polygon
} from "react-google-maps";
const  listMap = [
    {
        "id":1,
        "name":"NHX",
        "coordinates":[[[108.24003910952479,16.018882364614225],[108.24604725771815,16.0181811307909],[108.24840760165125,16.015912416247065],[108.24660515719324,16.01195241635069],[108.2445452206698,16.007951086679654],[108.23939537936121,16.00126827487403],[108.23424553805262,16.00419718905034],[108.23347306185633,16.00889986282251],[108.23446011477381,16.0131899247565],[108.24003910952479,16.018882364614225]]],
        "fillColor":"#0174DF",
        "strokeColor":"#58ACFA"

    }
]
const MyMapComponent = compose(
    withProps({
        googleMapURL:
            "https://maps.googleapis.com/maps/api/js?&v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div class="" style={{ height: `400px`,width:`600px`, }} />,
        mapElement: <div style={{ height: `100%` }} />
    }),
    withScriptjs,
    withGoogleMap
)(props => (
    <GoogleMap defaultZoom={15} defaultCenter={{ lat: 16.0181811307909  , lng: 108.24604725771815 }} >
        {
            listMap.map((data) => {
                const arrCoordinates = data.coordinates[0].map((option) => {
                        return {lat: option[1], lng: option[0]}
                    })
                return <Polygon
                    path={arrCoordinates}
                    key={data.id}
                    options={{
                        fillColor: data.fillColor,
                        fillOpacity: 0.4,
                        strokeColor: data.strokeColor,
                        strokeOpacity: 1,
                        strokeWeight: 1
                    }}
                    onClick={() =>  {console.log(data.name);}}
                    />
            })
        }

    </GoogleMap>
));
const enhance = _.identity;

const Map = () => [
    <MyMapComponent key="map" />
];

export default enhance(Map);