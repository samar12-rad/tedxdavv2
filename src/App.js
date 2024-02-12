
import "./App.css"
import Navbar from "./pages/Navbar/Navbar"
import Ticket from './pages/Ticket/Ticket';
import Footer from "./pages/Footer/Footer"
import MergedPage from './component/MergedPage';
import SpeakerPage from './component/SpeakerPage';
import HeroParallax from './pages/hero-parallax';
import samarth from './Images/reel2.jpg';
import Whyus2 from './pages/Whyus2';
import Flip from './pages/Flip';




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

 

  return (
    <div  className=''>
     <Navbar/>
     <HeroParallax products={productsData}/>
     <MergedPage />
     <Flip />
      <Whyus2/>
     <Ticket/>
     <Footer/>
    </div>
  );
}

export default App;
