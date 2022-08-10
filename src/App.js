import './App.css';
import Hero from './components/Hero/Hero';
import Plans from './components/Plans/Plans';
import Programs from './components/programs/Programs'
import Reasons from './components/Reasons/Reasons';
import Testemonials from './components/Testemonials/Testemonials';
import Join from './components/Join/Join';
import Footer  from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
        <Hero/> 
        <Programs/>
        <Reasons/>
        <Plans/>
        <Testemonials/>
        <Join/>
        <Footer/>
     </div>
  );
}

export default App;
