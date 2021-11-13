import React from 'react';
import { useState, useEffect } from 'react';

export default function GistsDisplay(props){

    // const showGist = (gist, index) => {
    //     return (<tr>
    //         <th key={index} scope="row">{index}</th>
    //         <td key={gist.url}><a href={gist.url}>{gist.url}</a></td>
    //     </tr>
    //     )
    // } 

    const [topThreeForkers, setTopThreeForkers] = useState({})

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
        console.log(url);
        fetch(url).then((response) =>
        {return response.json()}).then(
            (data) => {
                if(data.length > 0){
                    props.getForksFromGist(findLastThreeForkers(data));
                }
                else{
                    props.getForksFromGist([]);
                }
            }
        )
    }


    const findLastThreeForkers = (forkers) =>{
        let lastThreeForkers = new Set()
        for (const fork of forkers.slice().reverse()){
            lastThreeForkers.add(fork.owner.login);

            if (lastThreeForkers.size === 3){
                break;
            }
        }
        return Array.from(lastThreeForkers);
    }

    // const findLastThreeForkersForEachGist = () => {
    //     props.gists.map((gist) => console.log(gist))
    //     console.log('haha')
    // }




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
                            <td key={gist.url}>{gist.url}</td>
                            <td><button className = "btn btn-warning" onClick={() => {getAllForks(gist)}}>View forks</button></td>
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