import React, { Component } from 'react';
import { activitylog } from 'api/summary';
// import { Tabs } from 'antd';
import '../../stylesheets/components/SummaryReport.css';

class ActivityLog extends Component {
    
    state = {
        data: null
    }

    componentDidMount = async () => {
            const activity =  await activitylog();
            console.log(activity.data.activity_log);
            this.setState({
                data: activity.data.activity_log
            });            
    }

    render() {
        return(
            <div>
                <div className="report-container">
                    <h1 className="report-header">Activity Log</h1>
                    {this.state.data && this.state.data.map(data =>(
                        <div className="activity-entry">
                            <h3> <b>Name:</b> {data.first_name} {data.last_name} <b>Timestamp:</b> {data.timestamp.seconds}</h3>
                        </div>
                    ))}
                </div>
            </div> 
        );
    }
}


export default ActivityLog;
