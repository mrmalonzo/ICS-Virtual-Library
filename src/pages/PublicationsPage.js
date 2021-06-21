import React, {Component} from 'react';
import { Tabs } from 'antd';
import { AdminSidebar, CreatePublication, UpdatePublication, DeletePublication } from '@common';

import '../stylesheets/pages/BooksPage.css'

const { TabPane } = Tabs;

export default class BooksPage extends Component{

    render(){
        return (

            
            <div className="Assign-role">
                <AdminSidebar className="Admin-menu"/>

                <Tabs defaultActiveKey="1" >
                    <TabPane tab="Create Publication" key="1">
                    <CreatePublication/>
                    </TabPane>
                    <TabPane tab="Update Publication" key="2">
                    <UpdatePublication/>
                    </TabPane>
                    <TabPane tab="Delete Publication" key="3">
                    <DeletePublication/>
                    </TabPane>
                </Tabs>
                
                
                
            </div>
        

        );


    }
    
}

