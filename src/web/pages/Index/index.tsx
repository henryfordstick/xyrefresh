import * as React from "react";
import BackImage from "@components/BackImage";

import "./index.css";
import ArticleTitle from "@pages/Index/components/ArticleTitle";
import Strategic from "@pages/Index/components/Strategic";
import NewInformation from "@pages/Index/components/NewInformation";
import {advantageJson, honoraryJson, newsJson, serverProjectJson, strategicJson} from "@models/home.data";
import Advantage from "@pages/Index/components/Advantage";
import ServerProject from "@pages/Index/components/ServerProject";

const Index:React.FunctionComponent = ():JSX.Element => {
  return (
    <>
      {/*banner*/}
      <BackImage
        img={require('@assets/images/banner1.png')}
        height={600}
        tips={"banner"}
      />
      {/*服务项目*/}
      <div className="content">
        <ArticleTitle
          title={"绿洁居服务项目"}
          initial={"service project"}
          initialColor={"#0B63E4"}
          tips={"多年品牌历史沉淀，32家机构资质认可，我们不产生财富，我们只是财富的搬运工！"}
        />
        {
          serverProjectJson.map((x,y) => (
            <ServerProject
              key={y}
              serverIntro={x.serverIntro}
              serverContext={x.serverContext}
            />
          ))
        }
      </div>
      {/*荣誉资质*/}
      <div className="honorary">
        <BackImage
          img={require("@assets/images/honorary-bg.png")}
          bg={true}
          height={376}
          tips={"banner"}
        />
        <div className="content">
          <ArticleTitle
            title={"绿洁居荣誉资质"}
            initial={"honorary certificate"}
            initialColor={"#FF9508"}
            isWhite={true}
            tips={"多年品牌历史沉淀，32家机构资质认可，我们不生产财富，我们只是财富的搬运工！"}
          />
          <ul className="honorary-list">
            {
              honoraryJson.map((x,y) => (<li key={y}>
                <img src={require('@assets/images/'+x)} alt={x}/>
              </li>))
            }
          </ul>
        </div>
      </div>

      {/*新闻资讯*/}
      <div className="content">
        <ArticleTitle
          title={"绿洁居新闻资讯"}
          initial={"news information"}
          initialColor={"#0BAE98"}
          tips={"多年品牌历史沉淀，32家机构资质认可，我们不生产财富，我们只是财富的搬运工！"}
        />
        <NewInformation newJson={newsJson} />
      </div>

      {/*四大优势*/}
      <div className="advantage">
        <BackImage
          img={require("@assets/images/advantage-bg.png")}
          bg={true}
          height={540}
          tips={"advantage"}
        />
        <ArticleTitle
          title={"绿洁居四大优势"}
          initial={"four big advantage"}
          initialColor={"#97D438"}
          isWhite={true}
          tips={"多年品牌历史沉淀，32家机构资质认可，我们不生产财富，我们只是财富的搬运工！"}
        />
        <Advantage advJson={advantageJson} />
      </div>
      {/* 战略合作伙伴 */}
      <ArticleTitle
        title={"战略合作伙伴"}
        initial={"strategic partner"}
        initialColor={"#0B63E4"}
        tips={"携手海尔、国美、海信、京东、苏宁、格力等电商合作共赢！"}
      />
      <Strategic data={strategicJson} />
    </>
  );
};

export default Index;