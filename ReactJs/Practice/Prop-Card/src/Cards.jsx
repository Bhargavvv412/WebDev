import React from "react";
import './App.css';

function Cards(props) {
    return (
        <div className='card'>
            <div className='top'>
                <h2>{props.name}</h2>
                <img src={props.img} className='circle-img' alt={props.name} />
            </div>
            <div className='bottom'>
                <p className='info'>{props.phone}</p>
                <p className='info'>{props.email}</p>
            </div>
        </div>
    );
}

export default Cards;
