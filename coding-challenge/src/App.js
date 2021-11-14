import './App.css';
import SearchField from './components/SearchField';
import { useState } from 'react';
import GistsDisplay from './components/GistsDisplay';
import FilesDisplay from './components/FilesDisplay';

import Popup from './components/Popup';

function App() {

  const [isPopupOpen, setisPopupOpen] = useState(false);
  const [content, setContent] = useState("");
 
  const togglePopup = (text) => {
    setContent(text);
    setisPopupOpen(!isPopupOpen);
  }

  const [gists, setGists] = useState([]);

  const [filesFromGist, setFilesFromGist] = useState({});

  //the gist number in the file views component
  const [gistShowing, setGistShowing] = useState(0);


  const getGists = (listOfGists) => {
    let newGists = []
    for (let gist of listOfGists){
      newGists.push(gist)
    }
    setGists(newGists);
    setFilesFromGist({})  // delete files from previous gists
  }
  
  const getFilesFromGist = (filesObject) => {
    setFilesFromGist(filesObject);
    console.log("files" + filesObject)
  }

  return (
  <div className="container">
    <div className='row mt-4'>
      <SearchField getGists={getGists}/>
    </div>
    <div className="row mt-3">
      <GistsDisplay 
        gists={gists} 
        getFilesFromGist={getFilesFromGist} 
        getGistIndex={(index) => setGistShowing(index)} 
        changeGistShowing={() => setGistShowing()}/>
    </div>
    <div className='row mt-3'>
      {Object.keys(filesFromGist).length !== 0 ? 
        <FilesDisplay 
          gistIndex={gistShowing+1} 
          files={filesFromGist} 
          togglePopup={togglePopup} 
          close={() => setFilesFromGist({}) }/> 
        : 
        <></>}
    </div>
    <div className='row mt-3'>
      {isPopupOpen && <Popup content={content}
        handleClose={togglePopup}
      />}
    </div>
  </div>
  
  )
}

export default App;
