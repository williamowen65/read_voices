import React from "react";
import styled from "styled-components";
import "./styles/index.css";

export default function Story({
    title = "Title",
    description = "Descriptive Text",
    releaseDate = "Release Date",
}) {
    return (
        <StoryStyled>
            <h2>{title}</h2>
            <p>{description}</p>
            <span>{releaseDate}</span>
        </StoryStyled>
    );
}

const StoryStyled = styled.div``;
