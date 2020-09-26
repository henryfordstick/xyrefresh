import * as React from "react";
import "./articleTitle.css";


interface ArticleTitle {
  title: string,
  initial: string,
  initialColor: string,
  tips: string,
  isWhite?: boolean
}

const ArticleTitle:React.FunctionComponent<ArticleTitle> = (
  {
    title,
    initial,
    initialColor,
    tips,
    isWhite
  }
):JSX.Element => {

  return (
    <div className={['article-title',isWhite ? "white" : null ].join(" ")}>
      <div className="context">
        <div className="context-bj"/>
        <div className="context-text">
          <p className="initial" style={{ color: initialColor }}>
            { initial.substr(0,1).toLocaleUpperCase() }
          </p>
          <div className="ctx-content">
            <h3>{ title }</h3>
            <p>{ initial.substr(1,initial.length - 1) }</p>
          </div>
        </div>
      </div>
      <p className="tips">{ tips }</p>
    </div>
  );
};

export default ArticleTitle;