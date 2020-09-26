import * as React from "react";
import {chartList} from "@models/ours.data";
import Breadcrumbs from "@components/BreadCrumbs";
import AsideTitle from "@components/AsideTitle";
import BackImage from "@components/BackImage";
import ContactUS from "@components/ContactUS";
import ChartList from "@pages/Ours/components/ChartList";
import BaiduMap from "@pages/Ours/components/BaiduMap";

const Ours:React.FunctionComponent = () => {
  return (
    <div>
      <BackImage
        img={require('@assets/images/banner-ours.png')}
        height={360}
        tips={'banner'}
      />
      <Breadcrumbs
        breadLink={[{
          text: '联系我们',
        }]}
      />
      <div className="content">
        <div className="mainContainer">
          <aside>
            <AsideTitle title={'联系我们'}/>
            <ContactUS/>
          </aside>
          <main>
            <ChartList chartList={chartList}/>
            <BaiduMap/>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Ours;