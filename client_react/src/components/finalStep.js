import React, { Component } from 'react';
import ProgressBar from './progressBar';

class FinalStep extends Component {
    constructor(props){
        super(props);

        

        this.state={
            paymentId: ''
        }
    }
    componentDidMount(){
        const paymentId = sessionStorage.getItem('paymentId');
        this.setState({paymentId:paymentId})
    }
    render() {
        let {paymentId} = this.state;
        return (
            <div className="container">
            <div className="jumbotron mx-auto col-md-6">
                <h1 align="center">Success</h1>
                <ProgressBar complete="100%" />
                    <div className="form-group ">
                        <label>Payment ID: {paymentId}</label>
                    </div>
            </div>
        </div>        
        );
    }
}

export default FinalStep;
