import React from 'react';
import './ListItem.css';

const ListItem = (props) => (
    <li className="listItem__wrapper">
        <img 
            src={props.image} 
            className="listItem__image"
            alt={props.name}
        />
        <div>
            <h2 className="listItem__name"><b>{props.name}</b></h2>
            <p className="listItem__description">{props.description}</p>
            <a href={props.link}className="listItem__button">Visit Twitter Page</a>
        </div>
    </li>
);

export default ListItem; 