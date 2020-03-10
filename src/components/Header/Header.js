import React from 'react';
import HeaderNav from './HeaderNav';
import Button from '../Button/Button';
import styles from './Header.module.scss';
import LogoImage from '../../assets/images/logo.png';

const Header = () => (
    <header className={styles.wrapper}>
        <img 
        src={LogoImage} 
        className={styles.logo}
        alt='logo'
        />
        <HeaderNav/>
        <Button secondary>new item</Button>
    </header>
);

export default Header; 