import { createSlice } from "@reduxjs/toolkit";

const storiesSlice = createSlice({
    name: "stories",
    initialState: {
        stories: [
            {
                title: "some title",
                description: "dfsdfsdf",
                meta: {
                    datePublished: new Date(),
                    status: "public",
                },
            },
            {
                title: "some other title",
                description: "dfsdfsdf",
                meta: {
                    datePublished: new Date(),
                    status: "public",
                },
            },
            {
                title: "Sunny Days",
                description: "dfsdfsdf",
                meta: {
                    datePublished: null,
                    status: "private",
                },
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
