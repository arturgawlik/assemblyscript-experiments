export function add(a: number, b: number): number {
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
