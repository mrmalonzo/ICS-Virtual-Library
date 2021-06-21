import React, {Component} from 'react';
import '../stylesheets/pages/ViewPage.css'

import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';
import {readBook, readPublication} from '../api'

import GoogleDocsViewer from 'react-google-docs-viewer'

const antIcon = <LoadingOutlined style={{ fontSize: 36 }} spin />;


class ViewPage extends Component {

    state = {
        data: null,
        loading: true
    }


    setData = async (toView) => {

        const isNotNumber = isNaN(toView)      
        
        
        if ( isNotNumber === false) {
            const results = await readBook(toView)
            
            this.setState({
                data: results.data.book
            })
            
        } else {
            
            const results = await readPublication(toView)
            
            this.setState({

                data: results.data.pubs
            })
        }



    }


    componentDidMount = async () => {

        this.setState({
            loading:true
        })
        
        const toView = localStorage.getItem("to-view")

        if (toView != null) {
            this.setData(toView)
        } else {
            this.setData(this.props.data)
        }

        this.setState({
            loading:false
        })
        

    }


    render() {

        return(
        
            <div className="View-page">

            

                {this.state.loading === true ? (
                    <div className="View-spinner">
                        <Spin indicator={antIcon} size="default" />
                    </div>
                ):(

                    this.state.data ? (

                        <div className="View-with-document">
                            <div className="View-outer-container">
                                <img src={this.state.data.cover} className="View-cover" alt="Cover"></img>
                                <div className ="View-inner-container">
                                    <h1> {this.state.data.title}</h1>
                                    <div className="View-authors">
                                        <h2 className="View-label">Authors: </h2>
                                        {this.state.data.authors.map((author => 
                                            <h2 className="View-author-name">{author}</h2>
                                        ))}
                                    </div>
                                    {this.state.data.date_of_publication && (
                                        <h2> Publication Date: {this.state.data.date_of_publication}</h2>
                                    )}
                                    
                                    {this.state.data.isbn && (
                                        <h2> ISBN: {this.state.data.isbn}</h2>
                                    )}
                                    
                                    {this.state.data.subject && (
                                        <h2> Subject: {this.state.data.subject}</h2>
                                    )}
                                    

                                    {this.state.data.keywords && (
                                        <div className="View-authors">
                                            <h2 className="View-label">Keywords: </h2>
                                            {this.state.data.keywords.map((keyword =>
                                                <h2 className="View-author-name">{keyword}</h2>      
                                            ))}
                                        </div>

                                    )}

                                <div className="links">
                                        { this.state.data.sourcecode && (
                                            <a href={this.state.data.sourcecode} className="source-code">
                                            Source Code
                                            </a>
                                        )}
                        
                                        { this.state.data.manuscript && (
                                            <a href={this.state.data.manuscript} className="source-code">
                                            Manuscript
                                            </a>
                                        )}
                        
                                        { this.state.data.abstract && (
                                            <a href={this.state.data.abstract} className="source-code">
                                            Abstract
                                            </a>
                                        )}

                                        { this.state.data.journal && (
                                            <a href={this.state.data.journal} className="source-code">
                                            Journal
                                            </a>
                                        )}

                                        { this.state.data.poster && (
                                            <a href={this.state.data.poster} className="source-code">
                                            Poster
                                            </a>
                                        )}
                        
                                </div>
                                    
                                </div>
                            </div>
                            <div className="View-documents">            
                                {this.state.data.manuscript && (
                                    <div className="View-document-viewer">
                                        <h2 className="View-manuscript">Manuscript</h2>
                                        <GoogleDocsViewer
                                            width="600px"
                                            height="700px"
                                            fileUrl={this.state.data.manuscript}
                                        />

                                    </div>
                                )}


                                {this.state.data.abstract && (

                                    <div className="View-document-viewer">
                                        <h2 className="View-manuscript">Abstract</h2>
                                        <GoogleDocsViewer
                                            width="600px"
                                            height="700px"
                                            fileUrl={this.state.data.abstract}
                                        />
                                    </div>
                                )}
                            </div>
                            </div>

                    ):(
                        <div className="View-spinner">
                            <Spin indicator={antIcon} size="default" />
                        </div>
                    )
                    
                )}
                                
                
                
            </div>
        );

    }
    

}

export default ViewPage;