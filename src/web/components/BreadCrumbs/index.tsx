import * as React from "react";
import {NavLink} from "react-router-dom";

import "./breadCrumbs.css";

export interface BreadcrumbsProps {
  text: string | null
  route?: string,
}

const Breadcrumbs:React.FunctionComponent<{breadLink: Array<BreadcrumbsProps>}> = ({
  breadLink
}):JSX.Element => {
  return (
    <div className="content">
      <ul className="breadCrumbs">
        <li>
          <NavLink to={'/'}>网站首页</NavLink>
        </li>
        {
          breadLink.map((x,y) => (
            <li key={y}>
              &nbsp;&gt;&nbsp;
              { x.route ? (
                <NavLink to={x.route}>{x.text}</NavLink>
              ) : x.text }
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default Breadcrumbs;