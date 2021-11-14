import React from 'react';
import GistDisplayItem from './GistDisplayItem';
export default function GistsDisplay(props){

    const getAllFiles = (gist, index) => {
        if (gist.files.length === 0){
            
            //callback to the function that retrieves the content files of the gist
            props.getFilesFromGist({})
            
            //this is used to determine the gist number displayed in the heading of the FilesDisplay component
            props.getGistIndex(index);
        }
        else{
            props.getFilesFromGist(gist.files);
            props.getGistIndex(index);
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
                                key={gist.id}
                                gist={gist} 
                                index={index} 
                                getAllFiles={() => getAllFiles(gist, index)}
                            />

                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
    )
}
