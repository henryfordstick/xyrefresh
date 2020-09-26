import * as React from "react";
import BackImage from "@components/BackImage";
import Breadcrumbs,{BreadcrumbsProps} from "@components/BreadCrumbs";
import AsideTitle from "@components/AsideTitle";
import ContactUS from "@components/ContactUS";
import {getQueryValue} from "@utils/util";
import { Route,RouteComponentProps } from "react-router-dom";
import NewsList from "@pages/News/components/NewsList";
import NewsDetail from "@pages/News/components/NewsDetail";

const News:React.FunctionComponent<RouteComponentProps> = ({
  match,
  location
}) => {
  let breads: BreadcrumbsProps[] = [{ text: '新闻资讯' }];

  if( location.pathname !== match.path){
    breads = [{
      text: '新闻资讯',
      route: '/news'
    },{
      text: getQueryValue('title')
    }]
  }

  return (
    <>
      <BackImage
        img={require('@assets/images/banner-news.png')}
        height={360}
        tips={'banner'}
      />
      <Breadcrumbs
        breadLink={breads}
      />
      <div className="content">
        <div className="mainContainer">
          <aside>
            <AsideTitle title={'新闻资讯'}/>
            <ContactUS/>
          </aside>
          <main>
            <Route exact path={match.path} component={NewsList} />
            <Route exact path={`${match.path}/newsDetail`} component={NewsDetail} />
          </main>
        </div>
      </div>
    </>
  );
};

export default News;