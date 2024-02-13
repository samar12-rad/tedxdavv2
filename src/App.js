import "./App.css"
import Navbar from "./pages/Navbar/Navbar"
import Ticket from './pages/Ticket/Ticket';
import Footer from "./pages/Footer/Footer"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import MergedPage from './component/MergedPage';
import SpeakerPage from './component/SpeakerPage';
import HeroParallax from './pages/hero-parallax';
import samarth from './Images/reel2.jpg';
import Whyus2 from './pages/Whyus2';
import Flip from './pages/Flip';
import Teams from './components/Teams';
import Header from './components/Header';
import Years from './components/Years';
import data from './cardData.json';
import { useState } from 'react';
import ShubhanshTeams from "./ShubhanshTeams";
import Main from "./pages/Main/Main";



function App() {
  const productsData = [
    { title: 'Product 1', link: '', thumbnail: samarth },
    { title: 'Product 2', link: '', thumbnail: samarth },
    { title: 'Product 3', link: '', thumbnail: samarth },
    { title: 'Product 4', link: '#', thumbnail: samarth },
    { title: 'Product 5', link: '#', thumbnail: samarth },
    { title: 'Product 6', link: '#', thumbnail: samarth },
    { title: 'Product 7', link: '#', thumbnail: samarth },
    { title: 'Product 8', link: '#', thumbnail: samarth },
    { title: 'Product 9', link: '#', thumbnail: samarth },
    { title: 'Product 10', link: '#', thumbnail: samarth },
    { title: 'Product 11', link: '#', thumbnail: samarth },
    { title: 'Product 12', link: '#', thumbnail: samarth },
    { title: 'Product 13', link: '#', thumbnail: samarth },
    { title: 'Product 14', link: '#', thumbnail: samarth },
    { title: 'Product 15', link: '#', thumbnail: samarth },
    // Add more product data as needed
  ];
  const [info ,setInfo] = useState(data);

  // console.log(info);
  let coreTeam = info[2024]['Core Team'];
  // console.log(coreTeam);

  let webDev = info[2024]['Web Dev Team'];
  // console.log(webDev);
 

  return (
    <div  className=''>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/about' element={<Flip/>}/>
        <Route path='/gallery' element={<HeroParallax products={productsData}/>}/>
        <Route path='/teams' element={<ShubhanshTeams/>}/>
        
      </Routes>
       <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;