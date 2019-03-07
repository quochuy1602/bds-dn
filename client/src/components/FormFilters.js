import React, { Component } from 'react';
import classnames from 'classnames';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import SelectBox from '../libs/SelectBox';
import { getListArea } from '../actions/area';
const optionsCity = [
    { value: 'danang', label: 'Ðà Nẵng' , "geo":{}},
    { value: 'quangnam', label: 'Quảng Nam' },
    { value: 'hue', label: 'Huế' },
    { value: 'hanoi', label: 'Hà Nội' },
    { value: 'hcm', label: 'Hồ Chí Minh' }
];
const optionsService = [
    { value: 'mua', label: 'Mua' },
    { value: 'ban', label: 'Ban' },
    { value: 'thue', label: 'Thue' },
    { value: 'chothue', label: 'Cho thue' },
];
const optionsPackage = [
    { value: 'Nha', label: 'Nha' },
    { value: 'Dat', label: 'Dat' }
];
class FormFilters extends Component {
    constructor() {
        super();
        this.state = {
            city:'',
            area: '',
            password: '',
            errors: {},
            check:true,
            listCity:optionsCity,
            listPackage:optionsPackage,
            listService:optionsService,
            listArea:[]
        }
        this.handleSelectCity = this.handleSelectCity.bind(this);
        this.handleInputName = this.handleInputName.bind(this);
        this.handleSelectArea = this.handleSelectArea.bind(this);
    }
    handleInputName(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handelShow(){
        this.setState({check:!this.state.check});
    }
    handleSelectCity(selectOption){
        this.setState({city:selectOption});
        this.props.getListArea(selectOption, this.props.history);

    }
    handleSelectArea(selectOption){
        //this.setState({area:selectOption});
        let obj = this.state.listArea.filter((area) => {
            return area.value === selectOption;
        });
        this.props.handleDragEnd(obj[0].geo.coordinates[0]);
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
    render() {
        const {check} = this.state;
        return (
                <div className="col-md-12">
                <div  style={{display:  check ? 'block' : 'none' }}>
                    <form onSubmit={ this.handleSubmit }>
                        <div className="form-row" id="frmFilters">
                            <div className="form-group col-md-1 col-sm-2">
                                <label htmlFor="inputEmail4">Fleet</label>
                                <SelectBox listData={this.state.listCity} handleSelect={this.handleSelectCity} defaultValue={this.state.listCity[0]} isMulti={false} />
                            </div>
                            <div className="form-group col-md-2 col-sm-2">
                                <label htmlFor="inputEmail4">Zone</label>
                                <SelectBox listData={this.state.listArea} handleSelect={this.handleSelectArea} isMulti={false} />
                            </div>
                            <div className="form-group col-md-1 col-sm-2">
                                <label htmlFor="inputEmail4">Packages</label>
                                <SelectBox listData={this.state.listPackage} />
                            </div>
                            <div className="form-group col-md-2 col-sm-2">
                                <label htmlFor="inputEmail4">Service</label>
                                <SelectBox listData={this.state.listService} isMulti={true} />
                            </div>

                            <div className="form-group col-md-2 col-sm-2">
                                <label htmlFor="inputEmail4">Price</label>
                                <input
                                    type="area"
                                    placeholder="Area"
                                    className={classnames('form-control ', {
                                    })}
                                    name="area"
                                    value={ this.state.area }
                                    onChange={ this.handleInputName }
                                    />

                            </div>

                        </div>

                    </form>

                </div>
                <div>
                    <button type="button" className="btn btn-primary" onClick={()=>{ this.handelShow()}}>
                        {
                            check == true ? "Hidden" : "Show"
                        }
                    </button>
                </div>
                </div>
        );
    }
}
function mapStateToProps(state, props) {
    return {
        listArea: state.area.listArea,
    };
}
function mapDispatchToProps(dispatch) {
    return {
        getListArea: bindActionCreators(getListArea, dispatch)
    };
}
const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps)
);

export default enhance(FormFilters);
