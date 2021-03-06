import React from 'react';
// font awesome file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faDollarSign } from '@fortawesome/free-solid-svg-icons'

const Name = (props) => {
    const { name, salary } = props.item;
    return (
        <div>
            <div className="text-start">
                <p><FontAwesomeIcon icon={faCheckCircle} className="me-2"/>Name: {name}</p>
            </div>
            <p><small>Salary: <FontAwesomeIcon icon={faDollarSign}/>{salary}</small></p>
        </div>
    );
};

export default Name;