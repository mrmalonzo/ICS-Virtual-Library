import React from 'react';
import '../../stylesheets/components/Books.css';

const Books = ({ datas }) => {

  return (
    <div className='list-group mb-4'>
      {datas.map(data => (

        <div className="book-container">
          <img src={data.cover} className="book-cover"></img>
          <div key={data.id} className='list-group-item'>
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
              
              { data.date_of_publication && (

                  <div className="date">
                  Date Published: {data.date_of_publication}
                  </div>

              )}

              { data.isbn && (

              <div className="date">
              ISBN Number: {data.isbn}
              </div>

              )}
            
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
              
          </div>

        </div>
      )
      
      )}
    </div>
  );
};

export default Books;