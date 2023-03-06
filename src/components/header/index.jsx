import React from "react";
import {Logo} from '../logo'
import style from './header.module.css';
import {Nav} from '../nav'

export const Header = () => {
    return (
        <header className={style.Header}>
            <Logo>
                 Hebert .
            </Logo>
            <Nav />
        </header>
    )
}