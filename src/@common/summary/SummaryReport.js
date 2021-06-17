import React, { Component } from 'react';
import { summaryreport } from 'api/summary';
import { Tabs } from 'antd';
import '../../stylesheets/components/Report.css';

const { TabPane } = Tabs;
    
function callback(key) {
        console.log(key);
}

class SummaryReport extends Component {
    
    state = {
        data: null
    }

    componentDidMount = async () => {
            const report =  await summaryreport();
            console.log(report.data.summary);
            this.setState({
                data: report.data.summary
            });            
    }

    render() {
        return(
            <div>
               <div className="report-container">
                   <h1 className="report-header">Summary Report</h1>
                   <Tabs defaultActiveKey="1">
                       <TabPane tab="Users" key="1">
                            <div>
                                <ol>
                                {this.state.data && this.state.data.users.map( data => (
                                        <li key={data.first_name}>
                                            <h3>{data.first_name} {data.last_name}</h3>
                                        </li>
                                    ))} 
                                </ol>
                            </div>
                       </TabPane>
                       <TabPane tab="Books" key="2">
                        <div >
                            {this.state.data && this.state.data.books.map( data => (
                                    <li key={data.title} className="summary-entry">
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
                            </div>
                       </TabPane>
                       <TabPane tab="Publications" key="3">
                        <div className="summary-entry">
                                {this.state.data && this.state.data.publications.map( data => (
                                        <li key={data.title} className="summary-entry">
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
                            </div>
                       </TabPane>


                   </Tabs>


                   
                </div>

            </div>
        );
    }
}


export default SummaryReport;
