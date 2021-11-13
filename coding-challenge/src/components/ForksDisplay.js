import React from 'react';
import { useState, useEffect } from 'react';

export default function ForksDisplay(props){
    return (
        <div className="container">
        <div className="row">
            <h2>Latest three forkers</h2>
        </div>
        <div className="row">
            <ol className="list-group list-group-numbered">
                    {props.forks.map((fork) => {
                        return (<li class="list-group-item">
                            {fork}
                        </li>
                        )
                    })}
            </ol>
        </div>
        <div className="row mt-3">
            <div className='col col-9'/>
            <div className='col'>
                <button className = "btn col-8 btn-success" onClick={props.close}>Close</button>
            </div>
            
        </div>
    </div>
    )
}