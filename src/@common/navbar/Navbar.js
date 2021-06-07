
import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';
import { Link } from 'react-router-dom';

import { login } from '../../api/auth';

import '../../stylesheets/components/Navbar.css';
import '../../stylesheets/components/Header.css';

import logo from "../../assets/images/logos/icslogo.jpg";



export default class Navbar extends Component {


    handleLogin = async (googleData) => {
        
        const user = await login(googleData.tokenId);
        console.log(user.data);
        this.props.storeData(user.data);
        
    }

    render() {

        return (

            <section className="header">
                <section className="logo">
                    <Link to = "/">
                        <img src={logo} alt="ICS logo" width="110px" height="105px"/> 
                    </Link>
                    
                    <section className="title">
                        <div className="maintitle">ICS Virtual Library</div>
                        <div className="subtitle">University of the Philippines Los Baños</div>
                    </section>  
                </section>


                <section className="navbar">
                    <a href="/browse" className="navbar-item">Browse</a>
                    <a href="/about" className="navbar-item">About</a>

                    
                    { this.props.data == null ? (
                        <GoogleLogin
                            clientId= "798519625092-1nv3qjq5saevoafui6o510fhhk2f3n7k.apps.googleusercontent.com"
            
                            render = { renderProps => (
                                <a className="navbar-item" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                    Login
                                </a>
                            )}
                            buttonText="Log in with Google"
                            onSuccess={this.handleLogin}
                            onFailure={this.handleLogin}
                            cookiePolicy={'single_host_origin'}
                        />


                    ) :   (

                        <Link to="/account/profile">
                            <a className="navbar-item">{this.props.data.first_name}</a>
                    
                        </Link>

                    )}
                    
                </section>
            </section>
        );

    }

    
}


