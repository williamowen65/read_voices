import { createSlice } from "@reduxjs/toolkit";
import { slugify } from "../components/UI/dashboard/util/slugify";

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
            {
                title: "Sunny Days 2",
                description: "dfsdfsdf",
                meta: {
                    datePublished: null,
                    status: "draft",
                },
            },
        ],
    },
    reducers: {
        setStories: (state, action) => {
            state.stories = action.payload;
        },
        setSlugs: (state, action) => {
            state.stories.forEach((story) => {
                story.meta.slug = slugify(
                    story.title
                );
            });
        },
    },
});
// alert("hi");

export const setStories =
    storiesSlice.actions.setStories;
export const setSlugs =
    storiesSlice.actions.setSlugs;
export default storiesSlice.reducer;
