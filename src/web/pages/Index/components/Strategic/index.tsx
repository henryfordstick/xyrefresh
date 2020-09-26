import * as React from "react";

import "./strategic.css";

interface StrategicProps {
  img: string,
  tips: string
}

const Strategic:React.FunctionComponent<{data: Array<StrategicProps>}> = ({
  data
}):JSX.Element => {
  return (
    <div className="content">
      <ul className="strategicContainer">{
        data.map((x,y) => (
          <li key={y}>
            <img src={require('@assets/images/'+x.img)} alt={x.tips}/>
          </li>
        ))
      }</ul>
    </div>
  );
};

export default Strategic;