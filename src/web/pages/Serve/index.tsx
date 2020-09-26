import * as React from "react";
import Breadcrumbs from "@components/BreadCrumbs";
import BackImage from "@components/BackImage";
import {serListJson} from "@models/service.data";
import ContactUS from "@components/ContactUS";
import ServiceList from "@pages/Serve/components/ServiceList";
import SelectTitle from "@pages/Serve/components/SelectTitle";

const {useState} = React;

const Serve:React.FunctionComponent = ():JSX.Element => {
  let [indexes,setIndexes] = useState<number>(0);

  return (
    <>
      <BackImage
        img={require('@assets/images/banner-service.png')}
        height={360}
        tips={'banner'}
      />
      <Breadcrumbs
        breadLink={[{
          text: '服务专区',
        }]}
      />
      <div className="content">
        <div className="mainContainer">
          <aside>
            <SelectTitle
              data={serListJson}
              activeIndex={indexes}
              onClick={(indexes) => setIndexes(indexes)}
            />
            <ContactUS/>
          </aside>
          <main>
            <ServiceList
              data={serListJson}
              activeIndex={indexes}
            />
          </main>
        </div>
      </div>
    </>
  );
};

export default Serve;