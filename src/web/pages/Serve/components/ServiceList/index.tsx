import * as React from "react";
import "./serviceList.css";

interface ServiceListProps {
  data: Array<any>,
  activeIndex: number
}

const ServiceList:React.FunctionComponent<ServiceListProps>= ({
  data,
  activeIndex
}):JSX.Element => {
  return (
    <ul className="serviceList">{
      data[activeIndex]['proList'].map((x,y) => (
        <li key={y}>
        <span className="img">
          <img src={require('@assets/images/'+x.img)} alt={x.text}/>
        </span>
          <p>{x.text}</p>
        </li>
      ))
    }</ul>
  );
};

export default ServiceList;