import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Button from "../form/Button";
import "./styles/index.css";
import { useDispatch } from "react-redux";
import { Upload } from "upload-js";

import {
    setIsEditing,
    setLoggedIn,
    setVerboseLog,
} from "../../../context/appReducer";
import gsap from "gsap";
import {
    useNavigate,
    useLocation,
    useParams,
} from "react-router-dom";
import Status from "./util/statusEnum";
import { toggleStatus } from "../../../context/storiesReducer";

import { TbPlus } from "react-icons/tb";
import { BsFileImage } from "react-icons/bs";
import { IoIosLogOut } from "react-icons/io";
import { BsFilter } from "react-icons/bs";
import { FiAlertTriangle } from "react-icons/fi";
import FileUploadButton from "../../UX/FileUploadButton";
import VerboseLogger from "../../UX/verboseLogger/VerboseLogger";

const width = 300;
export default function Dashboard() {
    const location = useLocation();
    const navigate = useNavigate();
    const { stories, activeSlug, dataInSync } =
        useSelector((state) => state.stories);
    const { isEditing, loggedIn } = useSelector(
        (state) => state.app
    );
    const dispatch = useDispatch();
    const animate = false;

    const story = useSelector(
        (state) => state.stories.stories
    ).filter(
        (el) => el.meta.slug === activeSlug
    )[0];

    const handleEditClick = () => {
        // alert("edit");
        dispatch(setIsEditing(!isEditing));
    };

    // const story =

    const handleStatusClick = (e, el) => {
        e.stopPropagation();
        dispatch(toggleStatus(el.meta.slug));
        if (
            ["private", "public"].includes(
                el.meta.status
            )
        )
            dispatch(
                setVerboseLog({
                    title:
                        "toggled status of " +
                        el.title,
                    type:
                        el.meta.status == "public"
                            ? "private"
                            : "public",
                })
            );
    };

    const handleImgClick = (e, slug) => {
        const input = document.querySelector(
            "input[type=file]"
        );
        input.click();
    };

    const upload = new Upload({ apiKey: "free" });
    const handleFileUpload = (e) => {
        alert(e.target.value);
    };

    return (
        <>
            <FileUploadButton />
            <MetaDashboardStyled>
                {/* <div className='deployEdits'>
                    Attention: You are viewing
                    local edited content. Click
                    here to deploy changes.
                </div> */}
                {!dataInSync && (
                    <VerboseLogger
                        log={{
                            description:
                                "You are viewing local edited content. Click here to deploy changes.",
                        }}
                        classN='deployContainer'
                    >
                        <FiAlertTriangle />
                    </VerboseLogger>
                )}
                <div
                    id='dashboard'
                    className='dashboardContainer'
                >
                    <header>
                        <h3>Dashboard</h3>
                        <BsFilter
                            size={30}
                            className='filter'
                        />
                        <TbPlus
                            size={30}
                            className='add'
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
                                className={
                                    activeSlug ===
                                    el.meta.slug
                                        ? "active"
                                        : null
                                }
                            >
                                <h4 className='title'>
                                    {el.title}
                                </h4>
                                <BsFileImage
                                    size={30}
                                    style={{
                                        display:
                                            "inline",
                                    }}
                                    onClick={(
                                        e
                                    ) => {
                                        if (
                                            activeSlug ===
                                            el
                                                .meta
                                                .slug
                                        ) {
                                            handleImgClick(
                                                e,
                                                el
                                                    .meta
                                                    .slug
                                            );
                                        }
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
                    <>
                        <Button
                            className='dashboard'
                            onClick={
                                handleEditClick
                            }
                            id='edit'
                        >
                            {isEditing
                                ? "Done"
                                : "Edit"}
                        </Button>
                        {story?.meta.status ==
                            "draft" && (
                            <Button className='dashboard publish'>
                                Publish
                            </Button>
                        )}
                        {/* {console.log(story)} */}
                    </>
                )}

                {/* {loggedIn &&
                    story?.meta?.status ==
                        "draft" && ( */}
                {/* )} */}
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
                        navigate("/");
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
                background-color: blue;
            `;
            break;
        case "private":
            DotStyled = styled.div`
                background-color: green;
            `;
            break;
        case "draft":
            DotStyled = styled.div`
                background-color: red;
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
