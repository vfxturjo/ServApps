import { writable } from "svelte-local-storage-store";

// First param `preferences` is the local storage key.
// Second param is the initial value.
// ? FULL WEBSITE
export let Current_app = writable("Current_app", "MultiCounter");

// ? Related with Multi-Counter
export let Timers_saved = writable("counters_saved", { id: 0, count: 0 });
export let smart_mode = writable("counter_smart_mode", true);
export let minus_mode = writable("counter_minus_mode", false);
export let delete_mode = writable("counter_delete_mode", false);

// ? Others
export function createCount_stored(id: number) {
  const { subscribe, set, update } = writable("value", {});

  return {
    subscribe,
    id,
    increment: () => update((n) => Number(n) + 1),
    decrement: () => update((n) => Number(n) - 1),
    reset: () => set(0),
  };
}
//#endregion
