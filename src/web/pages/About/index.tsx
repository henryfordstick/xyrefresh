import * as React from "react";
import BackImage from "@components/BackImage";
import Article from "@pages/About/components/Article";
import ContactUS from "@components/ContactUS";
import Breadcrumbs from "@components/BreadCrumbs";
import AsideTitle from "@components/AsideTitle";
import {articleJson} from "@models/about.data";

const About:React.FunctionComponent = () => {
  return (
    <>
      <BackImage
        img={require('@assets/images/banner-about.png')}
        height={360}
        tips={'banner'}
      />
      <Breadcrumbs
        breadLink={[{
          text: '关于我们',
        }]}
      />
      <div className="content">
        <div className="mainContainer">
          <aside>
            <AsideTitle title={'关于我们'}/>
            <ContactUS/>
          </aside>
          <main>
            <Article artJson={articleJson} />
          </main>
        </div>
      </div>
    </>
  );
};

export default About;