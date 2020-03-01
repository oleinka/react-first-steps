import React from 'react';
import styles from './Form.module.scss'; 
import Input from '../Input/Input';

const Form = ({submitFn}) => (
    <div className={styles.wrapper}>
        <h2>Add new Twitter Account</h2>
        <form autoComplete='off' className={styles.form} onSubmit={submitFn}>
            <Input
                name='name'
                label="Name"
                maxLength={30}
            />
            <Input
                name='link'
                label="Twitter Link"
            />
            <Input
                name='image'
                label="Image"
            />
            <Input
                tag="textarea"
                name='description'
                label="Description"
                maxLength={30}
            />
            <button 
                className={styles.button}
                type="submit">
                add new item
            </button>
        </form>
    </div>
);

export default Form; 