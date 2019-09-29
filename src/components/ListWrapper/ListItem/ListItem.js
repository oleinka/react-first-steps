import React from 'react';
import PropTypes from 'prop-types';
import './ListItem.css';

const ListItem = ({name, description, image, twitterLink}) => {
    return (<li className="listItem__wrapper">
        <img src={image} className="listItem__image" alt={name} />
        <div>
            <h2 className="listItem__name"><b>{name}</b></h2>
            <p className="listItem__description">{description}</p>
            <a href={twitterLink} className="listItem__button">Visit Twitter Page</a>
        </div>
    </li>);
};
ListItem.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    image: PropTypes.string.isRequired,
    twitterLink: PropTypes.string.isRequired,
};
ListItem.defaultProps = {
    description: "one of the react creators",
};

export default ListItem; 