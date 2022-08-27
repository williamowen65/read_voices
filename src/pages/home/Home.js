import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Container from "../../layout/Container";
import "./styles/index.css";
import EditContainer from "../../layout/EditContainer";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const { stories } = useSelector(
        (state) => state.stories
    );

    const navigate = useNavigate();

    console.log(stories);

    return (
        <HomeStyled>
            <ul>
                {stories
                    .filter(
                        (el) =>
                            ![
                                "private",
                                "draft",
                            ].includes(
                                el.meta.status
                            )
                    )
                    .map((el, i) => (
                        <span key={i}>
                            <Container
                                maxWidth={1400}
                                className={
                                    "mainContainer"
                                }
                            >
                                <EditContainer>
                                    <li
                                        onClick={() =>
                                            navigate(
                                                `/story/${el.meta.slug}`
                                            )
                                        }
                                    >
                                        <div className='item'>
                                            <h2>
                                                {
                                                    el.title
                                                }
                                            </h2>
                                            <p>
                                                {
                                                    el.description
                                                }
                                            </p>
                                        </div>
                                    </li>
                                </EditContainer>
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
        hr {
            padding: 0;
            margin: 0;
        }
        padding: 0;
        margin: 0;
        li {
            display: flex;
            align-items: center;
            margin: 20px 0;
        }
    }
`;
