import React from 'react';
import styles from './Form.module.scss'; 

const Form = ({submitFn}) => (
    <form className={styles.wrapper} onSubmit={submitFn}>
        <h3>Add new Twitter Account</h3>
        <input placeholder="name" name="name"/>
        <input placeholder="link" name="link"/>
        <input placeholder="image" name="image"/>
        <textarea placeholder="description" name="description"/>
        <button type="submit">
            add new item
        </button>
    </form>
);

export default Form; 