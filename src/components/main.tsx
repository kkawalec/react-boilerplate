import React from 'react';
// import {ThemeProvider} from '@material-ui/core/styles';
import {
  Router,
  Switch,
  Route,
} from 'react-router-dom';

import history from '../local-history';
// import theme from '../mui-theme';
import AppContext from '../context/AppContext';

import Dashboard from './dashboard';
import ExampleComponent from './example-component';
import NotFoundPage from './not-found-page';

import styles from './main.style.scss';

export function Main() {
  return (
    // <ThemeProvider theme={ theme }>
    <AppContext.Provider value={ {} }>
      <Router history={ history }>
        <div className={ styles.self }>
          <Switch>
            <Route exact path='/example' component={ ExampleComponent } />
            <Route exact path='/' component={ Dashboard } />
            <Route path='*' component={ NotFoundPage } />
          </Switch>
        </div>
      </Router>
    </AppContext.Provider>
  //
  );
}

export default Main;
