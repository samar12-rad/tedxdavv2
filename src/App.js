
import "./App.css"
import Navbar from "./pages/Navbar/Navbar"
import Ticket from './pages/Ticket/Ticket';
import Footer from './pages/Footer/Footer';
import MergedPage from './component/MergedPage';
import SpeakerPage from './component/SpeakerPage';




function App() {

 

  return (
    <div  className=''>
     <Navbar/>
     <MergedPage />
     <Ticket/>
      <Footer/>
    </div>
  );
}

export default App;
