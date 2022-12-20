import { writable } from "svelte-local-storage-store";

// First param `preferences` is the local storage key.
// Second param is the initial value.
// ? FULL WEBSITE
export let Current_app = writable("Current_app", "MultiCounter");

// ? Related with Multi-Counter
export let counters_saved = writable("counters_saved", {
  id: 0,
  count: 0,
  name: "Counter Name",
});
export let smart_mode = writable("counter_smart_mode", true);
export let smart_text = writable("counter_smart_text", true);
export let minus_mode = writable("counter_minus_mode", true);

export let delete_mode = writable("counter_delete_mode", false);
export let rename_mode = writable("counter_rename_mode", false);
export let counter_id_shown = writable("counter_counter_id_shown", false);
export let Counter_size_editing = writable("counter_size_editing", false);
export let Counter_size = writable("counter_size", { x: 300, y: 90, gap: 10 });

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
