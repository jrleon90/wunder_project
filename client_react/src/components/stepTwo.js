import React, { Component } from 'react';
import { history } from '../helpers/history';
import ProgressBar from './progressBar';

class StepTwo extends Component{
    constructor(props){
        super(props);

        this.state = {
            street:'',
            number:'',
            zip:'',
            city:''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    componentDidMount(){
        const userData = localStorage.getItem('userDataStepTwo') ? JSON.parse(localStorage.getItem('userDataStepTwo')) : '';
        if(userData){
            this.setState({
                street: userData.street,
                number: userData.number,
                zip: userData.zip,
                city: userData.city
            })
        }
    }
    handleSubmit(e){
        e.preventDefault();
        localStorage.setItem('stepComplete','two');
        let userData = {
            street:this.state.street,
            number:this.state.number,
            zip:this.state.zip,
            city:this.state.city
        }
        localStorage.setItem('userDataStepTwo',JSON.stringify(userData));

        history.push('/stepThree');
    }

    handleBack(e){
        e.preventDefault();
        history.push('/stepOne');
    }

    render(){
        let { street,number,zip,city } = this.state;

        return(
            <div className="container">
            <div className="jumbotron mx-auto col-md-6">
                <h1 align="center">Register</h1>
                <ProgressBar complete="50%" />
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="street">Street</label>
                        <input
                            type="text"
                            className="form-control"
                            name="street"
                            onChange={e=>this.setState({street:e.target.value})}
                            value={street}
                            required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="number">House Number</label>
                        <input
                            type="text"
                            className="form-control"
                            name="number"
                            onChange={e=>this.setState({number:e.target.value})}
                            value={number}
                            required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="zip">Zip Code</label>
                        <input
                            type="text"
                            className="form-control"
                            name="zip"
                            onChange={e=>this.setState({zip:e.target.value})}
                            value={zip}
                            required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            className="form-control"
                            name="city"
                            onChange={e=>this.setState({city:e.target.value})}
                            value={city}
                            required/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary float-right">Next</button>
                        <button onClick={this.handleBack} className="btn btn-secondary float-left">Back</button>
                    </div>
                </form>
            </div>
        </div>        
        )
    }
}

export default StepTwo;