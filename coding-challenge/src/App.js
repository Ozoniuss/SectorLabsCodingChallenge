import logo from './logo.svg';
import './App.css';
import SearchField from './components/SearchField';
import { useState } from 'react';
import GistsDisplay from './components/GistsDisplay';

function App() {
  const [gists, setGists] = useState([]);

  const getGists = (listOfGists) => {
    setGists(listOfGists)
  }
  
  return (
  <div className="container">
    <div className='row mt-4'><SearchField getGists={getGists}/></div>
    <div className="row mt-3"><GistsDisplay gists={gists}/></div>
  </div>
  )
}

export default App;
