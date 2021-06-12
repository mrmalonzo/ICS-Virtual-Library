import React, { Component } from 'react';
import Books from './Books';
import { withRouter } from "react-router";

import { search } from '../../api';

import { Pagination, Input, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import '../../stylesheets/components/Results.css';



const { Search } = Input;
const antIcon = <LoadingOutlined style={{ fontSize: 36 }} spin />;


function itemRender(current, type, originalElement) {
  if (type === 'prev') {
    return <a>Previous</a>;
  }
  if (type === 'next') {
    return <a>Next</a>;
  }
  return originalElement;
}


class Results extends Component {

  state = {
    data: null,
    loading: true,
    toSearch: null
  }

  onSearch = async (value) => {

    this.setState({
      loading: true
    })
    

    try {
      const results = await search(value);
      console.log(results);
      
      this.setState({
        data: results.data
      });
    

    } catch(e) {
      console.log("Error")
      this.setState({
        data: []
      });

    }

    this.setState({
      toSearch: value,
      loading: false
    })

    this.props.history.push(`/browse?query=${value}`);  
}

  componentDidMount() {
    this.onSearch(this.props.data);

  }

  
  render () {
      return (
        <div className='container'>
          
          <Search
            placeholder="Search ICS Virtual Library"
            style = {{ marginBottom: 20 }}
            enterButton="Search"
            size="large"
            onSearch={this.onSearch}
          />
          
          <div className="numresults">

            { this.state.loading && (
              <div className="loader">
              <Spin indicator={antIcon} size="default" />
              </div>
            )}


            { (this.state.data != null && this.state.loading == false) && (
                    
              <div>
                <h4> Showing {this.state.data.length} Results for "{this.state.toSearch}" </h4>
                <Books datas={this.state.data} />
              </div>
            )}

       
          </div>

          

        </div>
      );


  }
  
};

export default withRouter(Results);