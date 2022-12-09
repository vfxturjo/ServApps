<script>
//#region imports
import { ButtonGroup, Button, Card, P, Range } from "flowbite-svelte";
import { createEventDispatcher } from "svelte";
import { fade, fly, slide } from "svelte/transition";
let dispatch = createEventDispatcher();
import { get_local_data_bool } from "../../my_funcs";
import {
  delete_mode,
  smart_mode,
  large_counter,
  minus_mode,
} from "../CounterLocalData";

//#endregion
export let item = { id: 0, count: 0 };
export let i = 0;
</script>

<div class="p-2 flex justify-center select-none">
  <Card class="min-w-[300px] max-w-[90%] relative overflow-hidden">
    <!-- Counter part: smart -->
    {#if $smart_mode && !$delete_mode}
      {#if $minus_mode}
        <button
          transition:fade
          class="absolute left-0 top-0 w-[30%] h-[100%] bg-red-400 bg-opacity-30"
          on:click="{() => dispatch('down')}"></button>
      {/if}
      <button
        transition:fade
        class="transition-all absolute right-0 top-0 h-[100%] bg-blue-400 bg-opacity-30
        {$minus_mode ? 'w-[68%]' : 'w-[100%]'}"
        on:click="{() => dispatch('up')}"></button>
    {/if}
    {#if $delete_mode}
      <!-- content here -->
      <button
        class="absolute left-0 top-0 w-[30%] h-[100%] bg-red-400 bg-opacity-30"
        on:click="{() => dispatch('delete', item.id)}"></button>
    {/if}
    <!-- Info part -->
    <div class="relative pointer-events-none">
      <P weight="light" space="tight" align="left" size="xs">Counter {i + 1}</P>
    </div>
    <div class="p-4 pointer-events-none" transition:fly="{{ x: 10 }}">
      <P size="lg" align="center"
        >Current value =
        {#key item.count}
          <span class="inline-block" in:fly|="{{ y: -10 }}">
            {item.count}
          </span>
        {/key}
      </P>
    </div>

    {#if !$smart_mode}
      <!-- content here -->
      <div class="flex flex-row-reverse justify-between">
        {#if $minus_mode}
          <Button size="sm" color="green" on:click="{() => dispatch('down')}"
            >-1</Button
          >
        {/if}
        <div>
          <Button size="lg" on:click="{() => dispatch('up')}">+1</Button>
        </div>
      </div>
    {/if}
  </Card>
</div>
