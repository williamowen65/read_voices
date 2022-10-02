export const slugify = (str) => {
    // if (!str.find(" ")) {
    //     return str.toLowerCase();
    // }
    if (str.indexOf(" ") == -1) {
        return str;
    }
    return str.replaceAll(" ", "-").toLowerCase();
};
