import React from 'react';
import { useState } from 'react';

export default function FilesDisplay(props)
{

    const togglePopup = (text) => {
        props.togglePopup(text)
    }

    const findFileCode = (file) => {
        const url =props.files[file].raw_url;
        fetch(url).then((response)=>{ return response.text() })
        .then((text)=>{ 
            togglePopup(text);
         })
    }

    return (
        <div className="container">
        <div className="row">
            <h2>All Files</h2>
        </div>
        <div className="row">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">File Number</th>
                        <th scope="col">File Name</th>
                        <th scope='col'>Programming Languages</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(props.files).map((file, index) => {
                        return (<tr>
                            <td  scope="row">{index+1}</td>
                            <td  scope="row" onClick={() => findFileCode(file)} >{props.files[file].filename}</td>
                            <td  scope="row">{}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        <div className="row">
            <div className='col col-10'/>
            <div className='col-2'>
                <button className = "btn btn-success" onClick={props.close}>Close</button>
            </div>
            
        </div>
    </div>
    )
}