import './App.css';
import CreateQuestion from './components/CreateQuestion';
import LeaderBoard from './components/LeaderBoard';
import QuestionStatistics from './components/QuestionStatistics';
import QuestionsList from './components/QuestionsList';
import AnswerQuestion from './components/AnswerQuestion';

function App() {
  return (
    <div className="App">
      <AnswerQuestion />
      <hr />
      <QuestionStatistics />
      <LeaderBoard />
      <hr />
      <CreateQuestion />
      <QuestionsList />
    </div>
  );
}

export default App;
