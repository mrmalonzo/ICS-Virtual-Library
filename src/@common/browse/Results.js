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
    toSearch: null,
    dataPerPage: 10,
    currentPage: 1,
    indexOfFirstData: 1,
    indexOfLastData: 10

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

  onSearch = async (value) => {

    this.setState({
      toSearch: value,
      loading: true
    })
    

    try {
      const results = await search(value);
      
      this.setState({
        data: results.data
      });

    } catch(e) {
    
      this.setState({
        data: []
      });

    }

    localStorage.setItem('search-word', value)

    this.setState({
      loading: false
    })

    this.props.history.push(`/browse?query=${value}`);  
  }

  componentDidMount() {

    
    /* 
      Check first if the user is coming
      from the landing page, and a prop
      is passed. Otherwise, check local storage 
      if refreshed to preserve search results.

    */
    
    const searchWord = localStorage.getItem("search-word")
    
    if (this.props.data != null) {

      this.setState({
        toSearch: this.props.data
      })
      this.onSearch(this.props.data);

    } else if (searchWord != null) {
      
      this.setState({
        toSearch: searchWord
      })
      this.onSearch(searchWord);

    }      
    
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

            {this.state.toSearch == null && (

              <div>
                <h4> What Will You Search For Today? </h4>
              </div>

            )}

            {(this.state.loading == true && this.state.toSearch != null) && (
              <div className="loader">
              <Spin indicator={antIcon} size="default" />
              </div>
            )}


            {(this.state.loading == false && this.state.toSearch != null) && (
                    
              <div>
                <h4> {this.state.data.length} results for "{this.state.toSearch}" </h4>
                <Books datas={this.state.data.slice(this.state.indexOfFirstData, this.state.indexOfLastData)} />
                <Pagination style={{ marginBottom: 20, textAlign: 'center' }} total={this.state.data.length} itemRender={itemRender()} onChange={this.onChange} defaultPageSize={this.state.dataPerPage} showSizeChanger={false}/>
              </div>
            )}
       
          </div>
        </div>
      );
  }
};

export default withRouter(Results);