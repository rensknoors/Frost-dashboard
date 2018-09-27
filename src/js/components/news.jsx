import React from "react";
import axios from "axios";

import NewsArticle from "./newsArticle.jsx";

const newsapi =
  "https://newsapi.org/v2/top-headlines?sources=crypto-coins-news";

export default class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      articles: []
    };
  }

  getData() {
    axios
      .get(newsapi, {
        headers: { "X-Api-Key": "3a81c90f38fc4f089f320533fdd2c712" }
      })
      .then(res => {
        const news = res.data;
        this.setState({ articles: news.articles });
      });
  }

  componentDidMount() {
    this.getData();
    this.newsUpdate = setInterval(() => this.getData(), 60000);
  }

  render() {
    return (
      <div className="news-container">
        <div className="articles">
          {this.state.articles.map(article => {
            return (
              <NewsArticle
                key={article.publishedAt}
                title={article.title}
                image={article.urlToImage}
                date={article.publishedAt}
                description={article.description}
                content={article.content}
                url={article.url}
              />
            );
          })}
        </div>
        <small className="article-credits sub-text">
          Powered by{" "}
          <a href="https://newsapi.org/" target="_blank">
            News API
          </a>
        </small>
      </div>
    );
  }
}
