import './App.css';
import CreateQuestion from './components/CreateQuestion';
import LeaderBoard from './components/LeaderBoard';
import QuestionsList from './components/QuestionsList';

function App() {
  return (
    <div className="App">
      <LeaderBoard />
      <CreateQuestion />
      <QuestionsList />
    </div>
  );
}

export default App;
