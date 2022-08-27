import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Story() {
    const { stories } = useSelector(
        (state) => state.stories
    );
    const { slug } = useParams();

    const [thisStory, setThisStory] =
        useState(null);

    useEffect(() => {
        if (stories) {
            const story = stories.filter(
                (el) => el.meta.slug === slug
            );
            if (story) {
                setThisStory(story[0]);
            }
        }
    }, [stories, slug]);

    if (thisStory) {
        console.log(thisStory);
        return (
            <StoryStyled>
                <h2>{thisStory.title}</h2>
            </StoryStyled>
        );
    }
    return (
        <p>What you seek is not on this page</p>
    );
}

const StoryStyled = styled.div``;
