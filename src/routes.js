import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Admin from './pages/Admin';
import Main from './pages/Main';

export default function routes(props) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/skills/:title/:rating/:picture" component={Main} />
        <Route path="/works/:img/:description" component={Main} />
        <Route path="/admin" component={Admin} />
      </Switch>
    </BrowserRouter>
  );
}
