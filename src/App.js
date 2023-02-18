import './App.css';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Home from './pages/Home';

function App() {
  Aos.init({
       duration: 1500,
       once: true,
  })
  return (
    <>
         <Home />
    </>
  );
}

export default App;
