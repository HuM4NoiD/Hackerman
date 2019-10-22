import React from 'react'

export default class UserSignup extends React.Component {
    render() {
        return (
            <div class="card">
                <h5 class="card-header info-color white-text text-center py-4">
                    <strong>Sign up</strong>
                </h5>
                <div class="card-body px-lg-5 pt-0">
                    <form class="text-center" style={{color: '#757575'}} action="#!">
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
                        <div class="form-check">
                            <input
                                type="checkbox"
                                class="form-check-input"
                                id="materialRegisterFormNewsletter"/>
                            <label class="form-check-label" for="materialRegisterFormNewsletter">Subscribe to our newsletter</label>
                        </div>
                        <button
                            class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0"
                            type="submit">Sign in</button>
                        <p>or sign up with:</p>

                        <a type="button" class="btn-floating btn-fb btn-sm">
                            <i class="fab fa-facebook-f"></i>
                        </a>
                        <a type="button" class="btn-floating btn-tw btn-sm">
                            <i class="fab fa-twitter"></i>
                        </a>
                        <a type="button" class="btn-floating btn-li btn-sm">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a type="button" class="btn-floating btn-git btn-sm">
                            <i class="fab fa-github"></i>
                        </a>
                        <hr/>
                        <p>By clicking
                            <em>Sign up</em>
                            you agree to our
                            <a href="" target="_blank">terms of service</a>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}