import React from "react";
import styled from "styled-components";
import "./styles/index.css";
import "../styles/index.css";

export default function Header() {
    return (
        <HeaderStyled>
            <h1 className='logo'>Read Voices</h1>
            <p>A brief description of the page</p>
        </HeaderStyled>
    );
}

const HeaderStyled = styled.header``;
