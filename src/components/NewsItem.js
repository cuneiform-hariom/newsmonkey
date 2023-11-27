import React, { Component } from 'react'

export class NewsItem extends Component {



    render() {
        let {title, description, imageurl, newsurl, author, publisheddate} = this.props;
        return (
            <div>
                <div className="card newscard">
                    <img src={!imageurl?"https://www.mypunepulse.com/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-25-at-12.04.01-PM-jpeg.webp":imageurl} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <p className="card-text"><small className="text-body-secondary">By {!author?"Unknown":author} on {new Date(publisheddate).toGMTString()}</small></p>
                            <a href={newsurl} rel="noopener" target='_blank' className="btn btn-primary btn-sm">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
