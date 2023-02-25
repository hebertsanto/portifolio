import { LinkStyled } from "./style"
export const LinkComponent = ({to, children}) => {
    return <LinkStyled to={to}>{children}</LinkStyled>
}