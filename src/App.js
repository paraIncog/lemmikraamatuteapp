import './App.css';
import AppHeader from './AppHeader';
import RaamatuAndmed from './RaamatuAndmed';
import RaamatuteNimekiri from './RaamatuteNimekiri';

function App() {
  return (
    <div className="App" class="container">
      <AppHeader />
      <RaamatuteNimekiri />
      <RaamatuAndmed />
    </div>
  );
}

export default App;
