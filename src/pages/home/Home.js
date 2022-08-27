import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Container from "../../layout/Container";
import "./styles/index.css";

export default function Home() {
    const { stories } = useSelector(
        (state) => state.stories
    );

    console.log(stories);

    return (
        <HomeStyled>
            <ul>
                {stories.map((el, i) => (
                    <span key={i}>
                        <Container
                            maxWidth={1400}
                            className={
                                "mainContainer"
                            }
                        >
                            <li>
                                <h2>
                                    {el.title}
                                </h2>
                                <p>
                                    {
                                        el.description
                                    }
                                </p>
                            </li>
                        </Container>
                        <hr></hr>
                    </span>
                ))}
            </ul>
        </HomeStyled>
    );
}

const HomeStyled = styled.div`
    ul {
        padding: 0;
    }
`;
