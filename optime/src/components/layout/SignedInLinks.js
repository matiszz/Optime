import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
    return (
        <div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" onClick={props.signOut} href="/">Cerrar sesión</a>
                    </li>
                </ul>
            </div>
        </div>
    )

}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
};

export default connect(null, mapDispatchToProps)(SignedInLinks)