import {
    Projects,
    Title,
    Project,
    SocialMedia,
    LinkProjeCtontainer
} from './style'
import { Link } from 'react-router-dom'
import {
    BsWhatsapp,
    BsInstagram,
    BsGithub
} from 'react-icons/bs'


export const MainProjects = () => {

    return (
        <Projects>
            <Project>
                <Title>principais projetos</Title>
                <LinkProjeCtontainer>
                    <Link to="/">
                        gerenciamentos de rh
                    </Link>
                    <Link to="/">
                        autenticação de usuários
                    </Link>
                </LinkProjeCtontainer>
            </Project>
            <SocialMedia>
                <h2>redes socias</h2>
                <Link to="/"><BsInstagram /></Link>
                <Link to="https://web.whatsapp.com//"><BsWhatsapp /></Link>
                <Link to="https://github.com/hebertsanto?tab=repositories"><BsGithub /></Link>
            </SocialMedia>
        </Projects>

    )
}