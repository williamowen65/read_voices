import { createSlice } from "@reduxjs/toolkit";
import { slugify } from "../components/UI/dashboard/util/slugify";

const storiesSlice = createSlice({
    name: "stories",
    initialState: {
        activeSlug: null,
        stories: [
            {
                title: "some title",
                description: "dfsdfsdf",
                meta: {
                    datePublished:
                        new Date().toDateString(),
                    status: "public",
                    buttons: [
                        {
                            text: "Amazon",
                            link: "https://amazon.com",
                        },
                        {
                            text: "Medium",
                            link: "https://medium.com",
                        },
                    ],
                },
            },
            {
                title: "some other title dsflhds fldf ljdf lk ssdfljk",
                description:
                    "dfsdfsdf lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate consequatur a laudantium nihil reiciendis in eligendi maiores repellendus blanditiis minus commodi esse dolorem vel consequuntur eveniet modi, ipsam cupiditate possimus expedita nobis asperiores! Sunt quisquam voluptatum ducimus est magnam. Beatae amet neque vitae aperiam quo numquam libero, ratione voluptas praesentium nesciunt maxime ducimus cupiditate pariatur, tempore consequuntur non voluptate! Nesciunt mollitia itaque dolorem asperiores ea autem unde adipisci saepe amet, porro possimus facere quas et at laborum optio debitis quasi veritatis quidem harum rerum recusandae voluptatum eius. Deleniti incidunt debitis quos earum consequatur eum nihil, ducimus nulla nostrum distinctio nisi? Tenetur amet ducimus mollitia aliquid possimus iste nesciunt nisi repellendus laboriosam officia, veniam quae accusamus consequuntur, autem quos nihil, ipsa reiciendis. Nobis nostrum mollitia animi veritatis cumque fugit minus numquam impedit possimus explicabo harum atque saepe quis ex vero, voluptatum earum quibusdam at voluptate ullam consequatur debitis voluptatem. Unde odio, autem doloribus magni totam saepe? Expedita suscipit nesciunt commodi soluta modi, nemo unde inventore incidunt amet voluptate vitae itaque possimus sequi voluptatem, tempora repellendus autem ullam veritatis nostrum deserunt facilis repellat! Tempora voluptatem aspernatur voluptatum! Vel maiores dolorem impedit doloribus ut quia, deserunt alias placeat, illo incidunt tempore debitis blanditiis. Soluta aut esse porro voluptatem beatae ad aperiam minima saepe maiores, quam, eligendi ea cupiditate. Eius amet ratione ipsum totam, sequi odio numquam repudiandae laboriosam ex, nihil perspiciatis temporibus tenetur maxime. Praesentium eaque quidem maxime. Odit ipsam deserunt dicta iusto minima ipsa provident et, tempore neque facilis sit numquam, veniam expedita quam harum alias. Minima animi impedit magni dolor rem maxime omnis laudantium sequi consequuntur expedita voluptatum a ab perspiciatis itaque recusandae laboriosam temporibus alias tempore, iure quis id aut unde labore nam. Eum, veritatis error perferendis qui quis adipisci consequatur dignissimos id, aliquid ipsa earum vitae numquam, a aut inventore quos alias cupiditate ullam suscipit maiores eligendi magnam repellat. Accusantium porro assumenda esse facilis velit blanditiis magni quo fugit labore praesentium nihil vel nam ea maxime quasi ipsa quisquam nesciunt reprehenderit, animi tenetur impedit? Vero quidem labore tenetur atque enim rem, itaque fugiat. Quam, veniam esse modi perferendis architecto quaerat aut natus numquam explicabo vitae pariatur, odit voluptates cupiditate iure asperiores? Amet nam laboriosam, labore fuga, corrupti soluta voluptates assumenda, iure fugiat dolore perspiciatis aliquam. Aperiam id delectus eligendi, ex magnam quas dolor unde quaerat iste? Ullam doloribus blanditiis laboriosam id est animi accusantium non eaque ut. Incidunt, enim!",
                meta: {
                    datePublished:
                        new Date().toDateString(),
                    status: "public",
                    buttons: [],
                },
            },
            {
                title: "Sunny Days",
                description: "dfsdfsdf",
                meta: {
                    datePublished: null,
                    status: "private",
                    buttons: [],
                },
            },
            {
                title: "Sunny Days 2",
                description: "dfsdfsdf",
                meta: {
                    datePublished: null,
                    status: "draft",
                    buttons: [],
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
        setActiveSlug: (state, action) => {
            state.activeSlug = action.payload;
        },
        setNewStoryAndStatus: (state, action) => {
            state.stories = [
                action.payload,
                ...state.stories,
            ];
        },
    },
});
// alert("hi");

export const setStories =
    storiesSlice.actions.setStories;
export const setNewStoryAndStatus =
    storiesSlice.actions.setNewStoryAndStatus;
export const setSlugs =
    storiesSlice.actions.setSlugs;
export const toggleStatus =
    storiesSlice.actions.toggleStatus;
export const setActiveSlug =
    storiesSlice.actions.setActiveSlug;
export default storiesSlice.reducer;
