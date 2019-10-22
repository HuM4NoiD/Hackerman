import React from 'react'

export default class CompanySignin extends React.Component {
    render() {
        return (
            <div className="card" style={{width: 'fit-content', height: 'fit-content',margin: 'auto', marginTop: '120px'}}>
            <h5 className="card-header white-text text-center py-4" style={{backgroundColor: '#3f51b5'}}>
              <strong>Sign in</strong>
            </h5>
            <div className="card-body px-lg-5 pt-0">
              <form className="text-center" style={{color: '#757575'}} action="#!">
                <div className="md-form">
                  <input type="text" pattern="[0-9]*" id="companyId" className="form-control"/>
                  <label for="materialLoginFormEmail">Company ID</label>
                </div>
                <div className="md-form">
                  <input type="password" id="password" className="form-control" />
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
                <button className="btn btn-outline-primary btn-rounded my-4 waves-effect z-depth-0" type="submit" style={{borderColor: '#3f51b5', color: '#3f51b5'}}>Sign in</button>
                <p>Not a member?  
                  <a href="">  Register</a>
                </p>
              </form>
            </div>
            </div>
        )
    }
}