import React, { useState } from 'react';
import MaterialTable from 'material-table';
import '../stylesheets/Table.css';


const Table = () => {
    const [columns, setColumns] = useState([
        {
            title: 'ID',
            field: 'id',
            editable: 'onAdd',
        },
        { 
            title: 'LASTNAME',
            field: 'lastname',
            editable: 'onAdd',
        },
        {
            title: 'FIRSTNAME',
            field: 'firstname',
            editable: 'onAdd',
        },
        {
            title: 'AGE',
            field: 'age',
            editable: 'onAdd',
        },
        {
            title: 'EMAIL',
            field: 'email',
            editable: 'onAdd',
        },
        {
            title: 'ROLE',
            field: 'role',
            lookup: { 1: "Administrator", 2: "Student", 3: "Guest"}
        }
    ]);
    const [data, setData] = useState([
        { id: 1, lastname: 'Aguilar', firstname: 'Daniel Pete', age: 21, email: 'dmaguilar2@up.edu.ph', role: '1'},
        { id: 2, lastname: 'Crespo', firstname: 'Steven David', age: 21, email: 'sacrespo@up.edu.ph', role: '1'},
        { id: 3, lastname: 'Muñoz', firstname: 'Jared Elijah', age: 21, email: 'jemunoz@up.edu.ph', role: '1'},
        { id: 4, lastname: 'Malonzo', firstname: 'Marlon', age: 21, email: 'mrmalonzo@up.edu.ph', role: '2'},
        { id: 5, lastname: 'Aguilar', firstname: 'Daniel Pete', age: 21, email: 'dmaguilar2@up.edu.ph', role: '3'},
        { id: 6, lastname: 'Crespo', firstname: 'Steven David', age: 21, email: 'sacrespo@up.edu.ph', role: '3'},
        { id: 7, lastname: 'Muñoz', firstname: 'Jared Elijah', age: 21, email: 'jemunoz@up.edu.ph', role: '3'},
        { id: 8, lastname: 'Malonzo', firstname: 'Marlon', age: 21, email: 'mrmalonzo@up.edu.ph', role: '3'},
        { id: 5, lastname: 'Aguilar', firstname: 'Daniel Pete', age: 21, email: 'dmaguilar2@up.edu.ph', role: '2'},
        { id: 6, lastname: 'Crespo', firstname: 'Steven David', age: 21, email: 'sacrespo@up.edu.ph', role: '2'},
        { id: 7, lastname: 'Muñoz', firstname: 'Jared Elijah', age: 21, email: 'jemunoz@up.edu.ph', role: '3'},
        { id: 8, lastname: 'Malonzo', firstname: 'Marlon', age: 21, email: 'mrmalonzo@up.edu.ph', role: '2'},
        { id: 1, lastname: 'Aguilar', firstname: 'Daniel Pete', age: 21, email: 'dmaguilar2@up.edu.ph', role: '1'},
        { id: 2, lastname: 'Crespo', firstname: 'Steven David', age: 21, email: 'sacrespo@up.edu.ph', role: '1'},
        { id: 3, lastname: 'Muñoz', firstname: 'Jared Elijah', age: 21, email: 'jemunoz@up.edu.ph', role: '1'},
        { id: 4, lastname: 'Malonzo', firstname: 'Marlon', age: 21, email: 'mrmalonzo@up.edu.ph', role: '2'},
        { id: 5, lastname: 'Aguilar', firstname: 'Daniel Pete', age: 21, email: 'dmaguilar2@up.edu.ph', role: '3'},
        { id: 6, lastname: 'Crespo', firstname: 'Steven David', age: 21, email: 'sacrespo@up.edu.ph', role: '3'},
        { id: 7, lastname: 'Muñoz', firstname: 'Jared Elijah', age: 21, email: 'jemunoz@up.edu.ph', role: '3'},
        { id: 8, lastname: 'Malonzo', firstname: 'Marlon', age: 21, email: 'mrmalonzo@up.edu.ph', role: '3'},
        { id: 5, lastname: 'Aguilar', firstname: 'Daniel Pete', age: 21, email: 'dmaguilar2@up.edu.ph', role: '2'},
        { id: 6, lastname: 'Crespo', firstname: 'Steven David', age: 21, email: 'sacrespo@up.edu.ph', role: '2'},
        { id: 7, lastname: 'Muñoz', firstname: 'Jared Elijah', age: 21, email: 'jemunoz@up.edu.ph', role: '3'},
        { id: 8, lastname: 'Malonzo', firstname: 'Marlon', age: 21, email: 'mrmalonzo@up.edu.ph', role: '2'}
    ]);

    return(
        <div className="table_container">
            <MaterialTable title="Assign Roles"
                data = {data}
                columns = {columns}
                options={{
                    actionsColumnIndex: -1,
                    pageSize: 10,
                    pageSizeOptions: []
                }}
                editable={{
                    onRowAdd: (newData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                {
                                    setData([...data, newData]);
                                    resolve();
                                }
                                resolve();
                            }, 1000);
                        }),
                    onRowUpdate: (newData, oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                {
                                    const dataUpdate = [...data];
                                    const index = oldData.tableData.id;
                                    dataUpdate[index] = newData;
                                    setData([...dataUpdate]);

                                    resolve();

                                }
                                resolve();
                            }, 1000);
                        }),
                    onRowDelete: (oldData) =>
                        new Promise((resolve, reject) => {
                            setTimeout(() => {
                                {
                                    const dataDelete = [...data];
                                    const index = oldData.tableData.id;
                                    dataDelete.splice(index, 1);
                                    setData([...dataDelete]);

                                    resolve();
                                }
                                resolve();
                            }, 1000);
                        })
                }}
            />
        </div>
    )
}


export default Table;