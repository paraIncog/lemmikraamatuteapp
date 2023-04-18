import './App.css';
import 'bootstrap';
import { Route, Routes, Switch } from 'react-router-dom';

import AppHeader from './AppHeader';
import MainPage from './pages/MainPage';
import BooksPage from './pages/BooksPage';
import RaamatuAndmed from './RaamatuAndmed';
import RaamatuteNimekiri from './RaamatuteNimekiri';

function App() {
  return (
    <div>
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
      <switch>
        <Routes>
          <Route exact path="/" Component={MainPage} />
          <Route exact path="/raamat2" Component={MainPage} />
          <Route exact path="/raamat3" Component={MainPage} />
          <Route path="/bookspage" Component={BooksPage} />
        </Routes>
      </switch>
      </div>
    </div>
  );
}

export default App;
