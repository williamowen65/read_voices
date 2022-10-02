import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import "./styles/index.css";

export default function VerboseLogger() {
    const { verboseLog } = useSelector(
        (state) => state.app
    );

    if (verboseLog.title) {
        return (
            <VerboseLoggerStyled id='verboseLogger'>
                <h3>{verboseLog.title}</h3>
                <p>{verboseLog.description}</p>
                <span>{verboseLog.type}</span>
            </VerboseLoggerStyled>
        );
    } else {
        return null;
    }
}

const VerboseLoggerStyled = styled.div``;
