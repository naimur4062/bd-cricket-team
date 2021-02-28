import React from 'react';

const Name = (props) => {
    const {name, salary} = props.item;
    return (
        <div>
            <li>Name: {name}</li>
            <p><small>Salary: {salary} $</small></p>
        </div>
    );
};

export default Name;