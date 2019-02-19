import React, { Component } from 'react';
import Map from './Map';
import FormFilters from './FormFilters';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <FormFilters/>
                    </div>
                    <div className="col-md-4">
                        <Map/>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;