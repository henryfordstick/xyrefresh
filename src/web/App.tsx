import * as React from "react";
import Routes from "@routes/index";
import {BrowserRouter as Router} from "react-router-dom";

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').then(registration => {
      console.log('SW registered: ', registration);
    }).catch(registrationError => {
      console.log('SW registration failed: ', registrationError);
    });
  });
}

const App:React.FunctionComponent = ():JSX.Element => {
  return (<Router basename="/"><Routes/></Router>);
};

export default App;