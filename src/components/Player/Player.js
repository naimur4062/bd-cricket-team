import React from 'react';
import './Player.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'

const Player = (props) => {
    const { img, name, salary, country } = props.player;
    const handleAddPlayer = props.handleAddPlayer;
    return (
        <div className="container">
            <div className="player-container">
                <img src={img} alt="" />
                <h2>{name}</h2>
                <h4>Salary: {salary} $</h4>
                <h1>{country}</h1>
                <button onClick={()=> handleAddPlayer(props.player)} className="addButton"><FontAwesomeIcon icon={faUserPlus} />Add Player</button>
            </div>
        </div>
    );
};

export default Player;