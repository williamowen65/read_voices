import React from "react";
import styled from "styled-components";

export default function Input(props) {
    return <InputStyled {...props} au />;
}

const InputStyled = styled.input`
    outline: none;
    padding: 7px;
`;
