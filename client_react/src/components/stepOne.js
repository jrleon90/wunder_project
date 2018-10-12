import React, { Component } from 'react';
import { history } from '../helpers/history';
import ProgressBar from './progressBar';

class StepOne extends Component{
    constructor(props){
        super(props);

        this.state = {
            name: '',
            lastname: '',
            telephone: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        const userData = localStorage.getItem('userDataStepOne') ? JSON.parse(localStorage.getItem('userDataStepOne')) : '';
        if(userData){
            this.setState({
                name: userData.name,
                lastname: userData.lastname,
                telephone: userData.telephone
            })
        }
       
    }

    handleSubmit(e){
        e.preventDefault();
        localStorage.setItem('stepComplete','one');
        let userData = {
            name: this.state.name,
            lastname: this.state.lastname,
            telephone: this.state.telephone
        }
        localStorage.setItem('userDataStepOne',JSON.stringify(userData));
        history.push('/stepTwo');
    }

    render(){

        let {name, lastname, telephone } = this.state;
        return(
            <div className="container">
                <div className="jumbotron mx-auto col-md-6">
                    <h1 align="center">Register</h1>
                    <ProgressBar complete='25%'/>
                    <form name="form" onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">First Name</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                onChange={e=>this.setState({name:e.target.value})}
                                value={name}
                                required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastname">Last Name </label>
                            <input
                                type="text"
                                className="form-control"
                                name="lastname"
                                onChange={e=>this.setState({lastname:e.target.value})}
                                value={lastname}
                                required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="telephone">Telephone</label>
                            <input
                                type="text"
                                className="form-control"
                                name="telephone"
                                onChange={e=>this.setState({telephone:e.target.value})}
                                value={telephone}
                                required/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary float-right">Next</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default StepOne;