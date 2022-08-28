import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "../../layout/Container";
import { useRef } from "react";

export default function Story() {
    const navigate = useNavigate();
    const { slug } = useParams();
    const story = useSelector(
        (state) => state.stories.stories
    ).filter((el) => el.meta.slug === slug)[0];

    const { loggedIn, isEditing } = useSelector(
        (state) => state.app
    );

    if (story) {
        // console.log(story);
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
            <h2>${story.title}</h2>
            <p>${"CONTENT"}</p>
            `;
        }

        useEffect(() => {
            if (document.querySelector("#app")) {
                document.querySelector(
                    ".mainContainer"
                ).innerHTML = htmlStory(story);
            }
            if (isEditing) {
                var markupStr = htmlStory(story);
                $(".mainContainer").summernote(
                    "code",
                    markupStr
                );
            }
        }, [
            document.html,
            location.pathname,
            isEditing,
        ]);

        return (
            <StoryStyled>
                <Container
                    maxWidth={1400}
                    className={"mainContainer"}
                ></Container>
            </StoryStyled>
        );
    }

    return (
        <p>What you seek is not on this page</p>
    );
}

const StoryStyled = styled.div`
    margin: 20px 0;
`;
