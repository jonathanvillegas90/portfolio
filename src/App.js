import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Proyects from "./pages/Proyects";
import Footer from "./components/Footer";
import Skills from "./pages/Skills";
import "./App.css";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/proyects" component={Proyects} />
          <Route exact path="/skills" component={Skills} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
