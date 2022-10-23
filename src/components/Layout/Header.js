import React from 'react';
import coverImg from '../../assets/cover.jpg';
import logo from '../../assets/1386b673a88d4a8cb62bb849966f3f89.png';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header = props => {
    return <React.Fragment>
        <header className={classes.header}>
            <img className={classes.logo} src={logo} alt="Purvi's Cook House"/>
            <HeaderCartButton onClick={props.onShowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={coverImg} alt="A cover pic of all foods available."/>
        </div>
    </React.Fragment>
};

export default Header;