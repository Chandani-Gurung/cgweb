import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Testimonials from "./pages/Testimonials";
import Home from "./pages";

function App() {
  return (
    <Router>
    <Navbar/>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/about' component={About} />
      <Route path='/contact' component={Contact} />
      <Route path='/projects' component={Projects} />
      <Route path='/testimonials' component={Testimonials} />
      </Switch>
    </Router>
  );
}

export default App;
