import * as React from "react";
import Routes from "@routes/index";
import {BrowserRouter as Router} from "react-router-dom";



const App:React.FunctionComponent = ():JSX.Element => {
  return (<Router basename="/"><Routes/></Router>);
};

export default App;