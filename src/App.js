import './App.css';
import CreateQuestion from './components/CreateQuestion';
import LeaderBoard from './components/LeaderBoard';
import QuestionStatistics from './components/QuestionStatistics';
import QuestionsList from './components/QuestionsList';

function App() {
  return (
    <div className="App">
      <QuestionStatistics />
      <hr />
      <LeaderBoard />
      <hr />
      <CreateQuestion />
      <QuestionsList />
    </div>
  );
}

export default App;
