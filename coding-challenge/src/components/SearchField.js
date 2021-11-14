import React from "react";
import { useState } from "react";


export default function SearchField(props){
    const [username, setUsername] = useState("");
    const [isInvalidUser, setIsInvalidUser] = useState(false);

    const handlerFormControl = (e) =>{
        setUsername(e.target.value);
        setIsInvalidUser(false);
    }

    const searchUserGists = () =>{

        fetch(`https://api.github.com/users/${username}/gists`).then((response) =>
        {if (response.ok){
            return response.json();
        }
        else{
            setIsInvalidUser(true);
            return []
        }
        }).then(
            (data) => {
                console.log(data);
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
                <div className='col-6'>
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
                    
                    {/* <input className="form-control"
                        id="name-field" 
                        type="text"
                        placeholder={"Username"} 
                        value={username} 
                        onChange={ (e) => setUsername(e.target.value)}>
                    </input> */}

                </div>
                <div className='col-2'>
                    <button type="button" className="btn btn-primary" onClick={searchUserGists}>Search</button>
                </div>
            </div>
        </div>
    );
}