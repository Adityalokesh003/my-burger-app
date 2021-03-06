import React from 'react';
import classes from './SideDrawer.module.css';
import Logo from './../../Logo/Logo';
import NavigationItems from './../NavigationItems/NavigationItems';


const sideDrawer = (props) => (
    <div className={classes.SideDrawer}>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems />
        </nav>


    </div>
);

export default sideDrawer;