import React, { Component } from 'react';
import Books from './Books';
import { withRouter } from "react-router";

import { searchAll, searchBooks, searchPublications } from '../../api';

import { Pagination, Input, Spin, Radio, Space } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import { SearchIllustration, Searching} from '../../assets/images';
import '../../stylesheets/components/Results.css';


const { Search } = Input;
const antIcon = <LoadingOutlined style={{ fontSize: 36 }} spin />;


class Results extends Component {

  state = {
    data: null,
    loading: true,
    toSearch: null,
    type: "all",
    dataPerPage: 10,
    currentPage: 1,
    indexOfFirstData: 0,
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
    
    window.scrollTo(0, 0)

  }

  onSearch = async (value) => {

    this.setState({
      toSearch: value,
      loading: true,
    })
    

    try {

      
      if (this.state.type === "books") {
        const results = await searchBooks(value)
        this.setState({
          data: results.data
        });

      } else if (this.state.type === "publications") {
        const results = await searchPublications(value)
        this.setState({
          data: results.data
        });
      } else {
        const results = await searchAll(value);
        this.setState({
          data: results.data
        });

      }
      
      
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

  onTypeChange = async (e) => {

    const value = localStorage.getItem("search-word")

    this.onChange(1);
    
    this.setState({
      toSearch: value,
      loading: true,
    })

    if (e.target.value ==="All") {
      this.setState({
        type:"all"
      })
      const results = await searchAll(value);
      this.setState({
        data: results.data,
      });
    } else if (e.target.value === "Books") {
      this.setState({
        type:"books"
      })
      try {
        const results = await searchBooks(value)
        this.setState({
          data: results.data,
        });

      } catch(e) {
        this.setState({
          data:[]
        })
      }
      

    } else if (e.target.value === "Publications") {
      this.setState({
        type:"publications"
      })

      try {

        const results = await searchPublications(value);
        this.setState({
          data: results.data,
        });

      } catch(e) {
        this.setState({
          data:[]
        })
      }
      

    }

    localStorage.setItem('search-word', value)

    this.setState({
      loading: false
    })

  }

  passToView = (data) => {
    this.props.passToView(data)
  }

  render () {
      return (
        <div className='container'>

          <div className='radio-group'>
          <h2 className = "filter-title">Refine Results</h2>
            <Radio.Group onChange={this.onTypeChange}defaultValue="All">
              <Space direction="vertical">
                <Radio.Button value="All">All</Radio.Button>
                <Radio.Button value="Books">Books</Radio.Button>
                <Radio.Button value="Publications">Publications</Radio.Button>
              </Space>
            </Radio.Group>

          </div>


          <div className='results-container'>

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
                  <h4> What Will You Discover Today? </h4>
                  
                  <img src={SearchIllustration} className="search-illustration" alt ="What To Search"/>
                </div>

              )}

              {(this.state.loading === true && this.state.toSearch != null) && (
                <div className="loader">
                <Spin indicator={antIcon} size="default" />
                </div>
              )}


              {(this.state.loading === false && this.state.toSearch != null) && (
                      
                <div>
                  {(this.state.data.length > 0 ? (
                    <div>
                      <h4> {this.state.data.length} Results For "{this.state.toSearch}" </h4>
                      <Books passToView ={this.passToView}datas={this.state.data.slice(this.state.indexOfFirstData, this.state.indexOfLastData)} />
                      <Pagination style={{ marginBottom: 20, textAlign: 'center' }} total={this.state.data.length} onChange={this.onChange} defaultPageSize={this.state.dataPerPage} showSizeChanger={false}/>
                    </div>

                  ):(
                    <div>
                      <h4> No Results For "{this.state.toSearch}" </h4>
                      <img src={Searching} className="search-illustration" alt ="Searching"/>
                    </div>

                  ))}
                 
      
                </div>
              )}


          </div>
          
          
       
          </div>
        </div>
      );
  }
};

export default withRouter(Results);