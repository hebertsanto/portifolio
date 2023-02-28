import React from "react";
import { Container, SubContainer, Title } from "./style";
import { MainProjects } from "../mainProjects";
import { LatestBlog } from "../latestBlog";

export const Home = () => {
    return (
        <Container>
            <MainProjects />
            <SubContainer>
                <Title>Bem vindos ao Meu portifolio</Title>
            </SubContainer>
            <LatestBlog />
        </Container>
    )
}