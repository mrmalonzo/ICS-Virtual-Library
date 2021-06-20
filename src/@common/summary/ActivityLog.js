
import React, { Component, Fragment } from 'react';
import { activitylog } from 'api/summary';
// import { Tabs } from 'antd';
import '../../stylesheets/components/Report.css';

import { Spin, Pagination } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


const antIcon = <LoadingOutlined style={{ fontSize: 36 }} spin />;


class ActivityLog extends Component {
    
    state = {
        data: null,
        loading: false,
        dataPerPage: 10,
        currentPage: 1,
        indexOfFirstData: 0,
        indexOfLastData: 10,
        length: null
    }

    onChange = (pageNumber) => {

        const lastIndex = pageNumber * this.state.dataPerPage
        const firstIndex = lastIndex - this.state.dataPerPage
        
    
        this.setState({
          currentPage: pageNumber,
          indexOfLastData: lastIndex,
          indexOfFirstData: firstIndex,
        })
    
    
      }

    componentDidMount = async () => {
        this.setState({
            loading: true
        })
        
        const activity =  await activitylog();
        const length = activity.data.activity_log.length;
        this.setState({
            data: activity.data.activity_log,
            length: length
        });   

        this.setState({
            loading:false
        })
        

    }

    getTime = (seconds) => {
        const d = new Date(seconds * 1000)

        return(d.toString())
    }


    render() {
        return(

            <Fragment>

                { this.state.loading == true ? (
                    <div className="loader">
                    <h1 className="report-header">Activity Log</h1>
                    <Spin indicator={antIcon} size="default" />
                    </div>
                ):(

                    <div className="report-container">
                    <h1 className="report-header">Activity Log</h1>
                    {this.state.data && this.state.data.slice(this.state.indexOfFirstData, this.state.indexOfLastData).map(data =>(
                        <div className="activity-entry">
                            <h3> <b>Name:</b> {data.first_name} {data.last_name} <b>Timestamp:</b> {this.getTime(data.timestamp.seconds)}</h3>
                        </div>
                    ))}
                    <Pagination style={{ marginBottom: 20, textAlign: 'center' }} total={this.state.length} onChange={this.onChange} defaultPageSize={this.state.dataPerPage} showSizeChanger={false}/>
                    </div>
                    )


                }


            </Fragment>
            
            
             
        );
    }
}


export default ActivityLog;