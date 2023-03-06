import {
    FaGithub,
    FaFacebook,
    FaTwitter,
    FaMedium
} from "react-icons/fa"
import style from './footer.module.css'
import { Link } from "react-router-dom"

export const Footer = () => {
    return (
        <footer className={style.Footer}>
            <Link to="/"><FaGithub/></Link>
            <Link to="/"><FaFacebook/></Link>
            <Link to="/"><FaTwitter/></Link>
            <Link to="/"><FaMedium/></Link>
        </footer>
    )
}