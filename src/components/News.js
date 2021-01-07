import React from "react";
import ArticleList from './ArticleList';
import "./MainPage.css";
import { getNewsArticles } from "../Api";

class News extends React.Component {
  state = {
    articles: [],
    apiError: ""
  };

  async componentDidMount() {
    try {
      const response = await getNewsArticles();
      this.setState({ articles: response.articles });
    } catch (error) {
      this.setState({ apiError: "Could not find any articles" });
    }
  }


  render() {
    
    const { articles, apiError } = this.state;
  
    return <div>





     
     <div class="ui fluid container about" style={{ paddingBottom: 25}}>
        <h1 className="Title_About Cinzel ">
          Fishers{" "}
          <span
            className="about Tangerine"
            style={{ color: "white", padding: 22 }}
          >
            of
          </span>Men
        </h1>
      {articles.length > 0 && <ArticleList articles={articles} />}
      {apiError && <p>Could not fetch any articles. Please try again.</p>}
      </div>


</div>


}

}
export default News;