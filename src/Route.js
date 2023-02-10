import React from "react";
import { Route, Switch } from "react-router-dom";
import About from './Pages/About';
import Service from './Pages/Service';
import Blog from './Pages/Blog';
import Careers from './Pages/Careers';
import Team from './Pages/Team';
import Portfolio from './Pages/Portfolio';
import Testimonials from './Pages/Testimonials';
import Contact from './Pages/Contact';

const RouteNav = () => {
  return (
      <Switch>
        <Route exact path="/About" component={About} />
        <Route exact path="/Service" component={Service} />
        <Route exact path="/Blog" component={Blog} />
        <Route exact path="/Careers" component={Careers} />
        <Route exact path="/Team" component={Team} />
        <Route exact path="/Portfolio" component={Portfolio} />
        <Route exact path="/Testimonials" component={Testimonials} />
        <Route exact path="/Contact" component={Contact} />
        <Route component={Error} />
      </Switch>
  );
};

export default RouteNav;
