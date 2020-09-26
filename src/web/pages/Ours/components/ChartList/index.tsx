import * as React from "react";
import "./chartList.css";

interface ChartListProps {
  chartList: Array<any>
}

const ChartList:React.FC<ChartListProps> = ({
  chartList
}):JSX.Element => {
  return (
    <ul className="chartList">{
      chartList.map((x,y) => (
        <li key={y}>
          <span><img src={require('@assets/images/'+x.img)} alt={x.text}/></span>
          <p className="text">{x.text}</p>
          <p className="tips">{x.tips}</p>
        </li>
      ))
    }</ul>
  );
};

export default ChartList;