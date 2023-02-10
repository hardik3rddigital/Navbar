import React from "react";
import { Route, Switch, NavLink } from "react-router-dom";

import About from "./About";
import Service from "./Service";
import Blog from "./Blog";
import Careers from "./Careers";
import Team from "./Team";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Error from "./Error";
import Home from "./Home";



const Navbar = () => {
  return (
    <>
      <div className="header bg-white py-2 shadow-sm">
        <div className="container">
          <div className="headeritems d-flex justify-content-between align-items-center">
            <div className="header_logo">
              <NavLink activeClassName="is-active" to="/">
                <img
                  src="https://3rddigital.com/img/logo_gray.png"
                  alt="Header Logo"
                />
              </NavLink>
            </div>
            <div className="header_menu">
              <nav>
                <ul className="d-flex align-items-center navbar-nav flex-row">
                  <li className="nav-item px-2">
                    <NavLink activeClassName="nav-link active" to="/About">
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item px-2">
                    <NavLink activeClassName="nav-link active" to="/Service">
                      Service
                    </NavLink>
                  </li>
                  <li className="nav-item px-2">
                    <NavLink activeClassName="nav-link active" to="/Contact">
                      Contact
                    </NavLink>
                  </li>
                  <li className="nav-item px-2">
                    <NavLink activeClassName="nav-link active" to="/Careers">
                    Careers
                    </NavLink>
                    
                  </li>
                  <li className="nav-item px-2">
                    <NavLink activeClassName="nav-link active" to="/Team/Hardik">
                    Team
                    </NavLink>
                    
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>

      <Switch>
        <Route exact path="/" component={()=><Home name="Home"/>}  />
        <Route exact path="/Home" component={()=><Home name="Home"/>} />
        <Route exact path="/About" component={()=><About name="About"/>} />
        <Route exact path="/Service" component={()=><Service name="Service"/>} />
        <Route exact path="/Blog" component={()=><Blog name="Blog"/>} />
        <Route path="/Careers" component={()=><Careers name="Careers"/>} />
        <Route path="/Team/:employee" component={()=><Team name="Team"/>} />
        <Route exact path="/Portfolio" component={()=><Portfolio name="Portfolio"/>} />
        <Route exact path="/Testimonials" component={()=><Testimonials name="Testimonials"/>} />
        <Route exact path="/Contact" component={()=><Contact name="Contact"/>} />
        <Route component={Error} />
      </Switch>
    </>
  );
};

export default Navbar;
