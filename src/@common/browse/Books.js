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
            <div className="book-title">
                {data.title}
            </div>

            <div className="author">
                Author: {data.authors}
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