import React from 'react';
import styles from './Form.module.scss'; 

const Form = ({submitFn}) => (
    <form className={styles.wrapper} onSubmit={submitFn}>
        <h3>Add new Twitter Account</h3>
        <input 
            placeholder="name" 
            name="name"
            required/>
        <input 
            placeholder="link" 
            name="link"
            required/>
        <input 
            placeholder="image" 
            name="image"
            />
        <textarea 
            placeholder="description" 
            name="description"
            required/>
        <button 
            type="submit">
            add new item
        </button>
    </form>
);

export default Form; 