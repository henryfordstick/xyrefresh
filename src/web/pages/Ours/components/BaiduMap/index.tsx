import React, {useEffect} from "react";
import BMap, {Point,Map} from 'BMap';
import {useRootData} from "@tools/useRootData";
import {RootStoreType} from "@models/root.store";
import "./baiduMap.css";

const BaiduMap:React.FC = ():JSX.Element => {
  const {tel,companyName,address} = useRootData((store:RootStoreType) => ({
    tel: store.common.tel,
    companyName: store.common.companyName,
    address: store.common.address
  }));

  let map: Map, point:Point;
  const orientation = {
    x: 114.1087281500,
    y: 32.1371149400
  };

  useEffect(() => {
    createMap();
    setMapEvent();
    addMapControl();
    createInfoWindow();
  },[]);

  // 创建地图
  const createMap = () => {
    const {x,y} = orientation;
    point = new BMap.Point(x,y);
    map = new BMap.Map('mapContainer'); // 在容器中创建一个地图
    map.centerAndZoom(point,17);
  };

  const setMapEvent = () => {

    // map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放
    map.enableKeyboard();//启用键盘上下左右键移动地图
  }

  const addMapControl = () => {
    // 添加地图的类型
    map.addControl(new BMap.MapTypeControl());

    // 添加带有定位的导航控件
    let navigationControl = new BMap.NavigationControl({
      // 启用显示定位
      enableGeolocation: true
    });
    map.addControl(navigationControl);

    // 向地图中添加比例尺控件
    let ctrl_sca = new BMap.ScaleControl();
    map.addControl(ctrl_sca);

    //向地图中添加缩略图控件
    let ctrl_ove = new BMap.OverviewMapControl({isOpen:true});
    map.addControl(ctrl_ove);
  }

  const createInfoWindow = () => {
    // let marker = new BMap.Marker(point);// 创建标注
    // map.addOverlay(marker);
    let sContent =`<h3>${companyName}</h3><p>电话：${tel[0]}</p><p>${address}</p>`;
    let infoWindow = new BMap.InfoWindow(sContent);  // 创建信息窗口对象
    map.openInfoWindow(infoWindow,point); //开启信息窗口
  };

  return (
    <div className="baiduMap">
      <div id="mapContainer"/>
    </div>
  );
};

export default BaiduMap;
