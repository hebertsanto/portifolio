import React from "react"
import { LinkComponent } from "../Link"
import style from './nav.module.css'
export const Nav = () => {
    return (
     <nav className={style.Nav}>
         <LinkComponent to="/">about</LinkComponent>
         <LinkComponent to="/">projects</LinkComponent>
         <LinkComponent to="/">blog</LinkComponent>
     </nav>
    )
}