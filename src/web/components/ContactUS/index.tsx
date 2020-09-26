import * as React from "react";

import "./contactUS.css";
import {useRootData} from "@tools/useRootData";
import {RootStoreType} from "@models/root.store";


const ContactUS:React.FunctionComponent = ():JSX.Element => {

  const {address,tel} = useRootData((store:RootStoreType) => ({
    address: store.common.address,
    tel: store.common.tel
  }));

  return (
    <div className="contactContainer">
      <h3>联系我们</h3>
      <div className="contactContent">
        <div>
          <p><span className="iconfont">&#xe769;</span> 公司地址：</p>
          <p>{ address }</p>
        </div>
        <div>
          <p><span className="iconfont">&#xe634;</span> 联系电话：</p>
          <p>{ tel[0] }</p>
        </div>
        <div className="WeChat">
          <img src={require('@assets/images/wechat.png')} alt="WeChat" />
        </div>
      </div>
    </div>
  );
};

export default ContactUS;