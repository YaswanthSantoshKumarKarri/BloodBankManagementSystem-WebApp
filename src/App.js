import './App.css';
import DonarInputPage from './components/DonarModule/DonarInputPage/DonarInputPage';
import Home from './components/Home/Home';
import RecieverModule from './components/RecieverModule/RecieverModule';
import Contact from './components/Contact/Contact';
import Stock from './components/Stock/Stock';
import NoPageFound from './components/NoPageFound/NoPageFound';

import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer'

import {Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
       <Nav/>
      <Routes>
        <Route exact path="/DonarInputPage" element={<DonarInputPage/>} />
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/RecieverModule" element={<RecieverModule/>} />
        <Route exact path="/Contact" element={<Contact/>} />
        <Route exact path="/Stock" element={<Stock/>} />
        <Route exact path="*" element={<NoPageFound/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App;
