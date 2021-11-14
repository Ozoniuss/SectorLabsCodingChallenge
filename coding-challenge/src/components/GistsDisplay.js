import React from 'react';
import GistDisplayItem from './GistDisplayItem';
export default function GistsDisplay(props){

    const getAllFiles = (gist) => {
        if (gist.files.length === 0){
            props.getFilesFromGist({})
        }
        else{
            props.getFilesFromGist(gist.files);
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
                        return(
                            <GistDisplayItem 
                            gist={gist} 
                            index={index} 
                            getAllFiles={getAllFiles}/>
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
    )
}