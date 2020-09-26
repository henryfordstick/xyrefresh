import * as React from "react";

import "./serverProject.css";

const {useState} = React;

interface ServerIntro{
  img: string,
  title: string,
  en: string
}

interface ServerContext{
  img: string,
  text: string
}

interface ServerProject {
  serverIntro: ServerIntro,
  serverContext: ServerContext[]
}

const ServerProject:React.FunctionComponent<ServerProject> = ({
  serverIntro,
  serverContext
}):JSX.Element => {
  let [list,setList]  = useState(false);
  const images = require('@assets/images/'+ serverIntro.img);
  const imagesCross = require('@assets/images/cross-'+ serverIntro.img);

  return (
    <div className={["server-project",serverContext.length > 4 ? "more" : null].join(" ")}>
      <div className="server-intro"
           style={{ backgroundImage: 'url('+ images +')'}}>
        <span className="server-intro-bj" style={{ backgroundImage: 'url('+ imagesCross +')'}}/>
        <h3>{ serverIntro.title }</h3>
        <p>{ serverIntro.en }</p>
      </div>
      <ul className={["server-context",!list ? "over" : null].join(" ")}>
        {
          serverContext.map((x,y) => (<li key={y} className="server-cell">
            <div className="img">
              <img src={require("@assets/images/"+x.img)} alt={x.text}/>
            </div>
            <p>{ x.text }</p>
          </li>))
        }



      </ul>
      {
        serverContext.length > 4
          ? (<div className="listOpen">
            <span onClick={() => setList(!list)}>{ !list ? '查看更多' : '收起'}</span>
          </div>)
          : null
      }
    </div>
  );
};

export default ServerProject;