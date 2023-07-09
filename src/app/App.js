import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Apod from '../features/apod/apod';
import Donki from '../features/donki/donki'
import Home from '../features/home/home';
import Navbar from '../components/nav/nav';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/apod' element={<Apod />} />
        <Route exact path='/donki' element={<Donki />} />
      </Routes>
    </div>
  );
}

export default App;
