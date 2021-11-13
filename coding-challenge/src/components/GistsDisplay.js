import React from 'react';
import { useState } from 'react';

export default function GistsDisplay(props){

    const [lastForkedBy, setLastForkedBy] = useState([]);


    // const showGist = (gist, index) => {
    //     return (<tr>
    //         <th key={index} scope="row">{index}</th>
    //         <td key={gist.url}><a href={gist.url}>{gist.url}</a></td>
    //     </tr>
    //     )
    // } 

    const getAllFiles = (gist) => {
        if (gist.files.length === 0){
            props.getFilesFromGist({})
        }
        else{
            props.getFilesFromGist(gist.files);
        }
    }

    const getAllForks = (gist) => {
        const url = gist.forks_url;
        fetch(url).then((response) =>
        {return response.json()}).then((data) => findLastThreeForkers(data))
    }

    const findLastThreeForkers = (forkers) =>{
        for (const fork of forkers.slice().reverse()){
            console.log(fork.owner);
        }
    }

    return(
        <div className="container">
        <div className="row">
            <h2>All Gists</h2>
        </div>
        <div className="row">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Number</th>
                        <th scope="col">Url</th>
                        <th scope="col">Last Forked By</th>
                        <th scope="col">View All Files</th>
                    </tr>
                </thead>
                <tbody>
                    {props.gists.map((gist, index) => {
                        return (<tr>
                            <th key={index} scope="row">{index}</th>
                            <td key={gist.url}><a href={gist.html_url} target="_blank">{gist.url}</a></td>
                            <td><button className = "btn btn-warning" onClick={()=>{getAllForks(gist)}}>View forks</button></td>
                            <td><button className = "btn btn-danger" onClick={() => {getAllFiles(gist)}}>View files</button></td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
    )
}