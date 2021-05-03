import './App.css';
import CreateQuestion from './components/CreateQuestion';
import LeaderBoard from './components/LeaderBoard';
import QuestionStatistics from './components/QuestionStatistics';
import QuestionsList from './components/QuestionsList';
import AnswerQuestion from './components/AnswerQuestion';
import Login from './components/Login';
import 'bootstrap/dist/css/bootstrap.min.css'
import AppHeader from './components/AppHeader';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Home />
      {/* <hr />
      <Login />

      <AnswerQuestion />
      <QuestionStatistics />
      <LeaderBoard />
      <hr />
      <CreateQuestion />
      <QuestionsList /> */}

    </div>
  );
}

export default App;
