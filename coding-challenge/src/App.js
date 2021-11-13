import logo from './logo.svg';
import './App.css';
import SearchField from './components/SearchField';
import { useState, useEffect } from 'react';
import GistsDisplay from './components/GistsDisplay';
import FilesDisplay from './components/FilesDisplay';
import ForksDisplay from './components/ForksDisplay';
import Popup from './components/Popup';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState("");
 
  const togglePopup = (text) => {
    setContent(text);
    setIsOpen(!isOpen);
  }

  const [gists, setGists] = useState([]);

  const [filesFromGist, setFilesFromGist] = useState({});
  const [lastThreeForkers, setLastThreeForkers] = useState([])


  const getGists = (listOfGists) => {
    setGists(listOfGists)
    setFilesFromGist({})  // delete files from previous gists
  }
  
  const getFilesFromGist = (filesObject) => {
    setFilesFromGist(filesObject);
    console.log(filesObject)
  }

  const getForkersFromGist = (listOfForkers) => {
    setLastThreeForkers(listOfForkers);
    console.log(listOfForkers);
  }

  useEffect(() => {
    setFilesFromGist({});
    setLastThreeForkers([])}, []) // close remaining files from previous gist when loading the page

  return (
  <div className="container">
    <div className='row mt-4'><SearchField getGists={getGists}/></div>
    <div className="row mt-3"><GistsDisplay gists={gists} getFilesFromGist={getFilesFromGist} getForksFromGist={getForkersFromGist}/></div>
    <div className='row mt-3'>{Object.keys(filesFromGist).length !== 0 ? <FilesDisplay files={filesFromGist} togglePopup={togglePopup} close={() => setFilesFromGist({}) }/> : <></>}</div>
    <div className='row mt-3'>
      {lastThreeForkers.length !== 0 ? <ForksDisplay forks={lastThreeForkers} close={() => setLastThreeForkers([])}/> : <></>}
      {isOpen && <Popup content={content}
      handleClose={togglePopup}
    />}
    </div>
  </div>
  
  )
}

export default App;
