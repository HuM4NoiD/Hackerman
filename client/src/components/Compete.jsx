import React from 'react';
import CompetitionList from './CompetitionList';

export default class Compete extends React.Component {

    render() {
        return (
            <div>
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
                <h1 style={{margin: '20px'}}>Competitions</h1>
                <div>
                    <div class="col-sm-12">
                        <div
                            class="card"
                            style={{
                            margin: '20px',
                            width: '1200px',
                            height: 'fit-content'
                        }}>
                            <CompetitionList></CompetitionList>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}