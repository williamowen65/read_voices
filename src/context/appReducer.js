import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState: {
        loggedIn: false,
    },
    reducers: {
        setLoggedIn: (state, action) => {
            console.log(state, action);
            state.loggedIn = action.payload;
        },
    },
});

export const setLoggedIn =
    appSlice.actions.setLoggedIn;
export default appSlice.reducer;
