import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import routes from './routers';
import { Provider } from 'mobx-react';
import stores from './stores';

const RoutesConfig = () => (
    <Provider stores={stores}>
        <Router>
            <Switch>
                {routes.map((route, index) => 
                    <Route
                        key={index}
                        path={route.path}
                        // exact={route.exact}
                        render={ props => {
                            if (props.location.pathname === '/') {
                                return <Redirect to="/mobile" /> 
                            } else {
                                return  <route.component {...props} routes={route.routes}/>
                            }
                        }}
                    />)}
            </Switch>
        </Router>
    </Provider>
);

ReactDOM.render(
  <RoutesConfig/>,
  document.getElementById('root') as HTMLElement,
);
registerServiceWorker();
