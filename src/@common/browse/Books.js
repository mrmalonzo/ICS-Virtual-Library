import React from 'react';
import '../../stylesheets/components/Books.css';

const Books = ({ datas, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {datas.map(data => (
        <li key={data.id} className='list-group-item'>
            <div className="title">
                {data.name}
            </div>

            <div className="author">
                Author: {data.email}
            </div><br/><br/>

            <div className="date">
                Date Published: {data.id}
            </div><br/><br/>

            <div className="description">
                Description: {data.body}
            </div>
        </li>
      ))}
    </ul>
  );
};

export default Books;