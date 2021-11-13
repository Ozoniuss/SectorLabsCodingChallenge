import React from 'react';
import { useState, useEffect } from 'react';

export default function ForksDisplay(props){
    return (
        <div className="container">
        <div className="row">
            <h2>Latest three forkers</h2>
        </div>
        <div className="row">
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">User Number</th>
                        <th scope="col">User Name</th>
                    </tr>
                </thead>
                <tbody>
                    {props.forks.map((fork, index) => {
                        return (<tr>
                            <td  scope="row">{index+1}</td>
                            <td  scope="row" >{fork}</td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
        <div className="row">
            <div className='col col-10'/>
            <div className='col-2'>
                <button className = "btn btn-success" onClick={props.close}>Close</button>
            </div>
            
        </div>
    </div>
    )
}