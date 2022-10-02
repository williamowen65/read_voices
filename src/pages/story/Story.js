import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsEditing } from "../../context/appReducer";
import { setActiveSlug } from "../../context/storiesReducer";
import Container from "../../layout/Container";
import { useRef } from "react";
import "./styles/index.css";
import Button from "../../components/UI/form/Button";

export default function Story() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { slug } = useParams();
    dispatch(setActiveSlug(slug));
    const story = useSelector(
        (state) => state.stories.stories
    ).filter((el) => el.meta.slug === slug)[0];

    const { loggedIn, isEditing } = useSelector(
        (state) => state.app
    );

    if (story) {
        console.log(
            story,
            loggedIn,
            story.meta.status
        );
        if (
            (!loggedIn &&
                story.meta.status ===
                    "private") ||
            (!loggedIn &&
                story.meta.status === "draft")
        ) {
            return (
                <p>
                    What you seek is not on this
                    page
                </p>
            );
        }

        function htmlStory(story) {
            return `
           
            `;
        }

        useEffect(() => {
            //     let target;

            if (document.querySelector("#app")) {
                //         document.querySelector(
                //             ".mainContainer"
                //         ).innerHTML = htmlStory(story);
                //     }
                if (typeof $ == "function") {
                    if (isEditing) {
                        var markupStr = $(
                            ".mainContainer"
                        ).summernote("code");
                        /**
                         * CREATE FN to process html
                         *  forward that data to mongoDB or firebase, and upon sucdess
                         *  update title & update html in redux
                         *
                         *
                         */
                        $(
                            ".mainContainer"
                        ).summernote(
                            "code",
                            markupStr
                        );
                    } else {
                        // var markupStr = $(
                        //     ".mainContainer"
                        // ).summernote("code");
                        // console.log(markupStr);
                        const htmlStr = $(
                            ".note-editable"
                        ).summernote("code");
                        console.log(htmlStr);
                        $(
                            ".note-editor.note-frame"
                        ).remove();
                    }
                } else {
                    if (isEditing) {
                        const container =
                            document.querySelector(
                                ".mainContainer"
                            );
                        const textNode =
                            container.querySelector(
                                "p"
                            );
                        const text =
                            textNode.innerText;
                        textNode.remove();
                        const textarea =
                            document.createElement(
                                "textarea"
                            );
                        textarea.innerText = text;

                        container.insertAdjacentElement(
                            "beforeend",
                            textarea
                        );

                        const titleNode =
                            container.querySelector(
                                "h2"
                            );
                        const title =
                            titleNode.innerText;
                        titleNode.remove();

                        const input =
                            document.createElement(
                                "input"
                            );
                        input.value = title;
                        input.type = "text";

                        container.insertAdjacentElement(
                            "afterbegin",
                            input
                        );
                    }
                }
            }
        }, [
            document.html,
            location.pathname,
            isEditing,
        ]);

        return (
            <div className='storyStyle display'>
                <Container
                    maxWidth={1400}
                    className={"mainContainer"}
                >
                    <div className='content'>
                        <div className='item'>
                            <p>
                                <header>
                                    <h2 className='title'>
                                        {
                                            story.title
                                        }
                                    </h2>
                                    <p>
                                        {
                                            story
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
                                <p>
                                    {
                                        story.description
                                    }
                                </p>
                            </p>
                            <div className='buttons'>
                                {story.meta
                                    .buttons
                                    .length ? (
                                    story.meta.buttons.map(
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
                                        No Links
                                        shared
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <p>What you seek is not on this page</p>
    );
}

const StoryStyled = styled.div`
    /* margin: 20px 0; */
`;
