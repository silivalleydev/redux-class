import React from 'react'
import { Route, Switch } from 'react-router';
import AddPage from './components/AddPage';
import Main from './components/Main';
import MinusPage from './components/MinusPage';

const Router = () => {
    return (
        <div>
        <Switch>
            <Route exact path="/addPage" component={AddPage} />
            <Route exact path="/minusPage" component={MinusPage} />
            <Route exact path="/" component={Main} />
            <Route component={Main}/>
        </Switch>
        </div>
    )
}
export default Router;
