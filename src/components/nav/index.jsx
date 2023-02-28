import React from "react"
import { LinkComponent } from "../Link"
import { Navigation } from "./style"

export const Nav = () => {
    return (
        <Navigation>
            <LinkComponent to="/">
                home
            </LinkComponent>
            <LinkComponent to="/about">
                about
            </LinkComponent>
            <LinkComponent to="/contact">
                contact
            </LinkComponent>
            <LinkComponent to="/contact">
                front end
            </LinkComponent>
            <LinkComponent to="/contact">
                back end
            </LinkComponent>
        </Navigation>
    )
}