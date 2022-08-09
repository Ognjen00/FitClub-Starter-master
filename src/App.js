import './App.css'
import Hero from './components/Hero/Hero'
import Plans from './components/Plans/Plans';
import Programs from './components/programs/Programs'
import Reasons from './components/Reasons/Reasons';
import Testemonials from './components/Testemonials/Testemonials';
function App() {
  return (
    <div className="App">
        <Hero/> 
        <Programs/>
        <Reasons/>
        <Plans/>
        <Testemonials/>
     </div>
  );
}

export default App;
