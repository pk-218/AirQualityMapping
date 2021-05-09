import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import App from './App';
import { About } from './About';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/">
                <App />
            </Route>
        </Switch>
    </BrowserRouter>, 
    document.getElementById('root'));
