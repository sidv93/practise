import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Counter from './Counter';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Counter} />
            </Switch>
        </Router>
    )
}

export default App
