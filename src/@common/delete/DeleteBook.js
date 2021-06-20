import React, { useState , Component } from 'react';
import MaterialTable from 'material-table';
import '../../stylesheets/components/Table.css';

import { deletebook, getAllBooks } from "../../api";
import {message} from 'antd';



export default class DeleteBook extends Component{

   
    state={
        columns:[
            {
                title: 'ISBN',
                field: 'isbn',
                editable: 'onAdd',
                
            },
            {
                title: 'Title',
                field: 'title',
                editable: 'onAdd',
                width: '10px'
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
        const allBooks = await getAllBooks(); //get the users from db using api
        allBooks.data.books.map(book => {
            book.authors = book.authors.join(', ');
        });
   
        this.setState({data:allBooks.data.books}); //set the data state
    }

    bookDelete = async (ISBN) =>{
        try{
            await deletebook(ISBN);
        } catch(e){
            message.error("Cannot Delete Book.")
        }
        
    }

    render(){
         return(
            <div className="delete-table-container">
                <MaterialTable title="List of Books"
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
                                        this.bookDelete(clone[index].isbn);
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