class Enum {
    constructor(...args) {
        for (
            let i = 0;
            i <= args.length - 1;
            i++
        ) {
            const arg = args[i];
            this[arg] = arg;
        }
    }
}

const Status = new Enum(
    "public",
    "draft",
    "private"
);

export default Status;
