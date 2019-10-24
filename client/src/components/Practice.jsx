import React from 'react';
import axios from 'axios'
import PracticeList from './PracticeList';

export default class Practice extends React.Component {

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
                <h1 style={{margin: '20px'}}>Practice</h1>
                <div>
                    <div class="col-sm-12">
                        <div
                            class="card"
                            style={{
                            margin: '20px',
                            width: '1200px',
                            height: 'fit-content'
                        }}>
                            <PracticeList></PracticeList>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}