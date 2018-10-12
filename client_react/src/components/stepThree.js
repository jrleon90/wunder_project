import React, { Component } from 'react'
import { history } from '../helpers/history';
import shortid from 'shortid';
import ProgressBar from "./progressBar";

const wunder_url = 'https://37f32cl571.execute-api.eu-central-1.amazonaws.com/default/wunderfleet-recruiting-backend-dev-save-payment-data';

class StepThree extends Component {
    constructor(props){
        super(props);

        const stepOneData = JSON.parse(localStorage.getItem('userDataStepOne'));
        const stepTwoData = JSON.parse(localStorage.getItem('userDataStepTwo'));

        console.log('stepONe', stepOneData)
        this.state = {
            name: stepOneData.name,
            lastname: stepOneData.lastname,
            telephone: stepOneData.telephone,
            street: stepTwoData.street,
            number: stepTwoData.number,
            zip: stepTwoData.zip,
            city: stepTwoData.city,
            owner_name:'',
            iban:''
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleBack = this.handleBack.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const id = shortid.generate();
        const userData = {
            customer_id: id,
            customer_name: this.state.name,
            customer_lastname: this.state.lastname,
            customer_telephone: this.state.telephone,
            customer_address_street: this.state.street,
            customer_address_number: this.state.number,
            customer_address_zip: this.state.zip,
            customer_address_city: this.state.city,
            customer_owner_name: this.state.owner_name,
            customer_iban: this.state.iban,
            customer_paymentId: ''
        }
        fetch(wunder_url,{
            method: 'POST',
            mode: "cors",
            body: JSON.stringify({
                customerId: userData.customer_id,
                iban: userData.customer_iban,
                owner: userData.customer_owner_name
            })
        })
        .then(response=>response.json())
        .then(data => {
            userData.customer_paymentId = data.paymentDataId;
            localStorage.clear();
            sessionStorage.setItem('paymentId', data.paymentDataId);
            console.log(userData);
            fetch('http://localhost:8000/api/customer',{
                method: 'POST',
                mode: "cors",
                headers:{
                    'Accept':'application/json',
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(userData)
            })
            .then((response)=>{
                history.push('/finalStep');
            })
        })
    }

    handleBack(e){
        e.preventDefault();
        history.push('/stepTwo');
    }

    render(){
        let { owner_name, iban} = this.state;
        return(
            <div className="container">
            <div className="jumbotron mx-auto col-md-6">
                <h1 align="center">Register</h1>
                <ProgressBar complete="75%" />
                <form name="form" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="owner_name">Account Owner</label>
                        <input
                            type="text"
                            className="form-control"
                            name="owner_name"
                            onChange={e=>this.setState({owner_name:e.target.value})}
                            value={owner_name}
                            required
                            />
                    </div>
                    <div className="form-group">
                        <label htmlFor="iban">IBAN</label>
                        <input
                            type="text"
                            className="form-control"
                            name="iban"
                            onChange={e=>this.setState({iban:e.target.value})}
                            value={iban}
                            required
                            />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary float-right">Finish</button>
                        <button onClick={this.handleBack} className="btn btn-secondary float-left">Back</button>
                    </div>
                </form>
            </div>
        </div>        
        )
    }
}

export default StepThree;