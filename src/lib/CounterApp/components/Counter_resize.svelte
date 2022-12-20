<script>
import { Range, Label, Hr } from "flowbite-svelte";
import { Counter_size } from "../CounterLocalData";
</script>

<div class="w-full grid grid-cols-[150px_auto]">
  <Label class=" align-middle text-center p-2"
    >Height: {$Counter_size.x} px</Label
  >
  <div class="flex-grow p-1 pr-2">
    <Range
      min="50"
      max="350"
      class="bg-slate-300"
      bind:value="{$Counter_size.x}"
    />
  </div>
  <Label class="align-middle text-center  p-2"
    >Width: {$Counter_size.y} px</Label
  >
  <div class="flex-grow p-1 pr-2">
    <Range
      min="50"
      max="100"
      step="5"
      class="bg-slate-300"
      bind:value="{$Counter_size.y}"
    />
  </div>
  <Label class="align-middle text-center  p-2"
    >Width: {$Counter_size.gap} px</Label
  >
  <div class="flex-grow p-1 pr-2">
    <Range
      min="0"
      max="10"
      step="1"
      class="bg-slate-300"
      bind:value="{$Counter_size.gap}"
    />
  </div>
</div>
<Hr />
