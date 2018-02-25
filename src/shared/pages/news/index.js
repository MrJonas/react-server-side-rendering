import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchNews,addNews } from "../../actions";
import NewsList from "./NewsList";
import AddNewsForm from "./AddNewsForm";

class News extends Component {
  static initialAction() {
    return fetchNews();
  }

  componentDidMount() {
    if (!this.props.news) {
      this.props.dispatch(News.initialAction());
    }
  }

  handleAddNews(news){
      this.props.dispatch(addNews(news));
  }

  render() {
    const { news } = this.props;
      return <div>
        <AddNewsForm addNews={ (news)=> this.handleAddNews(news) }/>
        <NewsList news={news} />
      </div>;
  }
}

const mapStateToProps = state => ({
  news: state.news
});

export default connect(mapStateToProps)(News);
