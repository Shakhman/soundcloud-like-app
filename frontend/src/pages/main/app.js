import React, { Component } from 'react'
import { Switch, Route } from 'react-router'
import Home from './Home'
import Header from './components/Header'

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                </Switch>
            </div>
        )
    }
}
