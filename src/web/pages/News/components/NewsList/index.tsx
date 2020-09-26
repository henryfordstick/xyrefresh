import * as React  from "react";
import { Pagination } from 'element-react'
import { NavLink} from "react-router-dom";
import { newsListJson as newsList } from "@models/news.data";

import "./newsList.css";



const NewsList:React.FC= ():JSX.Element => {
  const setParams  = (id: string,name: string) => {
    return {
      pathname: '/news/newsDetail',
      search: `?newsId=${id}&title=${name}`,
    };
  };

  return (
    <>
      <ul className="newsLists">{
        newsList?.map((x,y) => (
          <li key={y}>
            <div className="img">
              <img src={require('@assets/images/'+x.img)} alt={x.title}/>
            </div>
            <div className="list-content">
              <h3>
                <NavLink
                  className="guide-item"
                  activeClassName="active"
                  target="_blank"
                  to={setParams(x.id,x.title)}>
                  {x.title}
                </NavLink>
              </h3>
              <span className="time">{x.time}</span>
              <p>
                <NavLink
                  className="guide-item"
                  activeClassName="active"
                  target="_blank"
                  to={setParams(x.id,x.title)}>
                  {x.indexes}
                </NavLink>

              </p>
              <NavLink
                className="guide-button"
                activeClassName="active"
                target="_blank"
                to={setParams(x.id,x.title)}>
                MORE
              </NavLink>
            </div>
          </li>
        ))
      }</ul>
      { newsList?.length >= 10 ? (
        <Pagination
          layout={'prev, pager, next, jumper,total'}
          total={200}
        />
      ) : null }
    </>
  );
};

export default NewsList;
