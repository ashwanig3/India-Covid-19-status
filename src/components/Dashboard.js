import React, { Component } from 'react';

class Dashboard extends Component {
    state = {
        data: {}
    }
    componentDidMount = () => {
        fetch("https://api.covid19india.org/data.json")
        .then(res => res.json())
        .then(resData => {
            this.setState({
                data: resData
            })
        })
    }

    render() {
        const { statewise } = this.state.data
        return (
            <div className="container-lg">
                {
                    statewise ? (
                        <div>
                        <h1 className="main-heading">India Covid-19 Status <br /><span className="last-updated">(Last updated at: {statewise[0].lastupdatedtime})</span></h1>
                        <div className="stats-grid">
                    <div>
                        <p className="red">Confirmed Cases</p>
                        <p>{statewise[0].confirmed}</p>
                    </div>
                    <div>
                        <p className="purple">Active Cases</p>
                        <p>{statewise[0].active}</p>
                    </div>
                    <div>
                        <p className="green">Recovered Cases</p>
                        <p>{statewise[0].recovered}</p>
                    </div>
                    <div>
                        <p className="grey">Death</p>
                        <p>{statewise[0].deaths}</p>
                    </div>
                </div>
                </div>
                    ) : null
                }
                
                <div className="stats-by-state">
                    <h2>Statewise Data</h2>
                    {
                        statewise && statewise.map((state, i) => (
                            <div key={i} className="state-flex">
                                <p className="state">{state.state}</p>
                                <p>Confirmed: {state.confirmed}</p>
                                <p>Active: {state.active}</p>
                                <p>Recovered: {state.recovered}</p>
                                <p>Deaths: {state.deaths}</p>
                            </div>
                        ))
                    }
                </div>
                <footer>&copy; Copyright 2020 Ashwani Goswami</footer>
            </div>
        );
    }
}

export default Dashboard;