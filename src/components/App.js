import React, { useEffect, useState} from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store  from "../store/configureStore";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Registration from "./Registration";
import Navbar from "./Navbar";
import Sign_in from "./Sign_in";
import axios from 'axios'
import { signUp, selectIsLoggedIn } from "../features/session/sessionSlice"
import { useDispatch, useSelector } from "react-redux";

import "../App.scss";

const App = () => {



  return (
    <div>
      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/dashboard"} component={Dashboard} />
            <Route exact path={"/registration"} component={Registration} />
            <Route exact path={"/sign_in"} component={Sign_in} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
};

export default App;
