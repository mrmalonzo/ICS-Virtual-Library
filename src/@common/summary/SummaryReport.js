import React, { Component } from 'react';
import { summaryreport } from 'api/summary';
import { Spin, Tabs, Pagination } from 'antd';
import '../../stylesheets/components/Report.css';
import { LoadingOutlined } from '@ant-design/icons';


const { TabPane } = Tabs;
const antIcon = <LoadingOutlined style={{ fontSize: 36 }} spin />;


class SummaryReport extends Component {
    
    state = {
        data: null,
        loading: false,
        dataPerPageUsers: 10,
        dataPerPageBooks: 10,
        dataPerPagePubs: 10,
        currentPageUsers: 1,
        currentPageBooks: 1,
        currentPagePubs: 1,
        indexOfFirstDataUsers: 0,
        indexOfLastDataUsers: 10,
        indexOfFirstDataBooks: 0,
        indexOfLastDataBooks: 10,
        indexOfFirstDataPubs: 0,
        indexOfLastDataPubs: 10,
        lengthUsers: null,
        lengthBooks: null,
        lengthPubs: null
    }

    onChangeUsers = (pageNumberUsers) => {

        const lastIndexUsers = pageNumberUsers * this.state.dataPerPageUsers
        const firstIndexUsers = lastIndexUsers - this.state.dataPerPageUsers
        
    
        this.setState({
          currentPageUsers: pageNumberUsers,
          indexOfLastDataUsers: lastIndexUsers,
          indexOfFirstDataUsers: firstIndexUsers,
        })
    
    
    }

    onChangeBooks = (pageNumberBooks) => {

        const lastIndex = pageNumberBooks * this.state.dataPerPageBooks
        const firstIndex = lastIndex - this.state.dataPerPageBooks
        
    
        this.setState({
          currentPageBooks: pageNumberBooks,
          indexOfLastDataBooks: lastIndex,
          indexOfFirstDataBooks: firstIndex,
        })
    
    
    }

    onChangePubs = (pageNumberPubs) => {

        const lastIndex = pageNumberPubs * this.state.dataPerPagePubs
        const firstIndex = lastIndex - this.state.dataPerPagePubs
        
    
        this.setState({
          currentPagePubs: pageNumberPubs,
          indexOfLastDataPubs: lastIndex,
          indexOfFirstDataPubs: firstIndex,
        })
    
    
    }

    componentDidMount = async () => {

        this.setState({
            loading: true
        })
        


        const report =  await summaryreport();
        
        const users = report.data.summary.users.length
        const books = report.data.summary.books.length
        const pubs = report.data.summary.publications.length

        this.setState({
            data: report.data.summary,
            lengthUsers: users,
            lengthBooks: books,
            lengthPubs: pubs
        });            

        this.setState({
            loading: false
        })
        
    }

    render() {
        return(
            <div>

                
               <div className="report-container">
                   <h1 className="report-header">Summary Report</h1>
                   <Tabs defaultActiveKey="1">
                       <TabPane tab="Users" key="1">
                           {this.state.loading ? (
                               <Spin indicator={antIcon} size="default" />
                           ):(

                            <div>
                                <ol>
                                {this.state.data && this.state.data.users.slice(this.state.indexOfFirstDataUsers, this.state.indexOfLastDataUsers).map( data => (
                                        <li>
                                            <h3>{data.first_name} {data.last_name}</h3>
                                        </li>
                                    ))} 
                                </ol>
                                <Pagination style={{ marginBottom: 20, textAlign: 'center' }} total={this.state.lengthUsers} onChange={this.onChangeUsers} defaultPageSize={this.state.dataPerPageUsers} showSizeChanger={false}/>
                            </div>
                           )}
                           
                       </TabPane>
                       <TabPane tab="Books" key="2">

                            {this.state.loading ? (
                               <Spin indicator={antIcon} size="default" />
                            ):(
                                <div>
                                {this.state.data && this.state.data.books.slice(this.state.indexOfFirstDataBooks, this.state.indexOfLastDataBooks).map( data => (
                                        <li className="summary-entry">
                                            <h2 className="entry-title">{data.title}</h2>
                                            <div>
                                                {data.authors.map((authors_indiv) =>
                                                    <div>
                                                        {authors_indiv}
                                                    </div>
                                                )}
                                            </div>
                                        

                                        </li>
                                    ))} 
                                    <Pagination style={{ marginBottom: 20, textAlign: 'center' }} total={this.state.lengthBooks} onChange={this.onChangeBooks} defaultPageSize={this.state.dataPerPageBooks} showSizeChanger={false}/>
                                </div>
                           )}
                        
                       </TabPane>
                       <TabPane tab="Publications" key="3">

                       {this.state.loading ? (
                            <Spin indicator={antIcon} size="default" />
                        ):(

                            <div className="summary-entry">
                            {this.state.data && this.state.data.publications.slice(this.state.indexOfFirstDataPubs, this.state.indexOfLastDataPubs).map( data => (
                                    <li className="summary-entry">
                                        <h2 className="entry-title">{data.title}</h2>
                                        <div>
                                            {data.authors.map((authors_indiv) =>
                                                <div>
                                                    {authors_indiv}
                                                </div>
                                            )}
                                        </div>
                                    </li>
                                ))} 
                                <Pagination style={{ marginBottom: 20, textAlign: 'center' }} total={this.state.lengthPubs} onChange={this.onChangePubs} defaultPageSize={this.state.dataPerPagePubs} showSizeChanger={false}/>
                            </div>
                        )}
                        
                       </TabPane>


                   </Tabs>


                   
                </div>

            </div>
        );
    }
}


export default SummaryReport;