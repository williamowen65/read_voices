import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Container from "../../layout/Container";
import "./styles/index.css";
import EditContainer from "../../layout/EditContainer";
import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/form/Button";

export default function Home() {
    const { stories } = useSelector(
        (state) => state.stories
    );

    const navigate = useNavigate();

    console.log(stories);

    return (
        <HomeStyled id='home'>
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
                                    <li>
                                        <div className='item'>
                                            <p>
                                                <header>
                                                    <h2>
                                                        {
                                                            el.title
                                                        }
                                                    </h2>
                                                    <p>
                                                        {
                                                            el
                                                                .meta
                                                                .datePublished
                                                        }
                                                    </p>
                                                    <div className='imageContainer'>
                                                        <img
                                                            src='https://flxt.tmsimg.com/assets/p19989_p_v10_aa.jpg'
                                                            alt=''
                                                            width='100px'
                                                        />
                                                    </div>
                                                </header>

                                                {
                                                    el.description
                                                }
                                            </p>
                                            <div className='stageRight'>
                                                <div className='description'></div>
                                                <Button
                                                    onClick={() =>
                                                        navigate(
                                                            `/story/${el.meta.slug}`
                                                        )
                                                    }
                                                >
                                                    READ
                                                </Button>
                                            </div>
                                        </div>
                                    </li>
                                </EditContainer>
                            </Container>
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
