import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { connect } from 'react-redux'
import PrivateRoute from './PrivateRoute'
import MainBoard from './MainBoard'
import Login from './Login'
import SignUp from './SignUp'
import Teammates from './Teammates'
import Page404 from './Page404'

function MainRouter(props) {
    if (!props.auth.isLoaded) return (<div>loading...</div>)
    return (
            <div>
                <Router>
                    <Switch>
                        <PrivateRoute path="/" exact component={MainBoard} />
                        <Route path="/login" component={Login} />
                        <Route path="/signup" component={SignUp} />
                        <Route path="/teammates" component={Teammates} />
                        <Route component={Page404} />
                    </Switch>
                </Router>
            </div>
    )
}

export default connect((state) => {
    return { auth: state.firebase.auth }
})(MainRouter)
