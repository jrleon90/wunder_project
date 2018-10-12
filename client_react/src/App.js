import React, { Component } from 'react';
import './App.css';

import { history } from './helpers/history';
import { Router, Route, Redirect } from 'react-router-dom';

import StepOne from './components/stepOne';
import StepTwo from './components/stepTwo';
import StepThree from './components/stepThree';
import FinalStep from './components/finalStep';


class App extends Component {

  checkFinalStep(){
    const paymentId = sessionStorage.getItem('paymentId') ? sessionStorage.getItem('paymentId') : '';

    if(paymentId){
      return <Route component={FinalStep} />
    }

    return this.checkStatus();
  }
  checkStatus(){
    const stepComplete = localStorage.getItem('stepComplete') ? localStorage.getItem('stepComplete') : '';

    switch(stepComplete){
      case 'one':
        return <Route component={StepTwo} />
      case 'two':
        return <Route component={StepThree} />
      default:
        return <Route component={StepOne} />
    }
  }
  render() {
    return (
      <Router history={history}>
        <div>
          <Route exact path="/" render={() =>(
            this.checkStatus()
          )}/>
          <Route path="/stepOne" component={StepOne} />
          <Route path="/stepTwo" component={StepTwo} />
          <Route path="/stepThree" component={StepThree} />
          <Route path="/finalStep" render={() =>(
            this.checkFinalStep()
          )} />
        </div>
      </Router>
    );
  }
}

export default App;
