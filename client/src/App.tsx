import React from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  HashRouter,
  Redirect,
  Route,
  Switch,
  useHistory,
} from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/start">
          <Switch>
            <Route path={"/start/qr/:inviteCode"} exact />
          </Switch>
        </Route>

        <Route path="/">
          <div className="">
          <Sidebar />
            <div>
            <Headers />
              <Switch>
                <Route path="/" exact>
                  <Redirect to={"/start/login"} />
                </Route>
              </Switch>
            </div>
          </div>
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
