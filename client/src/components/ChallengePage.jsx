import React from 'react';
import axios from 'axios';
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/theme-dracula";

export default class ChallengePage extends React.Component {

    onEditorChange(e) {
        console.log(e);
        this.setState({
            editor: e,
        })
    }

    constructor() {
        super()
        this.state = {
            editor: '',
            challenge: {},
            solution: {}
        }
        this.onEditorChange = this
            .onEditorChange
            .bind(this);
        this.onSubmit = this
            .onSubmit
            .bind(this);
    }

    onSubmit = (e) => {
        console.log('submit Called')
        e.preventDefault();
        const solutionData = {
            lang: 'Python',
            sol: this.state.editor,
            userId: 3,
            challengeId: this.state.challenge.id,
        };
        axios
            .post('http://localhost:5000/solution/submitSolution', solutionData)
            .then(response => {
                console.log('SOLUTION');
                console.log(response);
                alert(response);
            })
            .catch(error => {
                console.log(error);
                alert('Error')
            })
    }

    async componentDidMount() {
        await axios.get('http://localhost:5000/challenge/102').then(challenge => {
            this.setState({challenge: challenge.data});
            console.log(challenge.data);
        });
        await axios.get(`http://localhost:5000/solution/get/3/${this.state.challenge.id}`).then(solution => {
            this.setState({solution: solution.data})
            if (!!this.state.solution) {
                this.setState({editor: solution.data.sol});
            }
        })
    }

    render() {
        return (
            <div className="deep-blue-gradient">
                <nav class="navbar navbar-dark bg-dark">
                    <a class="navbar-brand" href="#">HackerMan</a>
                    <a class="navbar-brand" href="/practice">Practice</a>
                    <a class="navbar-brand" href="/compete">Compete</a>

                    <form class="form-inline my-2 my-lg-0">
                        <input
                            class="form-control mr-sm-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"/>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <a class="navbar-brand" href="#">Welcome</a>
                </nav>

                <div
                    class="card scroll"
                    style={{
                    height: '550px',
                    padding: '20px',
                    float: 'left',
                    marginLeft: '30px',
                }}>
                    <div>
                        <h1>{this.state.challenge.title}</h1>
                        <h3>{this.state.challenge.difficulty}</h3>
                    </div>
                    <div>
                        <p>
                            {this.state.challenge.body}
                        </p>
                    </div>
                </div>

                <div class="card" style={{height: 'fit-content', width: 'fit-content', marginLeft: "550px"}}>
                    <AceEditor
                        mode="python"
                        theme="dracula"
                        onEditorChange={this.onEditorChange}
                        name="UNIQUE_ID_OF_DIV"
                        id="editor"
                        value={this.state.editor}
                        editorProps={{
                            $blockScrolling: true
                        }}
                        style={{
                            height: '480px',
                            width: '750px'
                        }}/>
                </div>
                <button className="btn btn-indigo" type="submit" onClick={this.onSubmit} style={{float: 'right', marginRight: '20px'}}>Submit</button>
            </div>
        );
    }
}