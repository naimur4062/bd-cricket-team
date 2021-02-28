import React from 'react';
import playerData from '../../Fake-data/data.json';
import { useEffect, useState } from 'react';
import Player from '../Player/Player';
import './Select.css'
import Cart from '../Cart/Cart';


const Select = () => {
    const [players, setPlayers] = useState([]);
    const [cricketer, setCricketer] = useState([]);
    useEffect(() => {
        setPlayers(playerData);
    }, [])
    const handleAddPlayer = (player) => {
        const newCricketer = [...cricketer, player];
        setCricketer(newCricketer);
    }
  
    return (
        <div className="players">
            <div className="select-container">
                <h1>The Bangladesh team of fifteen members.</h1>
                {
                    players.map(player => <Player player={player}  handleAddPlayer={handleAddPlayer}></Player>)
                }
            </div>
            <div className="cart-container">
                <Cart cricketer={cricketer}></Cart>
            </div>
        </div>
    );
};

export default Select;