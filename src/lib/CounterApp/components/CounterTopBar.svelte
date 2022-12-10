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
import Icon from "@iconify/svelte";
import contentSave from "@iconify/icons-mdi/content-save";
import roundFileDownloadDone from "@iconify/icons-ic/round-file-download-done";
import doneRounded from "@iconify/icons-material-symbols/done-rounded";

import {
  minus_mode,
  delete_mode,
  smart_mode,
  rename_mode,
  counter_id_shown,
  Counter_size_editing,
  smart_text,
} from "../CounterLocalData";

export let anything_changed = false;

let dispatch = createEventDispatcher();

export let noOfCounters: number;
</script>

<div transition:slide>
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
            <Toggle size="small" bind:checked="{$smart_text}" class="inline"
              >Smart text
            </Toggle>
          </DropdownItem>
          <DropdownItem>
            <Toggle size="small" bind:checked="{$minus_mode}">Minus mode</Toggle
            >
          </DropdownItem>

          <DropdownItem>
            <Toggle
              size="small"
              bind:checked="{$Counter_size_editing}"
              class="inline"
              >Edit Counters size
            </Toggle>
          </DropdownItem>
          <DropdownItem>
            <Toggle
              size="small"
              bind:checked="{$counter_id_shown}"
              class="inline"
            >
              Show counter id
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
            <Icon icon="{roundFileDownloadDone}" class="text-lg" />
          </Button>
        {:else if $Counter_size_editing}
          <Button on:click="{() => ($Counter_size_editing = false)}">
            <Icon icon="{roundFileDownloadDone}" class="text-lg" />
          </Button>
        {:else}
          <div class="relative">
            <Button
              class="min-h-full overflow-visible"
              on:click="{() => {
                dispatch('save_data');
              }}"
            >
              <Icon icon="{contentSave}" class="text-lg" />
              {#if !anything_changed}
                <Icon icon="{doneRounded}" class=" absolute top-1 right-1 " />
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
</div>
