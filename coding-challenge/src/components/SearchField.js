import React from "react";
import { useState } from "react";


export default function SearchField(props){
    const [username, setUsername] = useState("");

    const searchUserGists = () =>{

        fetch(`https://api.github.com/users/${username}/gists`).then((response) =>
        {if (response.ok){
            return response.json();
        }
        else{
            return []
        }
        }).then(
            (data) => {
                console.log(data);
                props.getGists(data);
                });
        //displayGists();
    }

    // const displayGists = () =>{
    //     console.log(gists)
    //     for (const key in gists){
    //         console.log(gists[key]);
    //     }
    // }

    return (
        <div className="container">
            <div className='row'>
                <div className='col-2'/>
                <div className="col-6">
                    <h2>Search for a github user</h2>
                </div>
                <div className='col2'/>
            </div>

            <div className="row">
                <div className='col-6'>
                    <input className="form-control"
                        id="name-field" 
                        type="text"
                        placeholder={"Username"} 
                        value={username} 
                        onChange={ (e) => setUsername(e.target.value)}>
                    </input>
                </div>
                <div className='col-6'>
                    <button type="button" className="btn btn-primary" onClick={searchUserGists}>Search</button>
                </div>
            </div>
        </div>
    );
}