import * as React from "react";
import markdown from "@utils/markdown";
import "./article.css";


interface ArticleProps {
  title: string,
  content: string
}

const Article:React.FunctionComponent<{artJson: ArticleProps}> = ({artJson}):JSX.Element => {
  const html  = markdown.marked(artJson.content) as string;
  return (
    <article>
      <h2>{ artJson.title }</h2>

      <div dangerouslySetInnerHTML={{__html: html}}/>
    </article>
  );
};

export default Article;