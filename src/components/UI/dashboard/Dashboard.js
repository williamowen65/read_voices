import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Button from "../form/Button";
import "./styles/index.css";
import { useDispatch } from "react-redux";
import { setIsEditing } from "../../../context/appReducer";
import gsap from "gsap";
import Status from "./util/statusEnum";

export default function Dashboard() {
    const { stories } = useSelector(
        (state) => state.stories
    );
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

    const Dot = ({ story }) => {
        const status = story.meta.status;
        let DotStyled;
        console.log(status, Status[status]);
        switch (Status[status]) {
            case "public":
                DotStyled = styled.div`
                    background: blue;
                `;
                break;
            case "private":
                DotStyled = styled.div`
                    background: green;
                `;
                break;
            case "draft":
                DotStyled = styled.div`
                    background: red;
                `;
                break;
            default:
                break;
        }

        return (
            <DotStyled className='dot'></DotStyled>
        );
    };

    return (
        <div>
            <DashboardStyled id='dashboard'>
                <h3>Dashboard</h3>
                <ul>
                    {stories.map((el, i) => (
                        <li key={i}>
                            <h4>{el.title}</h4>
                            <Dot story={el} />
                            {/* <p>
                                {el.meta.datePublished.toString()}
                            </p> */}
                        </li>
                    ))}
                </ul>
            </DashboardStyled>
            <Button onClick={handleClick}>
                {isEditing ? "Done" : "Edit"}
            </Button>
        </div>
    );
}

const DashboardStyled = styled.div``;
