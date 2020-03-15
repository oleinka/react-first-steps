import React from 'react';
import styles from './RadioButton.module.scss';

const RadioButton = ({id,checked,changeFn,children}) => (
    <label className={styles.radio}>
        <input
            id={id}
            type='radio'
            checked={checked}
            onChange={changeFn}
        />
        <div className={styles.radioBtn}/>
        {children}
    </label>
)

export default RadioButton;