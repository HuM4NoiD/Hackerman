import React from 'react';
import axios from 'axios';

export default class UserSignin extends React.Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password: '',
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

	componentDidMount() {
		// const token = localStorage.getItem('authToken');
		// console.log(token);
    }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

	onSubmit = (e) => {
		e.preventDefault();
        const signinData = {
            email: this.state.email,
            password: this.state.password
        };
        axios.post('http://localhost:5000/users/signin', signinData)
        .then(response => {
            console.log(response);
            alert('Login success');
            localStorage.setItem('userToken', response.data);
            this.props.history.push('/practice');
        })
        .catch(error => {
            console.log(error);
        })
	}

    render() {
		const { email, password } = this.state;
        return (
            <div
                className="card"
                style={{
                width: 'fit-content',
                height: 'fit-content',
                margin: 'auto',
                marginTop: '100px'
            	}}>
                <h5 className="card-header info-color white-text text-center py-4">
                    <strong>Sign in</strong>
                </h5>
                <div className="card-body px-lg-5 pt-0">
                    <form
                        className="text-center"
                        onSubmit={this.onSubmit}
                        style={{
                        color: '#757575'
                    }}
                        action="#!">
                        <div className="md-form">
                            <input type="email" id="email" name="email" className="form-control" onChange={this.onChange} value={this.state.email}/>
                            <label for="email">E-mail</label>
                        </div>
                        <div className="md-form">
                            <input type="password" id="password" name="password" className="form-control" onChange={this.onChange} value={this.state.password}/>
                            <label for="password">Password</label>
                        </div>

                        <div className="d-flex justify-content-around">
                            <div>
                                <div className="form-check">
                                    <input
                                        type="checkbox"
                                        className="form-check-input"
                                        id="materialLoginFormRemember"/>
                                    <label className="form-check-label" for="materialLoginFormRemember">Remember me</label>
                                </div>
                            </div>
                        </div>
                        <button
                            className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"
                            type="submit">Sign in</button>
                        <p>Not a member?
                            <a href="/user/signup">   Sign up</a>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}