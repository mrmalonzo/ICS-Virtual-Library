import React, {Component} from 'react';
import { AdminSidebar, AdminDetails } from '@common';


export default class AdminPage extends Component{

    render(){
        return (

            
            <div className="Assign-role">
                <AdminSidebar className="Admin-menu"/>
                <AdminDetails { ... this.props}/>
                
            </div>
        

        );


    }
    
}

