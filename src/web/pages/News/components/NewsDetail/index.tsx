import * as React from "react";
import {articleJson} from "@models/about.data";
import markdown from "@utils/markdown";
import {NavLink} from "react-router-dom";
import Shares from "@pages/News/components/Shares";
import "./newsDetail.css";


const NewsDetail:React.FC = ():JSX.Element => {
  const html = markdown.marked(articleJson.content) as string;
  const setParams  = (id: string,name: string) => {
    return {
      pathname: '/news/newsDetail',
      search: `?newsId=${id}&title=${name}`,
    };
  };

  return (
    <div className="newDetail">
      <div className="news-title">
        <h2>恭喜发顺丰大多数发大水发生发大水</h2>
        <p><span>发布时间：2020-11-03</span><span>浏览：0</span></p>
      </div>
      <div className="newsContent" dangerouslySetInnerHTML={{__html:html}} />
      <Shares/>
      <div className="sibling">
        <p>上一篇：<NavLink
          className="guide-item"
          to={setParams('11','22')}
        >恭喜发顺丰大多数发大水发生发大水</NavLink></p>
        <p>下一篇：<NavLink
          className="guide-item"
          activeClassName="active"
          to={setParams('11','22')}
        >恭喜发顺丰大多数发大水发生发大水</NavLink></p>
      </div>
    </div>
  );
};

export default NewsDetail;