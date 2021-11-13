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

if ('serviceWorker' in navigator) {
  console.log('这里是 server work');
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}
