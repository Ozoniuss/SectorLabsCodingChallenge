import React from 'react';

export default function GistsDisplay(props){

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
        console.log(forkers)
        for (const fork of forkers.slice().reverse()){
            lastThreeForkers.add(fork.owner.login);

            if (lastThreeForkers.size === 3){
                break;
            }
        }
        return Array.from(lastThreeForkers);
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
                            <th key={gist.id}scope="row">{index+1}</th>
                            <td key={gist.url}><a href={gist.html_url} target="_blank" rel="noreferrer">{gist.html_url}</a></td>
                            <td><button className = "btn btn-warning" onClick={() => {getAllForks(gist)}}>View who forked</button></td>
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