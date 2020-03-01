import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListItem.module.scss';

const ListItem = ({
    name, 
    description, 
    image, 
    twitterLink
}) => (
<li className={styles.wrapper}>
    <img src={image} className={styles.image} alt={name} />
    <div>
        <h2 className={styles.name}><b>{name}</b></h2>
        <p className={styles.description}>{description}</p>
        <a href={twitterLink} target='_blank' rel="noopener noreferrer" className={styles.button}>Visit Twitter Page</a>
    </div>
</li>);

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