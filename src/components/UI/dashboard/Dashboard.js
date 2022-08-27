import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Button from "../form/Button";
import "./styles/index.css";
import { useDispatch } from "react-redux";
import { setIsEditing } from "../../../context/appReducer";
import gsap from "gsap";

export default function Dashboard() {
    const isEditing = useSelector(
        (state) => state.app.isEditing
    );
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(setIsEditing());
        const el =
            document.querySelector("#dashboard");
        gsap.to(el, {
            width: isEditing ? 300 : 0,
        });

        document
            .querySelector("#website")
            .setAttribute(
                "contentEditable",
                isEditing ? "false" : "true"
            );
    };
    return (
        <div>
            <DashboardStyled id='dashboard'>
                Dashboard
            </DashboardStyled>
            <Button onClick={handleClick}>
                {isEditing ? "Done" : "Edit"}
            </Button>
        </div>
    );
}

const DashboardStyled = styled.div``;
