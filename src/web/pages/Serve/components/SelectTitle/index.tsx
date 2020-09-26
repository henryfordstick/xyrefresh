import * as React from "react";
import "./selectTitle.css";

interface SelectTitleProps {
  data: Array<any>,
  activeIndex: number,
  onClick: (count:number) => void
}

const SelectTitle:React.FC<SelectTitleProps> = ({
  data,
  activeIndex,
  onClick
}):JSX.Element => {
  return (
    <ul className="selectTitle">
      {
        data.map((x,y) => (
          <li key={y}
              className={y === activeIndex ? 'active' : '' }
              onClick={() => onClick(y)}>
            <h4>{x.title}</h4>
            <span className="iconfont">&#xe635;</span>
          </li>
        ))
      }
    </ul>
  );
};

export default SelectTitle;