import React, { Component, Fragment } from 'react';
import { activitylog } from 'api/summary';
// import { Tabs } from 'antd';
import '../../stylesheets/components/Report.css';

import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


const antIcon = <LoadingOutlined style={{ fontSize: 36 }} spin />;


class ActivityLog extends Component {
    
    state = {
        data: null,
        loading: false
    }

    componentDidMount = async () => {
        this.setState({
            loading: true
        })
        
        const activity =  await activitylog();
        console.log(activity.data.activity_log);
        this.setState({
            data: activity.data.activity_log

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
                    {this.state.data && this.state.data.map(data =>(
                        <div className="activity-entry">
                            <h3> <b>Name:</b> {data.first_name} {data.last_name} <b>Timestamp:</b> {this.getTime(data.timestamp.seconds)}</h3>
                        </div>
                    ))}
                    </div>
                    )


                }


            </Fragment>
            
            
             
        );
    }
}


export default ActivityLog;
