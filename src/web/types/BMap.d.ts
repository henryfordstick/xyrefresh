type MapOptions = {
  minZoom: number,
  maxZoom: number,
  mapType: unknown,
  enableHighResolution: boolean,
  [enable: string]: any
}

declare module "BMap"{
  export class Point {
    constructor(lng: number, lat: number):void;
  }

  export class MapTypeControl{}

  export class NavigationControl {
    constructor(object:unknown):void;
  }

  export class ScaleControl {}

  export class OverviewMapControl {
    constructor(opts: unknown):void;
  }

  export class InfoWindow {
    constructor(sContent: string | HTMLElement):void;
  }

  export class Map {
    constructor(container: string | HTMLElement, opts?: MapOptions):void;

    centerAndZoom(point: Point,num:number):void;

    enableKeyboard():void;

    addControl(navigationControl: NavigationControl):void;

    openInfoWindow(win: InfoWindow,point:Point):void;

    enableScrollWheelZoom(isOpen: boolean):void;

  }



}