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
import Header from "./components/Header/Header";

function App() {
  const [user, setUser] = useContext(UserDetails);

  const [isLoading, setIsLoading] = useState(true);
  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route path="/start">
            <Switch>
              <Route
                path={"/start/qr/:inviteCode"}
                exact
                component={QrGenerator}
              />
              <Route path="/start/login/:clearData?" exact component={login} />
              <Route
                path="/start/verify-account"
                exact
                component={VerifyAccount}
              />
              <Route path="/start/verify-phone" exact component={VerifyPhone} />
              <Route
                path="/start/verification-result"
                exactcomponent={VerificationResult}
              />
              <Route
                path="/start/reset-password/:token"
                exact
                component={ResetPassword}
              />
              <Route path="/start/feedback/:type" exact component={ContactUs} />
              <Route path="/start/faq" exact component={FAQ} />
              <Route
                path="/start/select-condominium"
                exact
                component={SelectCondominium}
              />
              <Route
                path="/start/forgot-password"
                exact
                component={ForgotPassword}
              />
              <Route
                path="/start/print/:invoiceId"
                exact
                component={PrintInvoice}
              />
            </Switch>
          </Route>

          <Route path="/">
            <div className="dashboard-layout">
              <Sidebar />
              <div>
                <Header />
                <Switch>
                  <Route path="/" exact>
                    <Redirect to={"/start/login"} />
                  </Route>
                  <Route path="/dashboard" exact component={Dashboard} />
                </Switch>
              </div>
            </div>
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
