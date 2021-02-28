import React from 'react';
import playerData from '..';
import { useEffect, useState } from 'react';
import Player from './components/Player/Player';

const Select = () => {
    const [players, setPlayers] = useState([]);
    useEffect(() => {
        setPlayers(playerData);
    }, [])
    return (
        <div>
            <h1>Bangladesh Squad of 15 players</h1>
            {
                players.map(player => <Player player={player}></Player>)
            }
        </div>
    );
};

export default Select;