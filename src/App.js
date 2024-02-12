
import "./App.css"
import Navbar from "./pages/Navbar/Navbar"
import Ticket from './pages/Ticket/Ticket';
import Footer from "./pages/Footer/Footer"
import MergedPage from './component/MergedPage';
import SpeakerPage from './component/SpeakerPage';

import Whyus2 from './pages/Whyus2';
import Flip from './pages/Flip';




function App() {

 

  return (
    <div  className=''>
     <Navbar/>
     <MergedPage />
     <Flip />
      <Whyus2/>
     <Ticket/>
     <Footer/>
    </div>
  );
}

export default App;
