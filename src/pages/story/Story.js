import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Story() {
    const { stories } = useSelector(
        (state) => state.stories
    );
    const { title } = useParams();

    const [thisStory, setThisStory] =
        useState(null);

    useEffect(() => {
        if (stories) {
            const story = stories.filter(
                (el) => el.title === title
            );
            console.log(story);
            // if (story) {
            //     setThisStory(story);
            // } else {
            //     alert("nope");
            // }
        }
    }, [stories]);

    if (thisStory) {
        return (
            <StoryStyled>
                {thisStory.title}
            </StoryStyled>
        );
    }
    return (
        <p>What you seek is not on this page</p>
    );
}

const StoryStyled = styled.div``;
