import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Button from "../form/Button";
import "./styles/index.css";
import { useDispatch } from "react-redux";
import { setIsEditing } from "../../../context/appReducer";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import Status from "./util/statusEnum";

const width = 300;
export default function Dashboard() {
    const navigate = useNavigate();
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
        const btn =
            document.querySelector("#edit");

        const tl = gsap.timeline({
            defaults: { duration: 1 },
        });

        tl.to(
            "#dashboard",
            {
                width: isEditing ? 300 : 0,
                ease: "none",
            },
            "="
        );
        // .to(
        //     btn,
        //     {
        //         left: isEditing ? width : 0,
        //         ease: "none",
        //     },
        //     "="
        // );

        document
            .querySelector("#website")
            .setAttribute(
                "contentEditable",
                isEditing ? "false" : "true"
            );
    };

    return (
        <MetaDashboardStyled>
            <div
                id='dashboard'
                className='dashboardContainer'
            >
                <h3>Dashboard</h3>
                <ul>
                    {stories.map((el, i) => (
                        <li
                            key={i}
                            data-slug={
                                el.meta.slug
                            }
                            onClick={() =>
                                navigate(
                                    `/story/${el.meta.slug}`
                                )
                            }
                        >
                            <h4>{el.title}</h4>
                            <div className='statusContainer'>
                                <p>
                                    {
                                        el.meta
                                            .status
                                    }
                                </p>
                                <Dot story={el} />
                            </div>
                            {/* <p>
                                {el.meta.datePublished.toString()}
                            </p> */}
                        </li>
                    ))}
                </ul>
            </div>
            {/* <DashboardStyled className='dashboardContainer'> */}
            <Button
                className='dashboard'
                onClick={handleClick}
                id='edit'
            >
                {isEditing ? "Done" : "Edit"}
            </Button>
            {/* </DashboardStyled> */}
        </MetaDashboardStyled>
    );
}

const MetaDashboardStyled = styled.div`
    white-space: nowrap;
    display: flex;
    align-items: flex-start;
    position: relative;
    #dashboard {
        width: ${width}px;
        position: relative;
    }
    button {
        /* left: ${width}px; */
    }
`;

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
        <>
            <DotStyled className='dot'></DotStyled>
        </>
    );
};
