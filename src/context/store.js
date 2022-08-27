import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./appReducer";
import storiesReducer from "./storiesReducer";

export const store = configureStore({
    reducer: {
        app: appReducer,
        stories: storiesReducer,
    },
});
