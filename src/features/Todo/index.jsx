import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import ListPage from './pages/ListPage';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const match = useRouteMatch();
  return (
    <div>
      <h3>Todo list</h3>

      <div>
        <Switch>
          <Route path={match.path} component={ListPage} />
        </Switch>
      </div>
    </div>
  );
}

export default TodoFeature;
