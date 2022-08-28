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
                    datePublished:
                        new Date().toDateString(),
                    status: "public",
                    html: "",
                },
            },
            {
                title: "some other title",
                description: "dfsdfsdf",
                meta: {
                    datePublished:
                        new Date().toDateString(),
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
        toggleStatus: (state, action) => {
            // alert(action.payload);
            // state.stories = 2;
            state.stories = state.stories.map(
                (el) => {
                    if (
                        el.meta.slug ===
                        action.payload
                    ) {
                        if (
                            el.meta.status !=
                            "draft"
                        ) {
                            el.meta.status =
                                el.meta.status ===
                                "private"
                                    ? "public"
                                    : "private";
                        }
                    }
                    return el;
                }
            );
        },
    },
});
// alert("hi");

export const setStories =
    storiesSlice.actions.setStories;
export const setSlugs =
    storiesSlice.actions.setSlugs;
export const toggleStatus =
    storiesSlice.actions.toggleStatus;
export default storiesSlice.reducer;
