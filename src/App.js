import React from "react";
import styled from "styled-components";
import "./styles/index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import Container from "./layout/Container";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA_NMBST5Q_5SLS-izC58IBfiRsz_j7VI0",
    authDomain: "read-voices.firebaseapp.com",
    projectId: "read-voices",
    storageBucket: "read-voices.appspot.com",
    messagingSenderId: "107703471916",
    appId: "1:107703471916:web:5450d11f846eec9f482689",
    measurementId: "G-CRERD6VBT9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const AppRoutes = () => (
    <Routes>
        <Route path='/' element={<Home />} />
    </Routes>
);

export default function App() {
    return (
        <AppStyled>
            <Container
                maxWidth={900}
                className={"outerContainer"}
            >
                <Header />
            </Container>
            <Container
                maxWidth={1400}
                className={"mainContainer"}
            >
                <AppRoutes />
            </Container>
            <Container maxWidth={900}>
                <Footer />
            </Container>
        </AppStyled>
    );
}

const AppStyled = styled.header`
    color: black;
`;
