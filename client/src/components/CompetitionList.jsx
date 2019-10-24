import React from 'react';
import axios from 'axios';

export default class CompetitionList extends React.Component {

    constructor() {
        super()
        this.state = {
            comps: []
        }
    }

    async componentDidMount() {
        await axios
            .get('http://localhost:5000/compete')
            .then(compList => {
                console.log(compList);
                this.setState({comps: this.state.comps.concat(compList.data[1])});
            });
    }

    render() {
        return(
            this.state.comps.map((comp, i) => (
                <div class="card-body">
                    <h4 class="card-title">{comp.title}</h4>
                    <p>
                        {comp.cname}
                    </p>
                    <a href="" class="btn btn-outline-success">View Challenges</a>
                    <hr/>
                </div>
            ))
        );
    }
}

