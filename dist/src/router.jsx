import React, { PureComponent } from 'react';
import { withRouter } from 'react-router'
import { Switch, Route } from 'react-router-dom';
import LoginPage from './pages/auth/login'
import TaskPages from './pages/tasklist'
import CreateTaskPage from './pages/create_task'

@withRouter
class RootRouter extends PureComponent {

    render() {
        return (
            <Switch>
                {/* <Route path='/' exact component={HomePage} /> */}
                <Route path='/' exact component={LoginPage} />
            </Switch>
        )
    }
}

@withRouter
class UserRouter extends PureComponent {

    render() {
        return (
            <Switch>
                <Route path='/' exact component={TaskPages} />
                <Route path='/create' component={CreateTaskPage} />
            </Switch>
        )
    }
}
export {
    RootRouter,
    UserRouter
}
