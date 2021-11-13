import React from 'react';
import { useState } from 'react';

export default function GistsDisplay(props){


    const showGist = (gist) => {
        return (<tr>
            <th scope="row">{gist.id}</th>
            <td><a href={gist.url}>{gist.url}</a></td>
        </tr>
        )
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
                        <th scope="col">Id</th>
                        <th scope="col">Url</th>
                    </tr>
                </thead>
                <tbody>
                    {props.gists.map(showGist)}
                </tbody>
            </table>
        </div>
    </div>
    )
}