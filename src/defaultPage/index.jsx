import { Outlet } from "react-router-dom";
import {Header} from '../components/header';
import {Footer} from '../components/footer';
import {Container} from '@mui/material';

export const DefaultPage = () => {
    return (
        <Container maxWidth="sm">
            <Header/>
            <Outlet />
            <Footer />
        </Container>

    )
}