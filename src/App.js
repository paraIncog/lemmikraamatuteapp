import './App.css';
import 'bootstrap';
import AppHeader from './AppHeader';
import RaamatuAndmed from './RaamatuAndmed';
import RaamatuteNimekiri from './RaamatuteNimekiri';

function App() {
  return (
    <div className="App" class="container">
      <AppHeader />
      <div class="row">
        <div class="col-3">
          <RaamatuteNimekiri />
        </div>
        <div class="col-9">
          <RaamatuAndmed />
        </div>
      </div>
    </div>
  );
}

export default App;
