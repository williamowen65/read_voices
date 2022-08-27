import React from "react";
import styled from "styled-components";
import "./styles/index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Story from "./pages/story/Story";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import Container from "./layout/Container";
import Auth from "./pages/auth/Auth";
import Dashboard from "./components/UI/dashboard/Dashboard";
import { useSelector } from "react-redux";
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
        <Route
            path='/'
            exact
            element={<Home />}
        />
        <Route
            path='/story/:title'
            element={<Story />}
        />
        <Route path='/auth' element={<Auth />} />
    </Routes>
);

export default function App() {
    const loggedIn = useSelector(
        (state) => state.app.loggedIn
    );
    return (
        <AppStyled>
            {loggedIn && <Dashboard />}
            <div id='website'>
                <Container
                    maxWidth={900}
                    className={"outerContainer"}
                >
                    <Header />
                </Container>
                <hr />

                <AppRoutes />
                <Container maxWidth={900}>
                    <Footer />
                </Container>
            </div>
        </AppStyled>
    );
}

const AppStyled = styled.header`
    color: black;
    display: flex;
    #website {
        flex-grow: 1;
    }
`;
