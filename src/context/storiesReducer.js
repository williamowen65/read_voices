import { createSlice } from "@reduxjs/toolkit";

const storiesSlice = createSlice({
    name: "stories",
    initialState: {
        stories: [
            {
                title: "some title",
                description: "dfsdfsdf",
                datePublished: new Date(),
            },
            {
                title: "some other title",
                description: "dfsdfsdf",
                datePublished: new Date(),
            },
        ],
    },
    reducers: {
        setStories: (state, action) => {
            state.stories = action.payload;
        },
    },
});

export const setStories =
    storiesSlice.actions.setStories;
export default storiesSlice.reducer;
