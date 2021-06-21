import React, {Component} from 'react';
import { Tabs } from 'antd';
import { AdminSidebar, CreateBook, UpdateBook, DeleteBook } from '@common';

import '../stylesheets/pages/BooksPage.css'

const { TabPane } = Tabs;

export default class BooksPage extends Component{

    render(){
        return (

            
            <div className="Assign-role">
                <AdminSidebar className="Admin-menu"/>

                <Tabs defaultActiveKey="1" >
                    <TabPane tab="Create Book" key="1">
                    <CreateBook/>
                    </TabPane>
                    <TabPane tab="Update Book" key="2">
                    <UpdateBook/>
                    </TabPane>
                    <TabPane tab="Delete Book" key="3">
                    <DeleteBook/>
                    </TabPane>
                </Tabs>
                
                
                
            </div>
        

        );


    }
    
}

