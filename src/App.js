import React from "react";
import styled from "styled-components";
import "./styles/index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
    Route,
    Routes,
    useParams,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Story from "./pages/story/Story";
import Header from "./layout/header/Header";
import Footer from "./layout/footer/Footer";
import Container from "./layout/Container";
import Auth from "./pages/auth/Auth";
import Dashboard from "./components/UI/dashboard/Dashboard";
import {
    useSelector,
    useDispatch,
} from "react-redux";
import { setSlugs } from "./context/storiesReducer";
import CreateStory from "./pages/story/CreateStory";
import About from "./pages/About";
import Donate from "./pages/Donate";
// import Story from "./pages/story/Story";
import PageNotFound from "./pages/404";
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
            path='/story/:slug'
            element={<Story />}
        />
        <Route
            path='/create'
            element={<CreateStory />}
        />
        <Route path='/auth' element={<Auth />} />
        <Route
            path='/about'
            element={<About />}
        />
        <Route
            path='/donate'
            element={<Donate />}
        />
        <Route
            path='*'
            element={<PageNotFound />}
        />
    </Routes>
);

export default function App() {
    const loggedIn = useSelector(
        (state) => state.app.loggedIn
    );

    const dispatch = useDispatch();
    dispatch(setSlugs());
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

                <AppRoutes />
                <Container
                    maxWidth={900}
                    className='footerContainer'
                >
                    <Footer />
                </Container>
            </div>
        </AppStyled>
    );
}

const AppStyled = styled.div`
    color: black;
    display: flex;
    #website {
        flex-grow: 1;
        /* position: relative; */
        hr {
            position: absolute;
            width: 100%;
        }
        .footerContainer {
            margin-top: auto;
        }
    }
`;
