
import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';
import { Menu, Dropdown, Button} from 'antd';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { login } from '../../api/';
import { Logo } from '../../assets/images';
import { DownOutlined, UserOutlined, LogoutOutlined } from '@ant-design/icons';

import '../../stylesheets/components/Navbar.css';
import '../../stylesheets/components/Header.css';




const handleLogout = ()  => {
        
    console.log("Logging Out..")
    window.localStorage.removeItem("user")
    window.location.reload()
}


const menu = (
    <Menu>
            
        <Menu.Item key="1" icon={<UserOutlined />}>
            <a>Profile</a>
        </Menu.Item>  
        
            
        <Menu.Item key="2" icon={<LogoutOutlined />} onClick={handleLogout} >
            <a >Logout</a>
        </Menu.Item>                            
                            
        
    </Menu>



)



class Navbar extends Component {

    handleLogin = async (googleData) => {
        
        const user = await login(googleData.tokenId);
        const auth = JSON.parse(user.config.data);
        user.data.token = auth.token;
        this.props.storeData(user.data);
        
    }

    handleError = () => {
        console.log("Error!")
    }

    handleLogout = ()  => {
        this.props.history.push("/")
        console.log("Logging Out..")
        window.localStorage.removeItem("user")
    }

    menu = () => {(
        <Menu>
            
            <Menu.Item key="1" icon={<UserOutlined />}>
                <a>Profile</a>
            </Menu.Item>  
            
                 
            <Menu.Item key="2" icon={<LogoutOutlined />} onClick={this.handleLogout} >
                <a >Logout</a>
            </Menu.Item>                            
                            
        
        </Menu>

    )}

    

    render() {

        return (

            <section className="header">
                <section className="logo">
                    <Link to = "/">
                        <img src={Logo} alt="ICS logo" width="110px" height="105px"/> 
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
                            onFailure={this.handleError}
                            cookiePolicy={'single_host_origin'}
                        />


                    ) :   (
                        <div className="navbar-item">

                            <Dropdown overlay={menu} >
                                <Button>
                                {this.props.data.first_name} <img className="profile-pic" src={this.props.data.image}/> 
                                </Button>
                            </Dropdown>


                        </div>
                    )}
                    
                </section>
            </section>
        );

    }

}

export default withRouter(Navbar);