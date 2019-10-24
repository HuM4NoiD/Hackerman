import React from 'react';
import axios from 'axios';

export default class PracticeList extends React.Component {

    constructor() {
        super()
        this.state = {
            challenges: []
        }
    }

    async componentDidMount() {
        await axios
            .get('http://localhost:5000/practice')
            .then(challengeList => {
                console.log(challengeList);
                this.setState({challenges: this.state.challenges.concat(challengeList.data)});
            });
    }

    render() {
        return(
            this.state.challenges.map((challenge, i) => (
                <div class="card-body">
                    <h4 class="card-title">{challenge.title}</h4>
                    <p>
                        Difficulty: {challenge.difficulty}
                    </p>
                    <p>
                        ID: {challenge.id}
                    </p>
                    <a href="/challenge" class="btn btn-outline-success">Solve Challenge</a>
                    <hr/>
                </div>
            ))
        );
    }
}

