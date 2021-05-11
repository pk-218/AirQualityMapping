import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from './App';
import { About } from './components/About';
import Navigation from './components/Navigation';


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/about">
                <Navigation />
                <About />
            </Route>
            <Route path="/">
                <App />
            </Route>
        </Switch>
    </BrowserRouter>, 
    document.getElementById('root'));
