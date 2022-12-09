<script lang="ts">
import {
  ButtonGroup,
  Button,
  Card,
  P,
  Range,
  Dropdown,
  DropdownItem,
  ToolbarButton,
  DropdownDivider,
  Checkbox,
  Toggle,
  Iconinput,
} from "flowbite-svelte";
import { createEventDispatcher, onMount } from "svelte";
import { fade, slide } from "svelte/transition";
import { get_local_data, get_local_data_bool, set_local } from "../../my_funcs";

import {
  minus_mode,
  large_counter,
  delete_mode,
  smart_mode,
  rename_mode,
} from "../CounterLocalData";

export let anything_changed = false;

let dispatch = createEventDispatcher();

export let noOfCounters: number;
</script>

<div
  class="p-4 bg-gray-200 dark:bg-gray-900 h-fit w-full sticky top-0 z-10 shadow"
>
  <div class="flex justify-between">
    <div class="flex gap-1">
      <!-- options dropdown -->
      <ToolbarButton
        class="options_dropdown text-gray-900 bg-white dark:text-white dark:bg-gray-800 aspect-square"
      >
        <span class="fas fa-bars flex-grow px-2"></span>
      </ToolbarButton>
      <!-- dropdown elements -->
      <Dropdown
        transition="{slide}"
        triggeredBy=".options_dropdown"
        class="w-fit noselect"
      >
        <DropdownItem>
          <Toggle size="small" bind:checked="{$delete_mode}"
            >Delete mode
          </Toggle>
        </DropdownItem>
        <DropdownItem>
          <Toggle size="small" bind:checked="{$rename_mode}"
            >Rename mode
          </Toggle>
        </DropdownItem>
        <DropdownDivider />

        <DropdownItem>
          <Toggle size="small" bind:checked="{$smart_mode}" class="inline"
            >Smart mode
          </Toggle>
        </DropdownItem>
        <DropdownItem>
          <Toggle size="small" bind:checked="{$minus_mode}">Minus mode</Toggle>
        </DropdownItem>
        <DropdownItem>
          <Toggle size="small" bind:checked="{$large_counter}" class="inline"
            >Large Counter
          </Toggle>
        </DropdownItem>
        <DropdownDivider />

        <!-- option: Reset all  -->
        <DropdownItem
          on:click="{() => {
            localStorage.clear();
            dispatch('reset');
          }}"
        >
          Reset all
        </DropdownItem>
      </Dropdown>
      {#if $delete_mode}
        <Button on:click="{() => ($delete_mode = false)}">
          <icon class="fas fa-ban"></icon>
        </Button>
      {:else}
        <div class="relative">
          <Button
            class="min-h-full"
            on:click="{() => {
              dispatch('save_data');
            }}"
            ><span class="fas fa-download"></span>
            {#if !anything_changed}
              <p class="fas fa-check absolute top-1 right-1 "></p>
            {/if}
          </Button>
        </div>
      {/if}
    </div>

    <div>
      <Button
        on:click="{() => {
          noOfCounters += 1;
          dispatch('create_counter');
        }}">+1</Button
      >
    </div>
  </div>
</div>
