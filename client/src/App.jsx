import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import CompanySignin from './components/CompanySignin';
import CompanySignup from './components/CompanySignup';
import UserSignin from './components/UserSignin';
import UserSignup from './components/UserSignup';
import CreateChallenge from './components/CreateChallenge';
import CreateCompetition from './components/CreateCompetition';
import ChallengePage from './components/ChallengePage';
import Practice from './components/Practice';
import Compete from './components/Compete';
import Home from './components/Home';

function App() {
    return (
        <Router>
            <Route exact path="/" component={Home}/>
            <Route exact path="/usersignin" component={UserSignin}/>
            <Route exact path="/usersignup" component={UserSignup}/>
            <Route exact path="/companysignin" component={CompanySignin}/>
            <Route exact path="/companysignup" component={CompanySignup}/>
            <Route exact path="/challenge" component={ChallengePage}/>
            <Route exact path="/companycreateChallenge" component={CreateChallenge}/>
            <Route exact path="/companycreateCompetition" component={CreateCompetition}/>
            <Route exact path="/practice" component={Practice}/>
            <Route exact path="/compete" component={Compete}/>
        </Router>

    );
}

export default App;