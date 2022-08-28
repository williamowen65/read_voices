import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Button from "../form/Button";
import "./styles/index.css";
import { useDispatch } from "react-redux";
import {
    setIsEditing,
    setLoggedIn,
} from "../../../context/appReducer";
import gsap from "gsap";
import {
    useNavigate,
    useLocation,
} from "react-router-dom";
import Status from "./util/statusEnum";
import { toggleStatus } from "../../../context/storiesReducer";

import { TbPlus } from "react-icons/tb";
import { BsFileImage } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";

const width = 300;
export default function Dashboard() {
    const location = useLocation();
    const navigate = useNavigate();
    const { stories } = useSelector(
        (state) => state.stories
    );
    const { isEditing, loggedIn } = useSelector(
        (state) => state.app
    );
    const dispatch = useDispatch();
    const animate = false;

    const handleClick = () => {
        dispatch(setIsEditing());
        if (animate) {
            const el =
                document.querySelector(
                    "#dashboard"
                );
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
            ).to(
                btn,
                {
                    left: isEditing ? width : 0,
                    ease: "none",
                },
                "="
            );
        }
    };

    const handleStatusClick = (e, el) => {
        e.stopPropagation();
        dispatch(toggleStatus(el.meta.slug));
    };

    return (
        <>
            <MetaDashboardStyled>
                <div
                    id='dashboard'
                    className='dashboardContainer'
                >
                    <header>
                        <h3>Dashboard</h3>
                        <TbPlus
                            size={30}
                            onClick={() => {
                                navigate(
                                    "/create"
                                );
                            }}
                        />
                    </header>
                    <ul>
                        {stories.map((el, i) => (
                            <li
                                key={i}
                                data-slug={
                                    el.meta.slug
                                }
                                onClick={() => {
                                    navigate(
                                        `/story/${el.meta.slug}`
                                    );
                                    if (isEditing)
                                        dispatch(
                                            setIsEditing(
                                                false
                                            )
                                        );
                                }}
                            >
                                <h4>
                                    {el.title}
                                </h4>
                                <BsFileImage
                                    size={30}
                                    style={{
                                        display:
                                            "inline",
                                    }}
                                />
                                <div
                                    className='statusContainer'
                                    onClick={(
                                        e
                                    ) =>
                                        handleStatusClick(
                                            e,
                                            el
                                        )
                                    }
                                >
                                    <p>
                                        {
                                            el
                                                .meta
                                                .status
                                        }
                                    </p>
                                    <Dot
                                        story={el}
                                    />
                                </div>
                                {/* <p>
                                {el.meta.datePublished.toString()}
                            </p> */}
                            </li>
                        ))}
                    </ul>
                </div>
                {/* <DashboardStyled className='dashboardContainer'> */}
                {location.pathname.includes(
                    "/story/"
                ) && (
                    <Button
                        className='dashboard'
                        onClick={handleClick}
                        id='edit'
                    >
                        {isEditing
                            ? "Done"
                            : "Edit"}
                    </Button>
                )}
                {/* {console.log(location.pathname)} */}
                {/* </DashboardStyled> */}
            </MetaDashboardStyled>
            {loggedIn && (
                <IoIosLogOut
                    size={30}
                    className='logout'
                    onClick={() => {
                        dispatch(
                            setLoggedIn(false)
                        );
                        isEditing &&
                            dispatch(
                                setIsEditing(
                                    false
                                )
                            );
                    }}
                />
            )}
        </>
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
    // console.log(status, Status[status]);
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
