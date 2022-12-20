<script lang="ts">
//#region imports
// animations
import { flip } from "svelte/animate";
import { cubicOut } from "svelte/easing";
const flip_duration = {};
// flowbite
import { ButtonGroup, Button, Card, P, Range } from "flowbite-svelte";
// others
import { get } from "svelte/store";
import { array_removeItem } from "../my_funcs";
import { onMount } from "svelte";
// variables
import { Timers_saved } from "./TimerLocalData";
import TimerTopBar from "./components/TimerTopBar.svelte";
import TimerCard from "./components/TimerCard.svelte";

//#region variables initialize
var timers_data = [{ id: 1, runtime: 0, stop_reason: "None" }];
var Current_id = 1;
var Timer_count = 0;

//#endregion

function save_data(data: any) {
  Timers_saved.set(data);
  anything_changed = false;
}

//#region Anything changed
// @ts-ignore
$: timers_data, (anything_changed = true);
var anything_changed = true;
$: {
  if (anything_changed == false) {
    break $;
  } else {
    anything_changed = // @ts-ignore
      Array.from(counters_saved) === Array.from(timers_data) ? false : true;
  }
}
//#endregion

onMount(() => {
  if (localStorage.getItem("Timers_saved") !== null) {
    // @ts-ignore
    timers_data = Array.from(get(Timers_saved));
    Timer_count = timers_data[timers_data.length - 1].id;
  }
});

$: noOfCounters = timers_data.length;
//#endregion

//#region counter event handle
function create_counter() {
  timers_data.push({
    id: Timer_count + 1,
    runtime: 0,
    stop_reason: "",
  });
  Timer_count += 1;
  timers_data = timers_data;
}

function handle_delete(id: number) {
  let pos = timers_data.map((e) => e.id).indexOf(id);
  array_removeItem(timers_data, pos);
  timers_data = timers_data;
}

function handle_update(id, data, orig_data) {
  let replace_with = {
    id: id,
    name: data.detail.name,
    count: data.detail.count,
  };

  const i = timers_data.findIndex((data) => data.id === id);
  orig_data[i] = { ...orig_data[i], ...replace_with };
}

//#endregion
</script>

<!-- ! FULL WRAPPER -->
<!-- ? Manager -->
<TimerTopBar
  on:create_counter="{() => create_counter()}"
  on:save_data="{() => save_data(timers_data)}"
  on:reset="{() =>
    (timers_data = [
      {
        id: Timer_count + 1,
        runtime: 0,
        stop_reason: '',
      },
    ])}"
  anything_changed="{anything_changed}"
/>

<!-- ? COUNTER CARDS -->

<div class="flex-row p-4 pt-2 inline-flex flex-wrap gap-3 justify-evenly">
  {#each timers_data as item, i (item.id)}
    <div animate:flip="{{ duration: 300, easing: cubicOut }}">
      <TimerCard
        on:delete="{() => {
          handle_delete(item.id);
        }}"
        on:update="{(data) => handle_update(Current_id, data, timers_data)}"
      />
    </div>
  {/each}
</div>
