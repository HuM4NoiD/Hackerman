import React from 'react';
import axios from 'axios';

export default class UserSignup extends React.Component {

    constructor() {
        super()
        this.state = {
            email: '',
            fname: '',
            lname: '',
            gender: '',
            dob: '',
            password: ''
        };
        this.onChange = this
            .onChange
            .bind(this);
        this.onSubmit = this
            .onSubmit
            .bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        const signupData = {
            email: this.state.email,
            password: this.state.password,
            fname: this.state.fname,
            lname: this.state.lname,
            gender: this.state.gender,
            dob: this.state.dob
        };
        axios
            .post('http://localhost:5000/users/signup', signupData)
            .then(response => {
                console.log(response.data);
                this.props.history.push('/user/signin');
            })
            .catch(error => {
                console.log(error);
                alert('error')
            })
    }

    render() {
        return (
            <div
                className="card"
                style={{
                height: 'fit-content',
                marginTop: '20px'
            }}>
                <h5 className="card-header info-color white-text text-center py-4">
                    <strong>Sign up</strong>
                </h5>
                <div className="card-body px-lg-5 pt-0">
                    <form
                        className="text-center"
                        onSubmit={this.onSubmit}
                        style={{
                        color: '#757575'
                    }}
                        action="#!">
                        <div className="form-row">
                            <div className="col">
                                <div className="md-form">
                                    <input
                                        type="text"
                                        id="materialRegisterFormFirstName"
                                        className="form-control"
                                        name="fname"
                                        onChange={this.onChange}
                                        required/>
                                    <label for="materialRegisterFormFirstName">First name</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="md-form">
                                    <input
                                        type="text"
                                        id="materialRegisterFormLastName"
                                        name="lname"
                                        onChange={this.onChange}
                                        className="form-control"/>
                                    <label for="materialRegisterFormLastName">Last name</label>
                                </div>
                            </div>
                        </div>
                        <div className="md-form mt-0">
                            <input type="email" id="materialRegisterFormEmail" name="email" className="form-control" onChange={this.onChange}/>
                            <label for="materialRegisterFormEmail">E-mail</label>
                        </div>
                        <div
                            className="md-form"
                            style={{
                            marginTop: '20px'
                        }}>
                            <input type="date" name="dob" id="dob" className="form-control" min="1980-04-01" onChange={this.onChange}/>
                        </div>
                        <span>Gender</span>
                        <select className="mdb-select custom-select mb-4" onChange={this.onChange} name="gender">
                            <option value="" disabled>Choose option</option>
                            <option value="F" selected>Female</option>
                            <option value="M">Male</option>
                            <option value="O">other</option>
                        </select>

                        <div className="md-form">
                            <input
                                type="password"
                                name="password"
                                id="materialRegisterFormPassword"
                                className="form-control"
                                onChange={this.onChange}
                                aria-describedby="materialRegisterFormPasswordHelpBlock"/>
                            <label for="materialRegisterFormPassword">Password</label>
                        </div>

                        <button
                            className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"
                            type="submit">Sign up</button>
                    </form>
                </div>
            </div>
        );
    }
}
