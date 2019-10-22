import React from 'react';
import './App.css';

function App() {
    return (
        <div class="card" style= {{height: 'fit-content'}}>
            <h5 class="card-header info-color white-text text-center py-4">
                <strong>Sign up</strong>
            </h5>
            <div class="card-body px-lg-5 pt-0">
                <form
                    class="text-center"
                    style={{
                    color: '#757575'
                }}
                    action="#!">
                    <div class="form-row">
                        <div class="col">
                            <div class="md-form">
                                <input
                                    type="text"
                                    id="materialRegisterFormFirstName"
                                    class="form-control"
                                    required/>
                                <label for="materialRegisterFormFirstName">First name</label>
                            </div>
                        </div>
                        <div class="col">
                            <div class="md-form">
                                <input type="email" id="materialRegisterFormLastName" class="form-control"/>
                                <label for="materialRegisterFormLastName">Last name</label>
                            </div>
                        </div>
                    </div>
                    <div class="md-form mt-0">
                        <input type="email" id="materialRegisterFormEmail" class="form-control"/>
                        <label for="materialRegisterFormEmail">E-mail</label>
                    </div>
                    <div class="md-form">
                        <input
                            type="password"
                            id="materialRegisterFormPassword"
                            class="form-control"
                            aria-describedby="materialRegisterFormPasswordHelpBlock"/>
                        <label for="materialRegisterFormPassword">Password</label>
                        <small
                            id="materialRegisterFormPasswordHelpBlock"
                            class="form-text text-muted mb-4">
                            At least 8 characters and 1 digit
                        </small>
                    </div>
                    <span>Gender</span>
                    <select class="custom-select mb-4 mdb-select" style={{marginBottom: '100px'}}>
                        <option value="" disabled>Choose option</option>
                        <option value="F" selected>Female</option>
                        <option value="M">Male</option>
						<option value="O">Other</option>
                    </select>
					<div class="md-form mt-0" >
                        <input type="date" id="materialRegisterFormEmail" class="form-control" required/>
                        <label for="materialRegisterFormEmail">Date</label>
                    </div>
                    <button
                        class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"
                        type="submit">Sign up</button>
                </form>
            </div>
        </div>
    );
}

export default App;
