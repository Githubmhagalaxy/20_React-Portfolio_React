import React from 'react';
import Header from "./components/Header";
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import About from "./components/About";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route exact path={'/'}>
                        <Redirect to={'/about'} />
                    </Route>
                    <Route path={'/about'}>
                        <About />
                    </Route>
                    <Route path={'/portfolio'}>
                        <Portfolio />
                    </Route>
                    <Route path={'/contact'}>
                        <Contact />
                    </Route>
                    <Route path={'/resume'}>
                        <Resume />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
}

export default App;
