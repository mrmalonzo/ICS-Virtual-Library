import React, {Component} from 'react';
import '../../stylesheets/components/Books.css';
import { withRouter } from "react-router";


class Books extends Component {


  onClick = (data) => {
    this.props.passToView(data);
    this.props.history.push(`/view?query=${data}`);


  }

  render () {

    return (
      <div className='list-group mb-4'>
        {this.props.datas.map(data => (
  
          <div className="book-container">
            <img src={data.cover} className="book-cover" alt ="Book-Cover"></img>
            <div key={data.id} className='list-group-item'>

                
                <h1 className="book-title" onClick={() => 
                  {
                    const toPass = data.isbn ? (data.isbn) : (data.title)
                    this.onClick(toPass)}
                  }>


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

                  { data.journal && (
                    <a href={data.journal} className="source-code">
                      Journal
                    </a>
                  )}

                  { data.poster && (
                    <a href={data.poster} className="source-code">
                      Poster
                    </a>
                  )}
  
                </div>
                
            </div>
  
          </div>
        )
        
        )}
      </div>
    );

  }
  
};

export default withRouter(Books);