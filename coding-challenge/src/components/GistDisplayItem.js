import React from 'react';
import { useState, useEffect } from 'react';

export default function GistDisplayItem(props){

    const [lastThreeForkers, setLastThreeForkers] = useState([]);

    useEffect(() => {
        const url = props.gist.forks_url;
        console.log(url);
        fetch(url).then((response) =>
        {return response.json()}).then(
            (data) => {
                if(data.length > 0){
                    setLastThreeForkers(findLastThreeForkers(data));
                }
                else{
                    setLastThreeForkers([]);
                }
            }
        )
        console.log('updated');

    },[]);



    const findLastThreeForkers = (forkers) =>{
        let lastThreeForkersSet = new Set(); // a set to find out when we have 3 different
        let lastThreeForkers = [];
        console.log(forkers)
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
        {console.log("component rendered")}
        <th key={props.gist.id}scope="row">{props.index+1}</th>
        <td key={props.gist.url}><a href={props.gist.html_url} target="_blank" rel="noreferrer">{props.gist.html_url}</a></td>
        <td>
            { lastThreeForkers.length !== 0 ? lastThreeForkers.toString() : "No forkers"}
        </td>
        <td><button className = "btn btn-danger" onClick={() => {props.getAllFiles(props.gist)}}>View files</button></td>
    </tr>);
}