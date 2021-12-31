import { Container, Grid } from "@material-ui/core";
import React from "react";
import WhereISS from "./components/where-iss";
import "./App.css";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Container className={"top_60"}>
      <Grid container spacing={7}>
        <Grid item xs>
          <Router>
            <Header />
            <div className="main-content cointainer_shadow">
              <Switch>
                {/* <Route path="/page-2">
                  <h1>adsfds</h1>
                </Route> */}
                <Route path="/">
                  <WhereISS />
                </Route>
              </Switch>
            </div>
          </Router>

          <Footer />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
