import React, {Component} from 'react';
import { AdminSidebar, ActivityLog } from '@common';


export default class ActivityPage extends Component{

    render(){
        return (

            
            <div className="Assign-role">
                <AdminSidebar className="Admin-menu"/>
                <ActivityLog/>
                
            </div>
        

        );


    }
    
}

