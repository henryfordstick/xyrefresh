import * as React from "react";

import "./newInformation.css";
import {NavLink} from "react-router-dom";

interface NewInformationProps {
  id: string,
  title: string,
  img: string,
  content: string
}

function setParams(id: string,name: string):object {
  return {
    pathname: '/news/newsDetail',
    search: `?newsId=${id}&title=${name}`
  };
}

const NewInformation:React.FunctionComponent<{newJson: Array<NewInformationProps>}> = ({
  newJson
}):JSX.Element => {

  return (
    <ul className="newsList">{
        newJson.map((x,y) => (<li key={y}>
          {
            y < 2
              ? (<div className="img">
                <NavLink className="guide-item" target="_blank" to={setParams(x.id,x.title)}>
                  <img src={require("@assets/images/"+x.img)} alt={x.title}/>
                </NavLink>
              </div>)
              : null
          }
          <span>
        <strong>15</strong>
        <em>08<br/>2019</em>
      </span>
          <div className="newContext">
            <h4>
              <NavLink className="guide-item" target="_blank" to={setParams(x.id,x.title)}>
                { x.title }
              </NavLink>
            </h4>
            <p>
              <NavLink className="guide-item" target="_blank" to={setParams(x.id,x.title)}>
                { x.content }
              </NavLink>
            </p>
          </div>
        </li>))
      }</ul>
  );
};

export default NewInformation;