import React from 'react';
import './App.css';

function App() {
  return (
    <div className="card" style={{width: 'fit-content', margin: 'auto', marginTop: '100px'}}>
            <h5 className="card-header info-color white-text text-center py-4">
              <strong>Sign in</strong>
            </h5>
            <div className="card-body px-lg-5 pt-0">
              <form className="text-center" style={{color: '#757575'}} action="#!">
                <div className="md-form">
                  <input type="email" id="materialLoginFormEmail" className="form-control"/>
                  <label for="materialLoginFormEmail">E-mail</label>
                </div>
                <div className="md-form">
                  <input type="password" id="materialLoginFormPassword" className="form-control" />
                  <label for="materialLoginFormPassword">Password</label>
                </div>
          
                <div className="d-flex justify-content-around">
                  <div>
                    <div className="form-check">
                      <input type="checkbox" className="form-check-input" id="materialLoginFormRemember" />
                      <label className="form-check-label" for="materialLoginFormRemember">Remember me</label>
                    </div>
                  </div>
                </div>
                <button className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Sign in</button>
                <p>Not a member?  
                  <a href="">  Register</a>
                </p>
              </form>
            </div>
    </div>
  );
}

export default App;
