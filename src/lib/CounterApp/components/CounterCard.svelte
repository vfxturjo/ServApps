<script>
//#region imports
import { ButtonGroup, Button, Card, P, Range, Span } from "flowbite-svelte";
import { createEventDispatcher } from "svelte";
import { fade, fly, slide } from "svelte/transition";
let dispatch = createEventDispatcher();
import { get_local_data_bool } from "../../my_funcs";
import {
  delete_mode,
  smart_mode,
  minus_mode,
  counter_id_shown,
  Counter_size,
  smart_text,
} from "../CounterLocalData";

//#endregion
export let item = { id: 0, count: 0 };
export let i = 0;
</script>

<div
  class="relative overflow-hidden rounded-lg dark:bg-slate-800"
  style="{` width: ${$Counter_size.x}px; 
  height: ${$Counter_size.y}px`}"
>
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
  {#if $counter_id_shown}
    <div class="absolute pointer-events-none p-1 pl-2">
      <P weight="light" space="tight" align="left" size="xs">{i + 1}</P>
    </div>
  {/if}
  <div class="pointer-events-none h-full " transition:fly="{{ x: 10 }}">
    {#if $smart_text}
      {#key item.count}
        <span class="centerrr " in:fly|local="{{ y: -10 }}">
          <P size="2xl">
            {item.count}
          </P>
        </span>
      {/key}
      <div class="absolute bottom-0 w-full">
        <P size="xs" align="center" class="text-gray-600 dark:text-gray-300 "
          >Counter Name</P
        >
      </div>
    {:else}
      <div class="centerrr">
        <P size="lg" align="center"
          >{item.name}: &nbsp
          {#key item.count}
            <span class="absolute" in:fly|="{{ y: -10 }}">
              {item.count}
            </span>
          {/key}
        </P>
      </div>
    {/if}
  </div>

  {#if !$smart_mode}
    {#if $minus_mode}
      <div class="absolute bottom-0 p-2">
        <Button size="lg" color="green" on:click="{() => dispatch('down')}"
          >-1</Button
        >
      </div>
    {/if}
    <div class="absolute bottom-0 right-0 p-2">
      <Button size="lg" on:click="{() => dispatch('up')}">+1</Button>
    </div>
  {/if}
</div>
