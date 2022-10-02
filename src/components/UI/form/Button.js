import React from "react";
import styled from "styled-components";

export default function Button(props) {
    return (
        <ButtonStyled {...props}>
            {props.children}
        </ButtonStyled>
    );
}

const ButtonStyled = styled.button`
    cursor: pointer;
    margin-right: 10px;
    font-weight: bolder;
`;
