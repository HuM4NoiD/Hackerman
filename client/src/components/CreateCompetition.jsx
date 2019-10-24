import React from 'react';
import axios from 'axios';

export default class CreateCompetition extends React.Component {

    constructor(){
        super()
        this.state = {
            compTitle: '',
            compBody: '',
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
        const competitionData = {
            compTitle: this.state.compTitle,
            compBody: this.state.compBody,
            postedBy: 1000
        };
        axios.post('http://localhost:5000/company/createCompetition', competitionData)
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
                <a class="navbar-brand" href="#">Welcome User</a>
                </nav>
                <div class="container-1">
                    <h2>Company</h2>
                    <h5><b><i><span style={{color: 'green'}}>Post Competiton</span></i></b></h5>
                    <div class="form">
                    <form onSubmit={this.onSubmit}>  
                        <div class="form-group row">
                            <label for="inputTitle" class="col-sm-2 col-form-label"><h5>Competition Title</h5></label>
                            <div class="col-sm-10">
                              <input type="text" class="form-control" id="compTitle" name="compTitle" placeholder="Title" required onChange={this.onChange}/>
                            </div>
                          </div>
                        
                            <div class="form-group row">
                              <label for="inputDescription" class="col-sm-2 col-form-label"><h5>Challenge Description</h5></label>
                              <div class="col-sm-10">
                                <input type="text" class="form-control" id="compBody" name="compBody" placeholder="Description" required onChange={this.onChange}/>
                              </div>
                            </div>
                            
                            <div class="form-group row">
                                    <label for="inputName" class="col-sm-2 col-form-label"><h5>Company Name</h5></label>
                                    <div class="col-sm-10">
                                      <input type="text" class="form-control" id="inputName" placeholder="Name" />>
                                    </div>
                                  </div>
                            <button class="btn btn-outline-success">Create Contest</button>      
                          </form>
                          </div>
                </div>
            </div>
        );
    }
}