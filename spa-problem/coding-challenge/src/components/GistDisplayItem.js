import React from 'react';
import { useState, useEffect } from 'react';

export default function GistDisplayItem(props){

    const [lastThreeForkers, setLastThreeForkers] = useState([]);

    useEffect(() => {
        //url corresponding to gist forks
        const url = props.gist.forks_url;
        
        fetch(url).then((response) =>
        {if (response.ok)
            {return response.json()}
        }).then(
            (data) => {
                if(data.length > 0){
                    //data is a list, and the function determines the last three forkers, in the order of the forks
                    setLastThreeForkers(findLastThreeForkers(data));
                }
                else{
                    //displays "No forks"
                    setLastThreeForkers([]);
                }
            }
        ).catch(error => {console.log(error)});

    },[]);


    const findLastThreeForkers = (forkers) =>{
        // a set to find out when we have 3 different forkers
        let lastThreeForkersSet = new Set();

        let lastThreeForkers = [];

        //forks seem to be added in the order they were posted, so we can loop through the array in reverse
        //it's also possible to access the dates at fork.updated_at, but I'm not sure if that is always going to be the creation date.
        for (const fork of forkers.slice().reverse()){
            lastThreeForkersSet.add(fork.owner.login);
            lastThreeForkers.push(fork.owner.login);

            if (lastThreeForkersSet.size === 3){
                break;
            }
        }
        return lastThreeForkers;
    }

    return(
    <tr>
        <th key={props.gist.id}scope="row">{props.index+1}</th>
        <td key={props.gist.url}><a href={props.gist.html_url} target="_blank" rel="noreferrer">{props.gist.html_url}</a></td>
        <td>
            { lastThreeForkers.length !== 0 ? lastThreeForkers.toString() : "No forks"}
        </td>
        <td><button className = "btn btn-danger" onClick={() => {props.getAllFiles(props.gist)}}>View files</button></td>
    </tr>);
}