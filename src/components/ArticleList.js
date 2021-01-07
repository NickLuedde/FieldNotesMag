import React from "react";
import { List } from "semantic-ui-react";

const ArticleList = (props) => {
  return (
    <List >
      {props.articles.map((article) => (
        <List.Item key={article.title}>
          
          <h1>{article.title} </h1> 
          <img src= {article.urlToImage}
       />
        </List.Item>
      ))}
    </List>
  );
};

export default ArticleList;