export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function runMiltionTimesAdd(): void {
  let i = 0;
  while (i++ <= 1_000_000) {
    add(1, 2);
  }
}

export function runBilionTimesAdd(): void {
  let i = 0;
  while (i++ <= 1_000_000_000) {
    add(1, 2);
  }
}
