import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import { AdminSidebar, CreatePublication } from '@common';


export default class BooksPage extends Component{

    render(){
        return (

            
            <div className="Assign-role">
                <AdminSidebar className="Admin-menu"/>
                <CreatePublication/>
                
                
            </div>
        

        );


    }
    
}

