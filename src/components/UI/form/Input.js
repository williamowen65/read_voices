import React from "react";
import styled from "styled-components";

export default function Input(props) {
    return <InputStyled {...props} />;
}

const InputStyled = styled.input`
    outline: none;
    padding: 7px;
`;
