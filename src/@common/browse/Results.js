import React, { useState, useEffect } from 'react';
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


const Results = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/comments');
      setDatas(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);


  // Get current datas
  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = datas.slice(indexOfFirstData, indexOfLastData);

  // Change page
  const onChange = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className='container'>
      <Search
        placeholder="Search ICS Virtual Library"
        style = {{ marginBottom: 20 }}
        enterButton="Search"
        size="large"
        onSearch={value => console.log(value)}
      />
      <div className="numresults">
        {datas.length} Results
      </div>
      <Books datas={currentData} loading={loading} />
      <Pagination style={{ marginBottom: 20, textAlign: 'center' }} total={datas.length} itemRender={itemRender} onChange={onChange} defaultPageSize={dataPerPage} showSizeChanger={false}/>
    </div>
  );
};

export default Results;