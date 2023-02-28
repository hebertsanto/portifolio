import styled from "styled-components";
import { Link } from "react-router-dom";

export const LinkStyled = styled(Link)`
   color: rgba(220, 220, 220, 0.890);
   text-decoration:none;
   margin: 10px;
   font-size:1rem;
   letter-spacing: 2px;
   &:hover {
       color: #fff;
   }
`