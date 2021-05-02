import './App.css';
import CreateQuestion from './components/CreateQuestion';
import QuestionsList from './components/QuestionsList';

function App() {
  return (
    <div className="App">
      <CreateQuestion />
      <QuestionsList />
    </div>
  );
}

export default App;
