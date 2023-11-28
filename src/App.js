
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';
import Sign from './pages/Sign';

function App() {
  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>

      <Route path='/login' element={<Sign/>}/>

      <Route path='/register' element={<Sign register/>}/>
    </Routes> 
    <Footer/>
    </>
  );
}

export default App;
