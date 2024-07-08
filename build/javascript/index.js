export function add(a, b) {
    return a + b;
}
export function runMiltionTimesAdd() {
    let i = 0;
    while (i++ <= 1_000_000) {
        add(1, 2);
    }
}
export function runBilionTimesAdd() {
    let i = 0;
    while (i++ <= 1_000_000_000) {
        add(1, 2);
    }
}
//# sourceMappingURL=index.js.map