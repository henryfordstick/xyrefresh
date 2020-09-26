import * as React from "react";
import "./footer.css"
import BackImage from "@components/BackImage";
import {useRootData} from "@tools/useRootData";
import {RootStoreType} from "@models/root.store";

const Footer:React.FunctionComponent = ():JSX.Element => {
  const {tel,companyName,address} = useRootData((store:RootStoreType) => ({
    tel: store.common.tel,
    companyName: store.common.companyName,
    address: store.common.address
  }));
  return (
    <footer>
      <BackImage
        img={require('@assets/images/footer-bg.png')}
        bg={true}
        height={264}
      />
      <div className="content">
        <div className="footer-top">
          <div className="footer-info-lt">
            <p><span className="iconfont">&#xe769;</span> 空气净化除甲醛-{ companyName }</p>
            <p><span className="iconfont">&#xe634;</span> 联系电话：{tel[0] }</p>
            <p><span className="iconfont">&#xe61e;</span> 公司地址：{ address }</p>
          </div>
          <span className="footer-info-rt">
            <img src={require('@assets/images/wechat.png')} alt="WeChat"/>
          </span>
        </div>
        <div className="footer-bottom">
          <address>COPYRIGHT &copy; 2018 - 2020 { companyName } 版权所有 </address>
        </div>
      </div>
    </footer>
  );
};

export default Footer;