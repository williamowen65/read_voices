import React, { useEffect } from "react";
import {
    useDispatch,
    useSelector,
} from "react-redux";
import styled from "styled-components";
import Container from "../../layout/Container";
import "./styles/index.css";
import EditContainer from "../../layout/EditContainer";
import { useNavigate } from "react-router-dom";
import Button from "../../components/UI/form/Button";
import { setActiveSlug } from "../../context/storiesReducer";

export default function Home() {
    const { stories } = useSelector(
        (state) => state.stories
    );
    const dispatch = useDispatch();

    const navigate = useNavigate();

    console.log(stories);
    useEffect(() => {
        dispatch(setActiveSlug(""));
    }, []);

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
                                                    <div>
                                                        <div className='imageContainer'>
                                                            <img
                                                                src='https://flxt.tmsimg.com/assets/p19989_p_v10_aa.jpg'
                                                                alt=''
                                                                width='100px'
                                                            />
                                                        </div>
                                                        <h2>
                                                            {
                                                                el.title
                                                            }
                                                        </h2>{" "}
                                                        <br></br>
                                                        <p>
                                                            {
                                                                el
                                                                    .meta
                                                                    .datePublished
                                                            }
                                                        </p>
                                                    </div>
                                                </header>

                                                {
                                                    el.description
                                                }
                                            </p>
                                        </div>
                                        <div className='buttons'>
                                            {el
                                                .meta
                                                .buttons
                                                .length ? (
                                                el.meta.buttons.map(
                                                    (
                                                        el,
                                                        i
                                                    ) => (
                                                        <Button>
                                                            <a
                                                                target='_blank'
                                                                href={
                                                                    el.link
                                                                }
                                                            >
                                                                {
                                                                    el.text
                                                                }
                                                            </a>
                                                        </Button>
                                                    )
                                                )
                                            ) : (
                                                <Button>
                                                    No
                                                    Links
                                                    shared
                                                </Button>
                                            )}
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
