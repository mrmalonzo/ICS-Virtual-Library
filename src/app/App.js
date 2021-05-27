import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from '../pages/Landing';
import NotFound404 from '../pages/NotFound404';


const App = () => {
    return (
        <Switch>

            <Route exact path="/"> <Landing/> </Route>


            <Route> <NotFound404/> </Route>
            
        
        </Switch>
        

    )
}

export default App;