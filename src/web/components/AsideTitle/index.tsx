import * as React from "react";
import "./asideTitle.css";

const AsideTitle:React.FunctionComponent<{title: string}> = ({
  title
}):JSX.Element => {
  return (
    <div className="asideTitle">
      <p>{ title }</p>
      <span className="iconfont">&#xe635;</span>
    </div>
  );
};

export default AsideTitle;