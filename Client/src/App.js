import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './About';
import './App.css';
import Display from './Display';
import Form from './Form';
import Home from './Home';

const App=()=> {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Display' element={<Display/>}/>
        <Route path='/Form' element={<Form/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
