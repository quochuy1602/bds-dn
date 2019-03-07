import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Action extends Component {
    constructor(props) {
        super(props);
    }

    edit(id){
        this.props.edit(id);
    }
    render() {
        return(
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a href="#"  onClick={()=>{ this.edit(this.props.id)}}> Edit </a>
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
