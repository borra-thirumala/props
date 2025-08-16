import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import { Bio } from './Bio';

function App() {
  let name="Thirumala"
  let mob=1234567890
  let city="Welcome to hyd"
  let age=22
  return (
    <div className='App'>
      <Welcome key_name={name} city={city} />
      <Bio key_mob={mob} age={age}/>
    </div>
    
  );
}

export default App;
