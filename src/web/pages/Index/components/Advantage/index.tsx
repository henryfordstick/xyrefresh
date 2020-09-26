import React from 'react';
import "./advantage.css";

const Advantage:React.FunctionComponent<{advJson:Array<{img: string,title: string,text: string}>}> = ({
  advJson
}):JSX.Element => {
  return (
    <div className="content">
      <ul className="advantageContainer">
        { advJson.map((x,y) => (<li className={[y < advJson.length / 2 ? 'active0' : 'active1'].join(" ")} key={y}>
            <img src={require("@assets/images/"+x.img)} alt={x.title}/>
            <h4>{x.title}</h4>
            <p dangerouslySetInnerHTML={{ __html: x.text.replace(/\n/g,'<br/>') }} />
          </li>))
        }
      </ul>
    </div>
  );
};

export default Advantage;