import React from 'react';
import Badge from 'react-bootstrap/Badge'

export default function FilesDisplay(props)
{

    const togglePopup = (text) => {
        props.togglePopup(text)
    }

    const findFileCode = (file) => {
        //get the raw file url
        const url = props.files[file].raw_url;

        fetch(url).then((response)=>{ 
            if(response.ok){
            return response.text()
        }}).then((text)=>{ 
            togglePopup(text);
         }).catch(error => {console.log(error)});
    }

    const removeExtension = (filename) => {
        //remove the extension to convert to a badge
        return filename.substring(0, filename.lastIndexOf("."));
    }

    return (
        <div className="container">
        <div className="row">
            <div className="col-10">
            <   h2>All Files for gist {props.gistIndex}</h2>
            </div>
            <div className="col">
                <button className = "btn btn-success" onClick={props.close}>Close</button>
            </div>
        </div>
        <div className="row">
            {Object.keys(props.files).map((file, _) => {
                return(
                    <div className="col-3">
                        <h5>
                        <Badge bg="light" text="dark" onClick={() => findFileCode(file)}>
                            {removeExtension(props.files[file].filename)}{"  "}
                            <Badge bg="primary">
                                {props.files[file].language !== null ?  props.files[file].language : "unknown"}
                            </Badge>
                        </Badge>
                        </h5>
                    </div>
                ) 
            })}
        </div>
    </div>
    )
}