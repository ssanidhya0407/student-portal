import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Hostel from './pages/Hostel';
import Laundry from './pages/Laundry';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/hostel" component={Hostel} />
        <Route path="/laundry" component={Laundry} />
        <Route path="/" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
