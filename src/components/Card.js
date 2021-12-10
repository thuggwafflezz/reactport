import React from 'react';

export default function Card(props){
    
    return(
        <div>
            <div className={props.className}>
                <div className="card-header">
                    <h1 className="card-title">{props.name}</h1>
                </div>
            </div>
        </div>
    )

}

