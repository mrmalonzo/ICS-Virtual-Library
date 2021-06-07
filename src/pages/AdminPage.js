import React from 'react';
import ReactDOM from 'react-dom';

import { Sidebar, Table, Footer, Details} from '../@common/';


const AdminPage = () => {

    return (

        
            <div className="Assign-role">
                <Sidebar className="Admin-menu"/>
                <Table/>
                
            </div>
    

    );

}

export default AdminPage;