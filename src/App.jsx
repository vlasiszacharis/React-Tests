
import './App.css';
import DynamicData from './components/DynamicData';
import Layout from './components/Layout';
import ConditionalRender from './components/ConditionalRender';
import EventHandler from './components/EventHandler'
import SubmitForm from './components/SubmitForm'

function App() {
  return (
    <>
      <DynamicData />
      <Layout />
      <ConditionalRender />
      <EventHandler />
      <SubmitForm />
    </> 
    
  );
}

export default App;
