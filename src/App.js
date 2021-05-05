import CreateQuestion from './components/CreateQuestion'
import LeaderBoard from './components/LeaderBoard'
import QuestionStatistics from './components/QuestionStatistics'
import AnswerQuestion from './components/AnswerQuestion'
import Login from './components/Login'
import 'bootstrap/dist/css/bootstrap.min.css'
import AppHeader from './components/AppHeader'
import Home from './components/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import PublicRoute from './components/PublicRoute'
import { connect } from 'react-redux'
import { handleInitialData } from './actions/shared'
import React from 'react'

class App extends React.Component {
  // Todo: add 404 page

  componentDidMount() {
    const { handleInitialData } = this.props
    handleInitialData()
  }

  render() {
    const isAuthenticated = this.props.authedUser ? true : false

    return (
      <BrowserRouter>
        <AppHeader />
        <div className='container'>
          <Switch>
            <PrivateRoute path="/new" component={CreateQuestion} authenticated={isAuthenticated} />
            <PrivateRoute path="/leaderBoard" component={LeaderBoard} authenticated={isAuthenticated} />
            <PrivateRoute path="/question/votes/:id" component={QuestionStatistics} authenticated={isAuthenticated} />
            <PrivateRoute path="/question/:id" component={AnswerQuestion} authenticated={isAuthenticated} />
            <PublicRoute path="/login" component={Login} authenticated={isAuthenticated} />
            <Route path="/" exact component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

const mapStateToProps = ({ authedUser }) => ({ authedUser })
const mapDispatchToProps = {
  handleInitialData
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
