import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Action extends Component {

    render() {
        return(
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <Link className="nav-link" to="/register">Edit</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login">Delete</Link>
                </li>
            </ul>
        )
    }
}
Action.propTypes = {

}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {  })(withRouter(Action));