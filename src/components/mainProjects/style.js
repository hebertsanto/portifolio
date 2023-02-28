import styled from "styled-components";

export const Projects = styled.div`
    width: 20vw;
    border: 1px solid rgba(220, 220,220);
    border-bottom: 1px solid #fff;
    height: 100vh;
    background-color: #fff;
`
export const Project = styled.div`
  height:90vh;
  display: block;
  padding: 10px;

`
export const SocialMedia = styled.div`
border-top: 1px solid rgba(220, 220,220, 999); 
   h2{
     font-size: 1rem;
     padding-left: 10px;
   }
   a{
    text-decoration: none;
    color: black;
    font-size: 1.3rem;
    display: inline-block   ;
    padding:15px 10px;
   }
`
export const Title = styled.h2`
   font-size: 1.3rem;

`
export const LinkProjeCtontainer = styled.div`
    padding-top: 15px;

    a{
        font-size: 1.1rem;
        display:block;
        padding-top:7px;
        color: rgba(19, 19, 19, 0.92);
        text-decoration: none;
        &:hover{
            color: black;
            text-decoration: underline;
        }
    }
    
`