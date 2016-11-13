import React from 'react';
import { IndexRoute, Route } from 'react-router';
import {
  App, Home, About,
  NotFound, Blog, PostDetail, PostAdd, PostEdit
} from 'containers';

/**
 * Please keep routes in alphabetical order
 */
export default (/* store */) =>
  <Route path="/" component={App}>
    {/* Home (main) route */}
    <IndexRoute component={Blog} />

    {/* Routes */}
    <Route path="about" component={About} />
    <Route path="blog" component={Blog} />
    <Route path="posts-add" component={PostAdd} />
    <Route path="posts-edit/:id" component={PostEdit} />
    <Route path="posts/:id" component={PostDetail} />

    {/* Catch all route */}
    <Route path="*" component={NotFound} status={404} />
  </Route>;
