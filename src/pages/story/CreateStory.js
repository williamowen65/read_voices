import React, { useEffect } from "react";
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
    useEffect(() => {
        // $(".summernote").summernote();
    }, []);
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
                />
                <div className='summernote'></div>
                <Button>Publish</Button>
                <Button>Save as Draft</Button>
            </Container>
        </div>
    );
}
