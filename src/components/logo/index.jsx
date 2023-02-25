import React from "react";
import { LogoStyle } from "./style";
export const Logo = ({children}) => {
    return <LogoStyle><h2>{children}</h2></LogoStyle>
}