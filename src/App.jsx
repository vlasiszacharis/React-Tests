
import './App.css';
import DynamicData from './components/DynamicData';
import Layout from './components/Layout';
import ConditionalRender from './components/ConditionalRender';
import EventHandler from './components/EventHandler'
import SubmitForm from './components/SubmitForm'
import CharacterLimit from './components/CharacterLimit';
import LightToggle from './components/LightToggle';
import Password from './components/Password';
import Toggle from './components/Toggle';
import CharacterCounter from './components/CharacterCount';

function App() {
  return (
    <>
      <CharacterCounter />
      <Toggle />
      <DynamicData />
      <Layout />
      <ConditionalRender />
      <EventHandler />
      <SubmitForm />
      <CharacterLimit />
      <LightToggle />
      <Password />
    </>
    
  );
}

export default App;
