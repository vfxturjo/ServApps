<script lang="ts">
//#region imports
import { Timers_saved } from "./TimerLocalData";
import { ButtonGroup, Button, Card, P, Range } from "flowbite-svelte";
import { get } from "svelte/store";
import { array_removeItem } from "../my_funcs.js";
import TimerCard from "./components/TimerCard.svelte";
import { SyncLoader } from "svelte-loading-spinners";
import { fade, fly, slide } from "svelte/transition";
import { onMount } from "svelte";
import FloatingVarsViewer from "../debugging/Floating_vars_viewer.svelte";
import TimerTopBar from "./components/TimerTopBar.svelte";

function save_data(data: any) {
  Timers_saved.set(data);
}
//#endregion

//#region variables initialize
var timers_data = [{ id: 1, count: 0 }];
var timer_count = 1;
var loading_state = true;
var anim_long = true;

var anything_changed = true;
$: {
  if (anything_changed == false) {
    break $;
  } else {
    anything_changed =
      Array.from(Timers_saved) === Array.from(timers_data) ? false : true;
  }
}

onMount(() => {
  if (localStorage.getItem("Timers_saved") !== null) {
    timers_data = Array.from(get(Timers_saved));
    timer_count = timers_data[timers_data.length - 1].id;
  }
  loading_state = false;
});

$: noOfTimers = timers_data.length;
//#endregion

//#region counter event handle
function create_counter() {
  timers_data.push({
    id: timer_count + 1,
    count: 0,
  });
  timer_count += 1;
  timers_data = timers_data;
}

function handle_delete(id: number) {
  let pos = timers_data.map((e) => e.id).indexOf(id);
  array_removeItem(timers_data, pos);
  timers_data = timers_data;
}

function handle_save() {
  save_data(timers_data);
  // anything_changed = false;
}
//#endregion
</script>

<!-- ! FULL WRAPPER -->
<!-- ? Manager -->
<TimerTopBar
  noOfCounters="{noOfTimers}"
  on:create_counter="{() => create_counter()}"
  on:save_data="{() => handle_save()}"
  on:reset="{() => (timers_data = [{ id: 1, count: 0 }])}"
  anything_changed="{anything_changed}"
/>

<!-- ? COUNTER CARDS -->

<div class="flex flex-col pt-2">
  {#if loading_state}
    <div
      out:fade
      class="flex fixed w-screen h-80 flex-grow items-center  justify-center"
    >
      <SyncLoader color="green" />
    </div>
  {:else}
    <div
      transition:fade
      on:introend="{() => {
        anim_long = false;
      }}"
      on:outroend="{() => {
        anim_long = true;
      }}"
    >
      {#each timers_data as item, i (item.id)}
        <div
          class="w-full "
          in:slide="{{ delay: anim_long ? i * 100 : 0 }}"
          out:slide|local
        >
          <TimerCard
            item="{item}"
            i="{i}"
            on:delete="{() => {
              handle_delete(item.id);
            }}"
            on:up="{() => (item.count += 1)}"
            on:down="{() => (item.count -= 1)}"
            on:reset_this_counter="{() => (item.count = 0)}"
          />
        </div>
      {/each}
    </div>
  {/if}
</div>
