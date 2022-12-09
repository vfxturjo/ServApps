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
} from "flowbite-svelte";
import { createEventDispatcher, onMount } from "svelte";
import { fade, slide } from "svelte/transition";
import { get_local_data, get_local_data_bool, set_local } from "../../my_funcs";
import { minus_mode, delete_mode, smart_mode } from "../TimerLocalData";

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
        class="w-fit"
      >
        <DropdownItem
          class="w-full flex justify-between"
          on:click="{() => {
            dispatch('save_data');
          }}"
        >
          <P>Save values</P>
          <P class="inline-block">
            {#if !anything_changed}
              <span class="fas fa-check text-lg text-end"></span>
            {/if}
          </P>
        </DropdownItem>
        <DropdownDivider />

        <DropdownItem>
          <Toggle size="small" bind:checked="{$delete_mode}" class="inline"
            >Delete mode
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
