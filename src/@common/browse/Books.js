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
            <h1 className="book-title">
                {data.title}
            </h1>

            <div className="author">
              by {data.authors.map((authors) => 
                
                  <div className="author-name">
                    {authors} 
                  </div>
              
              )}
            </div>

            <div className="date">
                Date Published: {data.date_of_publication}
            </div>

            {/* <div className="description">
                Description: {data.body}
            </div> */}

            <div className="links">
              { data.sourcecode && (
                <a href={data.sourcecode} className="source-code">
                  Source Code
                </a>
              )}

              { data.manuscript && (
                <a href={data.manuscript} className="source-code">
                  Manuscript
                </a>
              )}

              { data.abstract && (
                <a href={data.abstract} className="source-code">
                  Abstract
                </a>
              )}

            </div>
            
        </li>
      ))}
    </ul>
  );
};

export default Books;