import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Apod from '../features/apod/apod';
import Donki from '../features/donki/donki'
import Home from '../features/home/home';

function App() {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route exact path='/apod' element={<Apod />} />
      <Route exact path='/apod' element={<Donki />} />
    </Routes>
  );
}

export default App;
