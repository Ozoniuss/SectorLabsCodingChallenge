import React from 'react';
import { useState } from 'react';

export default function GistsDisplay(props){


    // const showGist = (gist, index) => {
    //     return (<tr>
    //         <th key={index} scope="row">{index}</th>
    //         <td key={gist.url}><a href={gist.url}>{gist.url}</a></td>
    //     </tr>
    //     )
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
                        <th scope="col">Id</th>
                        <th scope="col">Url</th>
                        <th scope="col">View All Files</th>
                        <th scope="col">View Last Forks</th>
                    </tr>
                </thead>
                <tbody>
                    {props.gists.map((gist, index) => {
                        return (<tr>
                            <th key={index} scope="row">{index}</th>
                            <td key={gist.url}><a href={gist.url}>{gist.url}</a></td>
                            <td><button className = "btn btn-danger" onClick={()=>{}}>View files</button></td>
                            <td><button className = "btn btn-warning" onClick={()=>{}}>View forks</button></td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
    )
}