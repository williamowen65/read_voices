import React, {
    useEffect,
    useState,
} from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Button from "../../components/UI/form/Button";
import Input from "../../components/UI/form/Input";
import Container from "../../layout/Container";
import PageNotFound from "../404";
import "./styles/index.css";

export default function CreateStory(props) {
    const { loggedIn } = useSelector(
        (state) => state.app
    );
    const [isOffline, setIsOffline] =
        useState(false);
    const [title, setTitle] = useState();
    const [description, setDescription] =
        useState();

    const [buttons, setButtons] = useState([]);

    useEffect(() => {
        if (typeof $ == "function") {
            $(".summernote").summernote();
        } else {
            setIsOffline(true);
        }
    }, []);

    useEffect(() => {
        if (title || description) {
            document.querySelector(
                `#title`
            ).value = title;
            document.querySelector(
                `#summernote`
            ).value = description;
        }
    }, [title, description]);

    if (!loggedIn) {
        return <PageNotFound />;
    }
    return (
        <div className='storyStyle'>
            <Container
                maxWidth={1400}
                className={"mainContainer"}
            >
                <Input
                    placeholder='Title'
                    autoComplete='off'
                    type='text'
                    id='title'
                />
                <textarea
                    className='summernote'
                    id='summernote'
                ></textarea>
                <div>
                    <header>Add Links</header>
                    <div className='links'>
                        <div className='addLinkContainer'>
                            <input
                                type='text'
                                name='text'
                                id='text'
                                placeholder='text'
                            />
                            <input
                                type='text'
                                name='link'
                                id='link'
                                placeholder='link'
                            />
                        </div>
                        <div
                            onClick={(e) => {
                                const text =
                                    document.querySelector(
                                        "input#text"
                                    );
                                const link =
                                    document.querySelector(
                                        "input#link"
                                    );
                                setDescription(
                                    document.querySelector(
                                        `#summernote`
                                    ).value
                                );
                                setTitle(
                                    document.querySelector(
                                        `#title`
                                    ).value
                                );
                                setButtons([
                                    ...buttons,
                                    {
                                        text,
                                        link,
                                    },
                                ]);
                            }}
                        >
                            <div className='add'>
                                +
                            </div>
                        </div>
                        <div className='newButtons'></div>
                    </div>
                </div>

                <Button
                    onClick={() => {
                        alert(`
                            ${buttons[0]}
                            ${title}
                            ${
                                document.querySelector(
                                    `#summernote`
                                ).value
                            }
                        `);
                    }}
                >
                    Publish
                </Button>
                <Button>Save as Draft</Button>
            </Container>
        </div>
    );
}
