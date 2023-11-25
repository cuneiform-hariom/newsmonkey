import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articles = [
        {
            "source": {
                "id": "news24",
                "name": "News24"
            },
            "author": "Herman Mostert",
            "title": "Laura Wolvaardt confirmed as full-time Proteas Women captain",
            "description": "Cricket South Africa has confirmed that Laura Wolvaardt will be the permanent captain of the Proteas Women in all three formats of the game.",
            "url": "https://www.news24.com/sport/cricket/proteas/laura-wolvaardt-confirmed-as-full-time-proteas-women-captain-20231124",
            "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/9464/1b2128bbc99142b68351bd0b7db8af9a.jpg",
            "publishedAt": "2023-11-24T10:41:13",
            "content": "<ul><li>Laura Wolvaardt has been confirmed as the new captain of the Proteas Women.</li><li>The 24-year-old will be South Africa's permanent captain in all three formats.</li><li>Cricket SA also name… [+5492 chars]"
        },
        {
            "source": {
                "id": "news-com-au",
                "name": "News.com.au"
            },
            "author": "Andrew McMurtry",
            "title": "Cricket farce ‘simply shouldn’t happen’",
            "description": "Brisbane Heat spinner Jess Jonassen has ridden her luck to help her WBBL team book its place in the tournament finals.",
            "url": "https://www.news.com.au/sport/cricket/simply-shouldnt-happen-jess-jonassen-not-out-after-being-clean-bowled/news-story/ed419231b1578e7194bed3e25946caf3",
            "urlToImage": "https://content.api.news/v3/images/bin/bb69014e628418f0a082046163d1668f",
            "publishedAt": "2023-11-24T09:28:00Z",
            "content": "Brisbane Heat spinner Jess Jonassen has ridden her luck to help her WBBL team book its place in the tournament finals.\r\nIn a match against the Sydney Thunder with the winner booking its place in the … [+3138 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]

    constructor() {
        super();
        console.log("hello");
        this.state = {
            articles: this.articles,
            loading: false
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <h2>NewsMonkey - Top Headlines</h2>


                    <div className="row">
                        {this.state.articles.map((element) => {

                            return <div key={element.url} className="col-md-3">
                                <NewsItem title={element.title} description={element.description} imageurl={element.urlToImage} />
                            </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default News
