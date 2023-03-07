import { History } from "../../components/History"
import style from './about.module.css'
export const About = () => {
    return(
        <div className={style.About}>
             <h3>about</h3>
             <History />
        </div>
    )
}