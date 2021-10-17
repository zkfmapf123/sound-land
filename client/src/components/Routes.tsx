import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Music from './Music/Music';

const Routes= () =>{
    
    return(
        <BrowserRouter basename='/music'>
            <Switch>
                <Route component={Music} exact path="/"/>
            </Switch>
        </BrowserRouter>
    )
};

export default Routes;