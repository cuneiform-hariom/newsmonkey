import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Loading from './Loading';
import PropTypes from 'prop-types'
import Navbar from './Navbar';


export class News extends Component {

    static defauleProps = {
        country: "in",
        pageSize: 12,
        category: "general"
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title = this.props.category + " - NewsMonkey"
    }

    async componentDidMount() {
        let newurl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(newurl)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
        console.log("newurl", newurl)
    }

    prevNewsPage = async () => {
        let newurl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
        let data = await fetch(newurl)
        let parsedData = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }

    nextNewsPage = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {

        }
        else {
            let newurl = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
            this.setState({ loading: true })
            let data = await fetch(newurl)
            let parsedData = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }

    }

    render() {
        return (
            <div>
                <Navbar />
                <div className="container">
                    <h2 className="text-center py-5">NewsMonkey - Top {this.props.category} Headlines</h2>
                    {this.state.loading && <Loading />}
                    <div className="row">
                        {!this.state.loading && this.state.articles?.map((element) => {
                            return <div key={element.url} className="col-md-3">
                                <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage} newsurl={element.url} author={element.author} publisheddate={element.publishedAt} />
                            </div>
                        })}
                    </div>

                    <div className="container my-5">
                        <div className="d-flex justify-content-between">
                            <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.prevNewsPage}>Previous</button>
                            <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.nextNewsPage}>Next</button>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default News
