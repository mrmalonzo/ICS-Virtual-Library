import React, { Component, useState, useEffect } from 'react';
import Books from './Books';
import axios from 'axios';
import { Pagination, Input } from 'antd';
import '../../stylesheets/components/Results.css';



const { Search } = Input;

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
    loading: false
  }

  componentDidMount() {
    console.log(this.props.data)


  }

  
  render () {
      return (
        <div className='container mt-5'>
          <Search
            placeholder="Search ICS Virtual Library"
            style = {{ marginBottom: 20 }}
            enterButton="Search"
            size="large"
            onSearch={value => console.log(value)}
          />

          <div className="numresults">

            { this.props.data.length != null ? (
              <div>
              <h4> {this.props.data.length} Results </h4>
              <Books datas={this.props.data} loading={this.state.loading} />
              </div>
            ) : (
              <h4> What Will You Search For Today? </h4>
            )

            }
            
          </div>

          

        </div>
      );


  }
  
};

export default Results;