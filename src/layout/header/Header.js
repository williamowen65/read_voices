import React from "react";
import styled from "styled-components";
import "./styles/index.css";
import "../styles/index.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
    const loggedIn = useSelector((state) => {
        // console.log(state.app.loggedIn);
        return state.app.loggedIn;
    });

    console.log(loggedIn);

    const navigate = useNavigate();
    return (
        <HeaderStyled>
            <div>
                <h1
                    className='logo'
                    onClick={() => navigate("/")}
                >
                    Read Voices
                </h1>
                <p>
                    A brief description of the
                    page
                </p>
            </div>
            <div>
                <p>
                    Auth Status:{" "}
                    {loggedIn.toString()}
                </p>
            </div>
        </HeaderStyled>
    );
}

const HeaderStyled = styled.header``;
