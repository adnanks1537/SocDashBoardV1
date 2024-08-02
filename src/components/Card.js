import React from 'react';
import './Card.css';

const Card = ({ title, children }) => (
    <div className="card">
        <h2>{title}</h2>
        {children}
    </div>
);

export default Card;
