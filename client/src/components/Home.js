import React, { Component } from 'react';
import Map from './Map';
import FormFilters from './FormFilters';
import Table from './Table';
class Home extends Component {
    render() {
        return (
            <div style={{ padding: '10px'}}>
                <div className="row">
                    <div className="col-md-2">
                        <FormFilters/>
                    </div>
                    <div className="col-md-5">
                        <Table/>
                    </div>
                    <div className="col-md-5">
                        <Map/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;