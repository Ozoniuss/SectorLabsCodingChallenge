import React from "react";
import { useState } from "react";


export default function SearchField(){
    const [username, setUsername] = useState("");
    const [error, setError] = useState("");

    const searchUser = () =>{
        console.log('fsfafa')

        const requestOptions = {
            method: "POST",
            headers: {"Content-Type": "application/json"}
        };

        fetch('GET github.com/Ozoniuss/gists/public/').then((response) =>
        {
            if (response.ok){
                return response.json();
            }
        }).then((data) => console.log(data));
        ;
    }

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
                    <button type="button" className="btn btn-primary" onClick={searchUser}>Search</button>
                </div>
            </div>
        </div>
    );
}