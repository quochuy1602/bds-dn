/*
import _ from "lodash";
import { React,Component} from "react";
import { compose, withProps } from "recompose";
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
    Polygon,
    InfoWindow
} from "react-google-maps";
const  listMap = [
    {
        "id":1,
        "name":"NHX",
        "coordinates":[[[108.24003910952479,16.018882364614225],[108.24604725771815,16.0181811307909],[108.24840760165125,16.015912416247065],[108.24660515719324,16.01195241635069],[108.2445452206698,16.007951086679654],[108.23939537936121,16.00126827487403],[108.23424553805262,16.00419718905034],[108.23347306185633,16.00889986282251],[108.23446011477381,16.0131899247565],[108.24003910952479,16.018882364614225]]],
        "fillColor":"#017400",
        "strokeColor":"#0174DF"
    },
    {
        "id":2,
        "name":"ACC",
        "coordinates":[[[108.23144310424789,16.001590560027488],[108.2335888714598,16.002745628037733],[108.23788040588363,15.99985794549128],[108.23667877624496,15.996640192923435],[108.24114197204574,15.98682160209714],[108.23951118896468,15.985913976919973],[108.23376053283675,15.994164963386579],[108.23170059631332,15.994164963386579],[108.22964065978988,16.00060049641795],[108.23144310424789,16.001590560027488]]],
        "fillColor":"#017411",
        "strokeColor":"#58ACFA"
    },
    {
        "id":3,
        "name":"DTHQ",
        "coordinates":[[[108.20779648134317,16.005244596642957],[108.21693744966592,16.01040100428265],[108.22152939149942,16.00499708572783],[108.22869625398721,16.001449395577254],[108.22702255556192,15.9943538263],[108.22496261903848,15.992786166554183],[108.22487678835,15.990063359883278],[108.21972694704141,15.987175494108355],[108.22135773012246,15.97917176246524],[108.21818199464883,15.975706129840296],[108.20702400514688,16.002274445420404],[108.20779648134317,16.005244596642957]]],
        "fillColor":"#017422",
        "strokeColor":"#58ACFA"
    },
    {
        "id":4,
        "name":"NTP",
        "coordinates":[[[108.21600622690539,16.013291925194572],[108.2236451581798,16.022779229907993],[108.23437399423938,16.015601919180856],[108.2287949994884,16.002236583989824],[108.22167105234485,16.005536749914306],[108.21832365549426,16.0096618806428],[108.21600622690539,16.013291925194572]]],
        "fillColor":"#017433",
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
                    onClick={() =>  {

                    }}
                    />
            })
        }

    </GoogleMap>
));
const enhance = _.identity;
class Map extends Component {
    render() {
        return (
            <MyMapComponent />
        )
    }
}
export default enhance(Map);
*/
