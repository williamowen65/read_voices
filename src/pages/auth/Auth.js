import React from "react";
import styled from "styled-components";
import Button from "../../components/UI/form/Button";
import Input from "../../components/UI/form/Input";
import "./styles/index.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setLoggedIn } from "../../context/appReducer";

export default function Auth() {
    const dispatch = useDispatch();

    const nav = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("skipping real auth");

        dispatch(setLoggedIn(true));
        nav("/");
    };

    return (
        <AuthStyled>
            <form onSubmit={handleSubmit}>
                <h2>Sign In</h2>
                <Input placeholder='username' />
                <Input
                    placeholder='password'
                    type='password'
                />
                <Button>Log in</Button>
            </form>
        </AuthStyled>
    );
}

const AuthStyled = styled.div``;
