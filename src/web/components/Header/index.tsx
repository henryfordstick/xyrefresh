import * as React from "react";
import {NavLink} from "react-router-dom";
import {useRootData} from "@tools/useRootData";
import {RootStoreType} from "@models/root.store"

import "./header.css";

const {useState,useEffect} = React;

interface INavInfo{
  title: string,
  router: string,
  exact: boolean
}

const Header:React.FunctionComponent = ({}):JSX.Element => {
  let [menus,setMenus] = useState<boolean>(false);

  const {tel,getData} = useRootData((store:RootStoreType) => ({
    tel: store.common.tel,
    getData: store.common.getData
  }));
  getData();

  useEffect(() => {

  },[]);

  const navInfo:INavInfo[] = [{
    title: '网站首页',
    router: '/',
    exact: true
  },{
    title: '关于我们',
    router: '/about',
    exact: false
  },{
    title: '新闻资讯',
    router: '/news',
    exact: false
  },{
    title: '服务专区',
    router: '/service',
    exact: false
  },{
    title: '联系我们',
    router: '/ours',
    exact: false
  }];

  return (
    <header>
      <div className="header-top">
        <div className="content">
          <h1 className="logo">
            <NavLink className="logo-link" to={"/"}>
              <img src={require('@assets/images/logo.png')} alt="logo"/>
              <div className="logo-description">
                <p>空气净化专家</p>
                <p>让我们生存的空间远离污染</p>
              </div>
            </NavLink>
          </h1>
          <div className="contact">
            <div className="lt">
              <p>联系电话</p>
              {tel?.map((value, index) => <p key={index}>{value}</p>)}
            </div>
            <img src={require('@assets/images/wechat.png')} alt="WeChat"/>
          </div>
          <div onClick={() => setMenus(!menus)} className={['menuBtn',menus ? 'active' : null].join(' ')}/>
        </div>
      </div>
      <nav onClick={() => setMenus(false)} className={['header-bottom',menus ? 'active' : null].join(' ')}>
        <div className="content">
          <ul>{
            navInfo.map((r,i) => (
              <li key={i}>
                <NavLink
                  exact={r.exact}
                  className="guide-item"
                  activeClassName="active"
                  to={r.router}>
                  { r.title }
                </NavLink>
              </li>
            ))
          }</ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
