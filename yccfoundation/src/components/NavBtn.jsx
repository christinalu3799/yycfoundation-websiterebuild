import React, { Component } from 'react'
import { Link } from "react-router-dom";

class NavBtn extends Component {
    render() {
        return (
            <Link 
                to={this.props.linkTo}
                className='mx-4'
            > 
                {this.props.navItem} 
            </Link>
        )
    }
}

export default NavBtn