import { Link } from "react-router-dom"

export const LinkComponent = ({to, children}) => {
    return <Link to={to}>{children}</Link>
}