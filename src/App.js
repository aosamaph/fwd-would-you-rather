import './App.css';
import CreateQuestion from './components/CreateQuestion';
import LeaderBoard from './components/LeaderBoard';
import QuestionStatistics from './components/QuestionStatistics';
import AnswerQuestion from './components/AnswerQuestion';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppHeader from './components/AppHeader';
import Home from './components/Home';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppHeader />
        <Switch>
          <Route path="/new" component={CreateQuestion} />
          <Route path="/leaderBoard" component={LeaderBoard} />
          <Route path="/question/$id" component={AnswerQuestion} />
          <Route path="/question/votes/$id" component={QuestionStatistics} />
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </div>

    //   <Home />
    //   {/* <hr />
    //   <Login />

    //   <AnswerQuestion />
    //   <QuestionStatistics />
    //   <LeaderBoard />
    //   <hr />
    //   <CreateQuestion />
    //   <QuestionsList /> */}

    // </div>
  );
}

export default App;
