import { Outlet } from "react-router-dom";
import { Footer } from "../components/footer";
import { Header } from "../components/header";

export const DefaultPage = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>

    )
}