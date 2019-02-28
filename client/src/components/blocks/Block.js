import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
class Block extends Component {

}
const mapStateToProps = (state) => ({
    errors: state.errors
})

export  default connect(mapStateToProps, { loginUser })(Login)
