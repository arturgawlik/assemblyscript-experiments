import * as asm from "./assembly/release.js";
import * as js from "./javascript/index.js";
const runningMode = process.argv[2];
if (runningMode === "asm") {
    globalThis.performance.mark("start");
    //   let i = 0;
    //   while (i++ <= 1_000_000) {
    //     asm.add(1, 2);
    //   }
    //   asm.runMiltionTimesAdd();
    asm.runBilionTimesAdd();
    const perfMesure = globalThis.performance.measure("end");
    console.log(`wasm run for ${perfMesure.duration}ms`);
}
else {
    globalThis.performance.mark("start");
    //   let i = 0;
    //   while (i++ <= 1_000_000) {
    //     js.add(1, 2);
    //   }
    //   js.runMiltionTimesAdd();
    js.runBilionTimesAdd();
    const perfMesure = globalThis.performance.measure("end");
    console.log(`js run for ${perfMesure.duration}ms`);
}
//# sourceMappingURL=main.js.map