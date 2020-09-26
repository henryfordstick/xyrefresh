import * as React from "react";
import "./backImage.css";

interface BackImageProps {
  img: string,
  height: number,
  bg?: boolean,
  tips?: string
}

const BackImage:React.FunctionComponent<BackImageProps> = ({
  img,
  height,
  bg,
  tips
}):JSX.Element => {
  return  (
    <div className="backImages"
         style={{ height: height + 'px',position: bg ? "absolute" : "relative"  }}>
      <img src={img} alt={ tips ? tips : img}/>
    </div>
  );
};

export default BackImage;