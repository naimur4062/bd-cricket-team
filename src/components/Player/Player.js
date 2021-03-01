import React from 'react';
import './Player.css';
// font awesome file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const { img, name, salary, country } = props.player;
    const handleAddPlayer = props.handleAddPlayer;
    return (   
        <div className="container">
            <div className="player-container">
                <img src={img} alt="" />
                <h3>{name}</h3>
                <h4>Salary: {salary} $</h4>
                <h1>{country}</h1>
                <button onClick={()=> handleAddPlayer(props.player)} className="addButton"><FontAwesomeIcon icon={faUserPlus} className="me-2" />Add Player</button>
            </div>
        </div> 
    );
};

export default Player;