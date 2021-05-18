import { Suspense } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { commonRouter } from './router/router';
import './App.css';

const getRouterList = (routes) => {
    return routes.map(item =>
        <Route
            component={item.component}
            exact={item.exact !== false}
            key={item.name}
            path={item.path}
        />
    );
};

const _commonRouter = getRouterList(commonRouter);

function App() {
  return (
    <div className="App">
        <Suspense fallback={<div></div>}>
            <Router>
                <Switch>
                    {_commonRouter}
                </Switch>
            </Router>
        </Suspense>
    </div>
  );
}

export default App;
