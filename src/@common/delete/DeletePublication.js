import React, { useState , Component } from 'react';
import MaterialTable from 'material-table';
import '../../stylesheets/components/Table.css';

import { deletepublication, getAllPublications } from "../../api";
import {message} from 'antd';



export default class DeletePublication extends Component{

   
    state={
        columns:[
            {
                title: 'Title',
                field: 'title',
                editable: 'onAdd',
            },
            {
                title: 'Type',
                field: 'publication_type',
                editable: 'onAdd',
            },
            {
                title: 'Authors',
                field: 'authors',
                editable: 'onAdd',
            }
        ],
        data:[]
    };
    


    async componentDidMount(){
        const allPublications = await getAllPublications(); //get the users from db using api
        allPublications.data.pubs.map(pub => {
            pub.authors = pub.authors.join(', ');
        });
        console.log(allPublications.data.pubs);
        this.setState({data:allPublications.data.pubs}); //set the data state
    }

    pubDelete = async (title) =>{
        try{
            await deletepublication(title);
        } catch(e){
            message.error("Cannot Delete Book.")
        }
        
    }

    render(){
         return(
            <div className="delete-table-container">
                <MaterialTable title="List of Publications"
                    data = {this.state.data}
                    columns = {this.state.columns}
                    options={{
                        actionsColumnIndex: -1,
                        pageSize: 10,
                        pageSizeOptions: [],
                        tableLayout: "fixed",
                    }}

                    editable={{
                        onRowDelete: (oldData) =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                    {
                                        let clone = [];
                                        Object.assign(clone, this.state.data);
                                        const index = this.state.data.indexOf(oldData);
                                        this.pubDelete(clone[index].title);
                                        clone.splice(index, 1);
                                        this.setState({ data:clone }, () => {
                                            resolve();
                                       });
                                    }
                                    resolve();
                                }, 1000);
                            }),
                    }}
                />
            </div>
        );
    }
}