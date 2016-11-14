import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

// Layouts
import MainLayout from './components/layouts/main-layout';
import SearchLayoutContainer from './components/containers/search-layout-container';

// Pages
import UserListContainer from './components/containers/user-list-container';
import UserPlaylistContainer from './components/containers/user-playlist-container';
import TrackListContainer from './components/containers/track-list-container';

export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
        <Route path="/">
          <Route component={SearchLayoutContainer}>
            <IndexRoute component={UserListContainer} />
          </Route>
          /* Getting playlist by passing usdrId*/
          <Route path="/:userId" component={UserPlaylistContainer} />
          /*Getting tracks by passing albumId */
          <Route path="/:userId/:albumId" component={TrackListContainer} />
        </Route>
    </Route>
  </Router>
);
