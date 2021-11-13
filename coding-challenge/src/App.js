import logo from './logo.svg';
import './App.css';
import SearchField from './components/SearchField';
import { useState } from 'react';
import GistsDisplay from './components/GistsDisplay';
import FilesDisplay
 from './components/FilesDisplay';
function App() {
  const [gists, setGists] = useState([]);

  const [filesFromGist, setFilesFromGist] = useState({});


  const getGists = (listOfGists) => {
    setGists(listOfGists)
  }
  
  const getFilesFromGist = (filesObject) => {
    setFilesFromGist(filesObject);
    console.log(filesObject)
  }


  return (
  <div className="container">
    <div className='row mt-4'><SearchField getGists={getGists}/></div>
    <div className="row mt-3"><GistsDisplay gists={gists} getFilesFromGist={getFilesFromGist}/></div>
    <div className='row nt-3'>{Object.keys(filesFromGist).length !== 0 ? <FilesDisplay files={filesFromGist} close={() => setFilesFromGist({})}/> : <></>}</div>
  </div>
  )
}

export default App;
