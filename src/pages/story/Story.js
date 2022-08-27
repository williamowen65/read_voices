import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

export default function Story() {
    const { title } = useParams();
    // alert("hi");
    return (
        <StoryStyled>Story {title}</StoryStyled>
    );
}

const StoryStyled = styled.div``;
