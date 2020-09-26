import React from "react";
import ReactDOM from "react-dom";
import "@assets/style/base.css"
import Loading from "@components/Loading";

const {lazy,Suspense} = React;

const App = lazy(() => import("./App"));

ReactDOM.hydrate(
  <Suspense fallback={<Loading/>}>
    <App/>
  </Suspense>,
  document.getElementById('root')
);
