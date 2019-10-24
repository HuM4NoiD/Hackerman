import React from 'react';
import axios from 'axios';

export default class CreateChallenge extends React.Component {

    constructor(){
        super()
        this.state = {
            title: '',
            challengeBody: '',
            difficulty: 0,
            companyId: 1000
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    onSubmit = (e) => {
		e.preventDefault();
        const challengeData = {
            title: this.state.title,
            challengeBody: this.state.challengeBody,
            difficulty: this.state.difficulty,
            companyId: 1000
        };
        axios.post('http://localhost:5000/company/createChallenge', challengeData)
        .then(response => {
            console.log(response);
            alert(response);
        })
        .catch(error => {
            console.log(error);
        })
	}

    render() {
        return (
            <div>
                <nav class="navbar navbar-dark bg-dark">
                    <a class="navbar-brand" href="#">HackerMan</a>
                    <a class="navbar-brand" href="/companycreateChallenge">Create Challenge</a>
                    <a class="navbar-brand" href="/companycreateCompetition">Create Competition</a>
                    {/* <form class="form-inline my-2 my-lg-0">
                        <input
                            class="form-control mr-sm-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"/>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form> */}
                    <a class="navbar-brand" href="#">Welcome User</a>
                </nav>
                <div class="container-1">
                    <h2>Company</h2>
                    <b>
                        <i>
                            <span
                                style={{
                                color: 'green'
                            }}>Post Challenge</span>
                        </i>
                    </b>
                    <div class="form">
                        <form onSubmit={this.onSubmit}>
                            <div class="form-group row">
                                <label for="inputTitle" class="col-sm-2 col-form-label">
                                    <h5>Challenge Title</h5 >
                                </label>
                                < div class="col-sm-10">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="title"
                                        name="title"
                                        onChange={this.onChange}
                                        placeholder="Title"
                                        required/>
                                </div>
                            </div>
                            <div class="form-group row">
                                <label for="inputDescription" class="col-sm-2 col-form-label">
                                    <h5>Challenge Description</h5>
                                </label>
                                <div class="col-sm-10">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="challengeBody"
                                        onChange={this.onChange}
                                        name="challengeBody"
                                        placeholder="Description"
                                        required/>
                                </div>
                            </div>
                            < div class="form-group row">
                                <label for="inputName" class="col-sm-2 col-form-label">
                                    <h5>Company Name</h5>
                                </label>
                                < div class="col-sm-10">
                                    <input
                                        type="text"
                                        class="form-control"
                                        id="inputName"
                                        placeholder="Name"
                                        required/>
                                </div>
                            </div >
                            <div class="form-group row">
                                <label for="difficulty" class="col-sm-2 col-form-label">
                                    <h5>difficulty</h5>
                                </label>
                                <div class="col-sm-10">
                                    <input
                                        type="number"
                                        class="form-control"
                                        id="difficulty"
                                        onChange={this.onChange}
                                        name="difficulty"
                                        placeholder="difficulty"
                                        required/>
                                </div>
                            </div>
                            <button class="btn btn-outline-success">
                                Create Challenge
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}