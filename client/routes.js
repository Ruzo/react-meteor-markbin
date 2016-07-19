import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/App';
import BinDetails from './components/bin_details';
import BinsList from './components/bins_list';

export default (
    <Route path="/" component = {App}>
      <IndexRoute component = {BinsList} />
      <Route path="bin/:id" component = {BinDetails} />
    </Route>
);
