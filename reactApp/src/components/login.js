import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            posts: [],
            cusine: '',
            value: '',
            email: '',
            toDashboard: false,
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onCusinechange = this.onCusinechange.bind(this);
    }
    onInputChange(event) {
        this.setState({
            value: event.target.value
        });
    }
    onEmailChange(event) {
        this.setState({
            email: event.target.value
        });

    }
    onCusinechange(event){
        this.setState({
            cusine: event.target.value
            
        });
    }
    handleSubmit(event) {

        axios({
                method: 'POST',
                url: 'http://localhost:9000/practise',
                headers: {
                    "Access-Control-Allow-Origin": "*"
                },
                data: {
                    name: this.state.value,
                    place: this.state.email
                }
            })
            .then(res => {
                this.setState({
                    toDashboard: true
                })
                if (this.state.toDashboard === true) {
                    location.path === '/dashBoard';
                }
            })
            .catch(function(error) {

            });
        alert('A name and email were submitted: ' + this.state.value + this.state.email);
        //event.preventDefault();
        this.props.history.push("/dashBoard");
    }

    
    render() {
        return ( <
            div className = "form-group" >
            <form onSubmit = {this.handleSubmit} >
            <div >
            <label >UserName <input className = "form-control" placeholder = "username" type = "text"
            value = {this.state.value} onChange = {this.onInputChange}/>  < /label > 
            </div> 
            <div >
            <label >Email <input className = "form-control" placeholder = "email" type = "text" value = {this.state.email}
            onChange = {this.onEmailChange}/> < /label > </div> 
            <button type = "submit" className = "btn btn-primary" > Submit < /button>
            </form>
            <div className="clear"></div>
            
            
            </div>
        );
    }
}

export default Login;