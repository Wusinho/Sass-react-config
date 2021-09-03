import React, { useEffect, useState} from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { store } from "../store/store";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Registration from "./Registration";
import Navbar from "./Navbar";
import { useDispatch, useSelector } from "react-redux";

import "../App.scss";


const App = () => {
  // const dispatch = useDispatch();

  const [ login, setLogin ] = useState('NOT')
  
  // dispatch(signUp(''));
  


  return (
    <div>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/dashboard"} component={Dashboard} />
            <Route exact path={"/registration"} component={Registration} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
