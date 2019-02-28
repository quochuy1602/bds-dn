import React, { Component } from 'react';
import FormFilters from './FormFilters';
import Table from './Table';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import {
    Drawing,
} from "./maps/index";
const  listMap = [
    {
        "id":"1",
        "name":"NHX",
        "coordinates":[[[108.24003910952479,16.018882364614225],[108.24604725771815,16.0181811307909],[108.24840760165125,16.015912416247065],[108.24660515719324,16.01195241635069],[108.2445452206698,16.007951086679654],[108.23939537936121,16.00126827487403],[108.23424553805262,16.00419718905034],[108.23347306185633,16.00889986282251],[108.23446011477381,16.0131899247565],[108.24003910952479,16.018882364614225]]],
        "fillColor":"#017400",
        "strokeColor":"#0174DF"
    },
    {
        "id":"2",
        "name":"ACC",
        "coordinates":[[[108.23144310424789,16.001590560027488],[108.2335888714598,16.002745628037733],[108.23788040588363,15.99985794549128],[108.23667877624496,15.996640192923435],[108.24114197204574,15.98682160209714],[108.23951118896468,15.985913976919973],[108.23376053283675,15.994164963386579],[108.23170059631332,15.994164963386579],[108.22964065978988,16.00060049641795],[108.23144310424789,16.001590560027488]]],
        "fillColor":"#017411",
        "strokeColor":"#58ACFA"
    },

    {
        "id":"4",
        "name":"NTP",
        "coordinates":[[[108.21600622690539,16.013291925194572],[108.2236451581798,16.022779229907993],[108.23437399423938,16.015601919180856],[108.2287949994884,16.002236583989824],[108.22167105234485,16.005536749914306],[108.21832365549426,16.0096618806428],[108.21600622690539,16.013291925194572]]],
        "fillColor":"#017433",
        "strokeColor":"#58ACFA"
    }
];
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            center: {lat: 16.0181811307909  , lng: 108.24604725771815},
            zoom: 6,
            list: listMap,
            isInfoWindow:false,
            isDrawing:false
        };
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
                            data={this.state.list}
                            center={this.state.center}
                            zoom={this.state.zoom}
                            handleDragEnd={this.handleDragEnd}
                            isDrawing={this.state.isDrawing}
                            />
                    </div>
                    <div className="col-md-5">
                        <Table/>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state, props) {
    return {
        data: state.list,

    };
}
function mapDispatchToProps(dispatch) {
    return {
    }
}
const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(Home);
