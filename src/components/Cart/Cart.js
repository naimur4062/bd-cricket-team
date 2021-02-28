// import React, { useState } from 'react';
import Name from '../Name/Name';

const Cart = (props) => {
    const cricketer = props.cricketer;
    const total = cricketer.reduce((total, element) => total + element.salary, 0)
    console.log(total)
    return (
        <div>
            <h2>The final team</h2>
            <h4>Players: {cricketer.length}</h4>
            {
                cricketer.map(item => <Name item={item}></Name>)
            }
            <p>Total Budget: {total} $</p>
        </div>
    );
};

export default Cart;