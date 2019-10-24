import React from 'react';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <img src="logo.jpg" alt="" style={{ marginTop: '50px', textAlign: 'center',marginLeft:'470px',height:'250px' , width:'350px'}} />
                <h1 style={{textAlign: "center", fontWeight:'700', fontSize: '70px'}}>HackerMan</h1>
                <div class='row'>
                    <div class="col-sm-6">
                        <div
                            class="card"
                            style={{
                            marginLeft:'250px',
                            textAlign:"center",
                            width: '350px',
                            height: '200px',
                            marginBottom:'200px',
                            padding: '20px'
                        }}>
                            <h1>User</h1>
                            <p>Practice Challenges and compete to up your coding game!</p>
                            <a class="btn btn-outline-success my-2 my-sm-0" type="submit" href="/usersignin" style={{marginTop:'500px'}}>User</a>

                        </div>
                    </div>
                    
                    <div class="col-sm-6">
                        <div
                            class="card"
                            style={{
                                textAlign:"center",
                            margin: '20px',
                            width: '350px',
                            height: '200px',
                            padding: '20px'
                        }}>
                            <h1>Company</h1>
                            <p>Recruit top talent and brains using competitions and challenges</p>
                            <a class="btn btn-outline-success my-2 my-sm-0" type="submit" href="/companysignin" style={{marginTop:'500px'}}>Company</a>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}