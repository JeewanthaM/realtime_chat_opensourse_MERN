import React from "react";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Redirect exact from="/" to="/homepage" />
      </Switch>
    </Router>
  );
}

export default App;
