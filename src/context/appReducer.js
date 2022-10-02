import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        loggedIn: true,
        isEditing: false,
        verboseLog: [],
    },
    reducers: {
        setLoggedIn: (state, action) => {
            // console.log(state, action);
            state.loggedIn = action.payload;
        },
        setIsEditing: (state, action) => {
            if (action.payload) {
                state.isEditing = action.payload;
            } else {
                state.isEditing =
                    !state.isEditing;
            }
        },
        setVerboseLog: (state, action) => {
            console.log(
                "payload ",
                action.payload,
                Array.isArray(action.payload)
            );
            if (Array.isArray(action.payload)) {
                state.verboseLog = action.payload;
            } else {
                state.verboseLog.push(
                    action.payload
                );
            }
        },
    },
});

export const setLoggedIn =
    appSlice.actions.setLoggedIn;
export const setVerboseLog =
    appSlice.actions.setVerboseLog;
export const setIsEditing =
    appSlice.actions.setIsEditing;
export default appSlice.reducer;
