// import logo from './logo.svg';
import './App.css';

//my pages
import HomePage from './pages/HomePage';


// install stuff
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/umd/popper.min.js';


//Routing stuff
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';


//Error handling 
import NotFoundPage from './pages/NotFoundPage';
import PrivacyPage from './pages/PrivacyPage';


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={< HomePage />} exact />
          <Route path="/Home/Privacy" element={< PrivacyPage />} exact />
          <Route path="*" element={< NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
