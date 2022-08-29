import React, { useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setIsEditing } from "../../context/appReducer";
import { setActiveSlug } from "../../context/storiesReducer";
import Container from "../../layout/Container";
import { useRef } from "react";
import "./styles/index.css";
import Button from "../../components/UI/form/Button";

export default function Story() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { slug } = useParams();
    dispatch(setActiveSlug(slug));
    const story = useSelector(
        (state) => state.stories.stories
    ).filter((el) => el.meta.slug === slug)[0];

    const { loggedIn, isEditing } = useSelector(
        (state) => state.app
    );

    if (story) {
        // console.log(story);
        if (
            (!loggedIn &&
                story.meta.status ===
                    "private") ||
            (!loggedIn &&
                story.meta.status === "draft")
        ) {
            return (
                <p>
                    What you seek is not on this
                    page
                </p>
            );
        }

        function htmlStory(story) {
            return `
           
            `;
        }

        useEffect(() => {
            //     let target;
            if (document.querySelector("#app")) {
                //         document.querySelector(
                //             ".mainContainer"
                //         ).innerHTML = htmlStory(story);
                //     }
                if (isEditing) {
                    var markupStr = $(
                        ".mainContainer"
                    ).summernote("code");
                    /**
                     * CREATE FN to process html
                     *  forward that data to mongoDB or firebase, and upon sucdess
                     *  update title & update html in redux
                     *
                     *
                     */
                    $(
                        ".mainContainer"
                    ).summernote(
                        "code",
                        markupStr
                    );
                } else {
                    // var markupStr = $(
                    //     ".mainContainer"
                    // ).summernote("code");
                    // console.log(markupStr);
                    const htmlStr = $(
                        ".note-editable"
                    ).summernote("code");
                    console.log(htmlStr);
                    $(
                        ".note-editor.note-frame"
                    ).remove();
                }
            }
        }, [
            document.html,
            location.pathname,
            isEditing,
        ]);

        return (
            <div className='storyStyle'>
                <Container
                    maxWidth={1400}
                    className={"mainContainer"}
                >
                    <h2 className='title'>
                        {story.title}
                    </h2>
                    <p>
                        Lorem ipsum dolor sit amet
                        consectetur adipisicing
                        elit. Quasi accusantium
                        assumenda recusandae autem
                        distinctio quod, alias
                        nobis commodi impedit
                        corrupti fugit voluptate
                        officia sit quis odit
                        laboriosam omnis minima.
                        Unde dolore quod rem
                        accusamus dignissimos est
                        dolores. Tempora,
                        similique vel id, fuga
                        dolores labore autem ab
                        corporis necessitatibus
                        quae asperiores maxime
                        reprehenderit laboriosam,
                        expedita quisquam officiis
                        ratione totam debitis.
                        Quibusdam at doloremque
                        optio, impedit tenetur
                        expedita illo illum
                        facilis fugit! Nesciunt
                        porro corporis recusandae
                        laborum praesentium,
                        officia accusantium
                        molestias impedit delectus
                        odit assumenda nemo animi
                        fugiat repellat aliquam
                        exercitationem. Eius at
                        illo molestiae quod
                        cupiditate voluptate cum
                        minima quisquam alias.
                    </p>
                </Container>
            </div>
        );
    }

    return (
        <p>What you seek is not on this page</p>
    );
}

const StoryStyled = styled.div`
    /* margin: 20px 0; */
`;
