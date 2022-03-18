import React from "react";
import { useState } from "react";


export default function SearchField(props){
    const [username, setUsername] = useState("");

    //if the user is invalid, the input field gets highlighted in red
    const [isInvalidUser, setIsInvalidUser] = useState(false);

    const handlerFormControl = (e) =>{
        setUsername(e.target.value);

        //we'll remove the invalid message if the user starts typing another username
        setIsInvalidUser(false);
    }

    const handleSearchUserGists = () =>{

        fetch(`https://api.github.com/users/${username}/gists`).then((response) =>
        {if (response.ok){
            return response.json();
        }
        else{
            setIsInvalidUser(true);
            return [] // the response actually returns a list
        }
        }).then((data) => {
            props.getGists(data);
        });
    }


    return (
        <div className="container">
            <div className='row'>
                <div className='col-4'/>
                <div className="col-4">
                    <h2>Search for a github user</h2>
                </div>
                <div className='col-4'/>
            </div>

            <div className="row">
                <div className='col-2'/>
                <div className='col-7'>
                    {isInvalidUser === true ? 
                    <>
                    <input className="form-control is-invalid"
                        id="name-field" 
                        type="text"
                        placeholder={"Username"} 
                        value={username} 
                        onChange={ (e) => handlerFormControl(e)}>
                    </input>
                    <div class="invalid-feedback">
                    This user does not have a github account
                    </div>
                    </>
                    :                   
                    <input className="form-control"
                        id="name-field" 
                        type="text"
                        placeholder={"Username"} 
                        value={username} 
                        onChange={ (e) => setUsername(e.target.value)}>
                    </input>}
                </div>
                <div className='col-2'>
                    <button type="button" className="btn btn-primary" onClick={handleSearchUserGists}>Search</button>
                </div>
            </div>
        </div>
    );
}