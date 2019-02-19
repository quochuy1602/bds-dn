import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
class FormFilters extends Component {
    constructor() {
        super();
        this.state = {
            city:'',
            area: '',
            password: '',
            errors: {}
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        const user = {
            city: this.state.city,
            area: this.state.area,
        }

    }
    render() {
        const {errors} = this.state;
        return (
            <div >
                <form onSubmit={ this.handleSubmit }>
                    <div className="form-group">
                        <input
                            type="city"
                            placeholder="City"
                            className={classnames('form-control form-control-lg', {
                                'is-invalid': errors.city
                            })}
                            name="city"
                            value={ this.state.city }
                            />

                    </div>
                    <div className="form-group">
                        <input
                            type="area"
                            placeholder="Area"
                            className={classnames('form-control form-control-lg', {
                                'is-invalid': errors.area
                            })}
                            name="email"
                            value={ this.state.area }
                            />

                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">
                            Filters
                        </button>
                    </div>
                </form>
            </div>
        );
    }
}
export default FormFilters;