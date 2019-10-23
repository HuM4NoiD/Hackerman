import React from 'react';
import axios from 'axios';

export default class CompanySignup extends React.Component {

    constructor() {
        super()
        this.state = {
            website: '',
            cname: '',
            domain: '',
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
            website: this.state.website,
            cname: this.state.cname,
            domain: this.state.domain,
            password: this.state.password,
        };
        axios
            .post('http://localhost:5000/company/signup', signupData)
            .then(response => {
                console.log(response.data);
                alert('Remember Company ID: ' + response.data.id);
                this.props.history.push('/company/signin');
            })
            .catch(error => {
                console.log(error);
                alert('error')
            })
    }
    
    componentDidMount() {}

    render() {
        return (
            <div class="card" style={{
                height: 'fit-content'
            }}>
                <h5 class="card-header info-color white-text text-center py-4" style={{backgroundColor: '#3f51b5'}}>
                    <strong>Sign up</strong>
                </h5>
                <div class="card-body px-lg-5 pt-0">
                    <form onSubmit={this.onSubmit}
                        class="text-center"
                        style={{
                        color: '#757575',
                        paddingTop: '20px'
                    }}
                        action="#!">
                        <div class="md-form mt-0">
                            <input type="text" id="cnameLabel" class="form-control" required name="cname" onChange={this.onChange}/>
                            <label for="cnameLabel">Company Name</label>
                        </div>
                        <div class="md-form mt-0">
                            <input type="url" id="website" class="form-control" required name="website" onChange={this.onChange}/>
                            <label for="website">Website</label>
                        </div>
                        <div class="md-form mt-0">
                            <input type="text" id="domain" class="form-control" name="domain" onChange={this.onChange}/>
                            <label for="domain">Domain</label>
                        </div>
                        <div class="md-form">
                            <input
                                type="password"
                                id="materialRegisterFormPassword"
                                class="form-control"
                                name="password"
                                onChange={this.onChange}
                                aria-describedby="materialRegisterFormPasswordHelpBlock"/>
                            <label for="materialRegisterFormPassword">Password</label>
                        </div>
                        <button
                            class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"
                            type="submit">Sign up</button>
                    </form>
                </div>
            </div>
        );
    }
}