import React from "react";
import { Link } from "react-router-dom";

export const Logo = ({children, to}) => {
    return <Link to={to}><h2>{children}</h2></Link>
}