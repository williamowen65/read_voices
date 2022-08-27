import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        loggedIn: false,
        isEditing: false,
    },
    reducers: {
        setLoggedIn: (state, action) => {
            console.log(state, action);
            state.loggedIn = action.payload;
        },
        setIsEditing: (state, action) => {
            state.isEditing = !state.isEditing;
        },
    },
});

export const setLoggedIn =
    appSlice.actions.setLoggedIn;
export const setIsEditing =
    appSlice.actions.setIsEditing;
export default appSlice.reducer;
