
import React, {Component} from 'react';
import GoogleLogin from 'react-google-login';

import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { login } from '../../api/';
import { Logo } from '../../assets/images';

import { 
    Menu, 
    Dropdown, 
    Button,
    Spin,
    message
} from 'antd';

import { 
    UserOutlined, 
    LogoutOutlined,
    LoadingOutlined
} from '@ant-design/icons';
    
import '../../stylesheets/components/Navbar.css';
import '../../stylesheets/components/Header.css';


const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;


const handleLogout = ()  => {
    window.localStorage.removeItem("user")
    window.location.reload()
}


const menu = (
    <Menu>

        <Menu.Item key="1" icon={<UserOutlined />}>
            <a href="/account/profile">Profile</a>
        </Menu.Item>  
            
        <Menu.Item key="2" icon={<LogoutOutlined />} onClick={handleLogout} >
            <a>Logout</a>
        </Menu.Item>                            
                                    
    </Menu>

)

class Navbar extends Component {

    state = {
        loading: false
    }

    handleLogin = async (googleData) => {

        this.setState({
            loading: true
        })

        try {

            const user = await login(googleData.tokenId);
            const auth = JSON.parse(user.config.data);
            user.data.token = auth.token;
            this.props.storeData(user.data);

            message.success("Logged In Successfully!")

        } catch (e) {
            message.error("Invalid Login. Please Use UP Mail.")
        }
        

        this.setState({
            loading: false
        })
        
    }

    handleError = () => {
        message.error("Invalid Login. Please Use UP Mail.")
    }


    clearSearch = () => {
        window.localStorage.removeItem("search-word")
    }

    

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
                    <a onClick={this.clearSearch} href="/browse" className="navbar-item">Browse</a>
                    
                    <a href="/about" className="navbar-item">About</a>


                    {this.state.loading === true ? (
                        <div className="loader-navbar">
                            <Spin indicator={antIcon} size="default" />
                        </div>

                    ) : (

                        this.props.data == null ? (
                            <GoogleLogin
                                clientId= "798519625092-1nv3qjq5saevoafui6o510fhhk2f3n7k.apps.googleusercontent.com"
                
                                render = { renderProps => (
                                    <h4 className="navbar-item" onClick={renderProps.onClick} disabled={renderProps.disabled}>
                                        Log In With UP Mail
                                    </h4>
                                )}
                                onSuccess={this.handleLogin}
                                onFailure={this.handleError}
                                cookiePolicy={'single_host_origin'}
                            />
    
    
                        ) :   (
                            <div className="navbar-item">
    
                                <Dropdown overlay={menu} >
                                    <Button>
                                    {this.props.data.first_name} <img className="profile-pic" src={this.props.data.image} alt="Profile"/> 
                                    </Button>
                                </Dropdown>
    
    
                            </div>
                        )
                    ) }
                    
                </section>
            </section>
        );
    }
}

export default withRouter(Navbar);