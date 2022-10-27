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
            {/* sidebar goes hear */}
            <div>
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
