<script lang="ts">
//#region imports
import {
  counters_saved,
  Counter_size_editing,
  rename_mode,
} from "./CounterLocalData";
import { ButtonGroup, Button, Card, P, Range } from "flowbite-svelte";
import { get } from "svelte/store";
import { array_removeItem } from "../my_funcs";
import CounterCard from "./components/CounterCard.svelte";
import { SyncLoader } from "svelte-loading-spinners";
import { fade, fly, slide } from "svelte/transition";
import CounterTopBar from "./components/CounterTopBar.svelte";
import { onMount } from "svelte";
import FloatingVarsViewer from "../debugging/Floating_vars_viewer.svelte";
import CounterResize from "./components/Counter_resize.svelte";

function save_data(data: any) {
  counters_saved.set(data);
  anything_changed = false;
}
//#endregion

// @ts-ignore
$: counters_data, (anything_changed = true);

//#region variables initialize
var counters_data = [{ id: 1, count: 0, name: "Counter Name" }];
var counter_count = 1;
var loading_state = true;
var anim_long = true;

var anything_changed = true;
$: {
  if (anything_changed == false) {
    break $;
  } else {
    anything_changed = // @ts-ignore
      Array.from(counters_saved) === Array.from(counters_data) ? false : true;
  }
}

onMount(() => {
  if (localStorage.getItem("counters_saved") !== null) {
    // @ts-ignore
    counters_data = Array.from(get(counters_saved));
    counter_count = counters_data[counters_data.length - 1].id;
  }
  loading_state = false;
});

$: noOfCounters = counters_data.length;
//#endregion

//#region counter event handle
function create_counter() {
  counters_data.push({
    id: counter_count + 1,
    count: 0,
    name: "Counter name",
  });
  counter_count += 1;
  counters_data = counters_data;
}

function handle_delete(id: number) {
  let pos = counters_data.map((e) => e.id).indexOf(id);
  array_removeItem(counters_data, pos);
  counters_data = counters_data;
}

function handle_update(id, data) {
  let replace_with = {
    id: id,
    name: data.detail.name,
    count: data.detail.count,
  };

  const i = counters_data.findIndex((data) => data.id === id);
  counters_data[i] = { ...counters_data[i], ...replace_with };

  counters_data = counters_data;
}

function handle_save() {
  save_data(counters_data);
  // anything_changed = false;
}
//#endregion
</script>

<!-- ! FULL WRAPPER -->
<!-- ? Manager -->
<CounterTopBar
  noOfCounters="{noOfCounters}"
  on:create_counter="{() => create_counter()}"
  on:save_data="{() => handle_save()}"
  on:reset="{() =>
    (counters_data = [{ id: 1, count: 0, name: 'Counter Name' }])}"
  anything_changed="{anything_changed}"
/>

<!-- ? Edit counter size -->
{#if $Counter_size_editing}
  <div transition:slide>
    <CounterResize />
  </div>
{/if}
<!-- Counter_size_editing -->

<!-- ? COUNTER CARDS -->

<div
  class="flex-row p-4 pt-2 inline-flex flex-wrap gap-3 justify-evenly"
  transition:fade
  on:introend="{() => {
    anim_long = false;
  }}"
  on:outroend="{() => {
    anim_long = true;
  }}"
>
  {#each counters_data as item, i (item.id)}
    <div in:slide="{{ delay: anim_long ? i * 100 : 0 }}" out:slide|local>
      <CounterCard
        item="{item}"
        i="{i}"
        on:delete="{() => {
          handle_delete(item.id);
        }}"
        on:update="{(data) => handle_update(item.id, data)}"
        on:up="{() => (item.count += 1)}"
        on:down="{() => (item.count -= 1)}"
        on:reset_this_counter="{() => (item.count = 0)}"
      />
    </div>
  {/each}
</div>
