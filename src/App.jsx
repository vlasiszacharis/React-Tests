
import './App.css';
import DynamicData from './components/DynamicData';
import Layout from './components/Layout';
import ConditionalRender from './components/ConditionalRender';
import EventHandler from './components/EventHandler'

function App() {
  return (
    <>
      <DynamicData />
      <Layout />
      <ConditionalRender />
      <EventHandler />
    </> 
    
  );
}

export default App;
