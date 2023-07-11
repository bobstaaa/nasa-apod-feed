import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import Apod from '../features/apod/apod';
import Rover from '../features/rover/rover'
import Home from '../features/home/home';
import Navbar from '../components/nav/nav';
import { useEffect } from 'react';
import { addCards } from './appSlice';

function App() {
  const onScroll = () => {
    var offsetBottom = document.body.scrollHeight - window.scrollY - window.innerHeight
    if (offsetBottom < 500) {
      store.dispatch(addCards())
    }
  };

  useEffect(() => { document.addEventListener("scroll", onScroll) });

  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/apod' element={<Apod />} />
        <Route exact path='/rover' element={<Rover />} />
      </Routes>
    </div>
  );
}



export default App;
