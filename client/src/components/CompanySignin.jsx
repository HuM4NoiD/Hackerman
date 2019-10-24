import React from 'react'
import axios from 'axios';

export default class CompanySignin extends React.Component {
	constructor(){
        super()
        this.state = {
            id: 0,
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


	onSubmit = async (e) => {
		e.preventDefault();
		const company = {
			id: this.state.id,
			password: this.state.password,
		}
		axios.post('http://localhost:5000/company/signin', company).then(response => {
            console.log(response);
            alert('Login success');
            localStorage.setItem('companyToken', response.data);
            this.props.history.push('/companycreateChallenge')
		})
		.catch(error => {
			console.log(error);
		});
	}

	
    render() {
        return (
            <div
                className="card"
                style={{
                width: 'fit-content',
                height: 'fit-content',
                margin: 'auto',
                marginTop: '120px'
            }}>
                <h5
                    className="card-header white-text text-center py-4"
                    style={{
                    backgroundColor: '#3f51b5'
                }}>
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
                            <input type="number" id="companyId" name="id" className="form-control" onChange={this.onChange} />
                                <label for="materialLoginFormEmail">Company ID</label>
                        </div>
                        <div className="md-form">
                            <input type="password" id="password" name="password" className="form-control" onChange={this.onChange} />
                            <label for="materialLoginFormPassword">Password</label>
                        </div>
                        <button
                            className="btn btn-outline-primary btn-rounded my-4 waves-effect z-depth-0"
                            type="submit"
                            style={{
                            borderColor: '#3f51b5',
                            color: '#3f51b5'
                        }}>Sign in</button>
                        <p>Not a member?
                            <a href="/company/signup">   Sign Up</a>
                        </p>
                    </form>
                </div>
            </div>
        )
    }
}