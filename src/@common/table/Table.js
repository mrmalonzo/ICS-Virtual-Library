import React, { useState , Component } from 'react';
import MaterialTable from 'material-table';
import '../../stylesheets/components/Table.css';

import {readAllUsers, updateRole} from "../../api/students";
import {message} from 'antd';

export default class Table extends Component{

   
    state={
        columns:[
            {
                title: 'Email',
                field: 'email',
                editable: 'onAdd',
            },
            {
                title: 'First Name',
                field: 'first_name',
                editable: 'onAdd',
            },
            { 
                title: 'Last Name', 
                field: 'last_name',
                editable: 'onAdd',
            },
            {
                title: 'Role',
                field: 'user_type',
                lookup: { admin: "Administrator", student: "Student"}
            }
        ],
        data:[]
    };
    


    async componentDidMount(){
        const allUsers = await readAllUsers(); //get the users from db using api
        this.setState({data:allUsers.data.users}); //set the data state
    }

    updateRole = async (email) =>{
        try{
            await updateRole(email); //change role to database
        } catch(e){
            message.error("Cannot Update User.")
        }
        
    }

    render(){
         return(
            <div className="table_container">
                <MaterialTable title="List of Users"
                    data = {this.state.data}
                    columns = {this.state.columns}
                    options={{
                        actionsColumnIndex: -1,
                        pageSize: 10,
                        pageSizeOptions: [],
                        tableLayout: "fixed",
                    }}

                    editable={{
                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve, reject) => {
                                setTimeout(() => {
                                  {
                                    let clone = [];
                                    Object.assign(clone, this.state.data);
                                    const index = this.state.data.indexOf(oldData);
                                       console.log(index);
                                       clone[index] = newData;
                                       console.log(clone[index]);
                                       this.updateRole(clone[index].email); //pass the email
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