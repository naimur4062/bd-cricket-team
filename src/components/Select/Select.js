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
        <div className="players mt-5">
            <div>
                <h1 className="heading">The Bangladesh team of fifteen members.</h1>
                <div className="select-container">
                    {
                        players.map(player => <Player player={player} handleAddPlayer={handleAddPlayer}></Player>)
                    }
                </div>
            </div>
            <div className="cart-container">
                <Cart cricketer={cricketer}></Cart>
            </div>
        </div>
    );
};

export default Select;