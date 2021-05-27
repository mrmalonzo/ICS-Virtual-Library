import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../@common/Header';
import Search from '../@common/Search';
import Footer from '../@common/Footer';
import Announcements from '../@common/Announcements';

const Landing = () => {

    return (

        <div>

            <Header/>
            <Search/>
            <Announcements/>
            <Footer/>


        </div>

        

    );

}

export default Landing;