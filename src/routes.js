import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Dashboard from "./components/User/Dashboard";
import SubscriptionPlans from "./components/Subscriptions/SubscriptionPlans";
import AdminDashboard from "./components/Admin/AdminDashboard";

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/plans" component={SubscriptionPlans} />
      <Route path="/admin" component={AdminDashboard} />
    </Switch>
  </Router>
);

export default Routes;
