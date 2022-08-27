export default class Enum {
    constructor(...args) {
        for (
            let i = 0;
            i < args.length - 1;
            i++
        ) {
            const arg = args[i];
            this[arg] = arg;
        }
    }
}
