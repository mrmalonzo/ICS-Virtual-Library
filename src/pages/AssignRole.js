import React from 'react';
import ReactDOM from 'react-dom';

import Header from '../@common/Header';
import Navbar from '../@common/Navbar';
import Table from '../@common/Table';
import Footer from '../@common/Footer';
import Button from '../@common/Button.js';
import '../stylesheets/Table.css';


const AssignRole = () => {

    return (

        <div>

            <Navbar/>
            <div className="Assign-role">
                <Button className="Admin-menu"/>
                <Table/>
                
            </div>
            <Footer/>


        </div>

        

    );

}

export default AssignRole;