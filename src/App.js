import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import React from "react";
import './App.css';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';


function App() {
  return (
    <Router>
      <div className="App">
        <div className="pages_menu">
          <NavLink to="/first" activeClassName="selected">First block</NavLink>
          <NavLink to="/second" activeClassName="selected">Second block</NavLink>
        </div>
        <div className="app_inner">
          <Switch>

            <Route exact path='/first'>

              <Card variant="outlined" sx={{ maxWidth: 400 }}>
                <div className="first block">
                  <Typography level="h1">
                    <h1>first block</h1>
                  </Typography>
                </div>
              </Card>

            </Route>

            <Route exact path='/second'>

              <Card variant="outlined" sx={{ maxWidth: 400 }}>
                <Typography level="h1">
                  <div className="second block">
                    <h1>second block</h1>
                  </div>
                </Typography>
              </Card>

            </Route>

          </Switch>
        </div>
      </div >
    </Router >
  );
}

export default App;
