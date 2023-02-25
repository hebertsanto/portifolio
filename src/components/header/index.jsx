import React from "react";
import { Logo } from "../logo";
import { HeaderStyle } from "./style";
import { Nav } from "../nav";

export const Header = () => {
    return(
        <HeaderStyle>
            <Logo>
                portifolio
            </Logo>
             <Nav />
        </HeaderStyle>
    )
}