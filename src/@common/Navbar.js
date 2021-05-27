import { render } from '@testing-library/react';
import React from 'react';
import GoogleLogin from 'react-google-login';
import { login } from '../api/auth';

import '../stylesheets/Navbar.css';

  
function Navbar() {

    const handleLogin = async function(googleData) {
        const user = await login(googleData.tokenId);
        console.log(user);
        console.log(user.data.name);
        alert("Logged In as "+user.data.name);
    }

    return (
        

        <section className="navbar">
            <a href="/browse" className="navbar-item">Browse</a>
            <a href="/about" className="navbar-item">About</a>
            <GoogleLogin
                clientId= "798519625092-1nv3qjq5saevoafui6o510fhhk2f3n7k.apps.googleusercontent.com"

                render = {renderProps=>(
                    <a className="navbar-item" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                        Login
                    </a>
                )}
                buttonText="Log in with Google"
                onSuccess={handleLogin}
                onFailure={handleLogin}
                cookiePolicy={'single_host_origin'}
            />
        </section>
    );
}


export default Navbar;