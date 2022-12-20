<script>
//#region imports
import {
  ButtonGroup,
  Button,
  Card,
  P,
  Range,
  Span,
  Modal,
  Label,
  Input,
  Checkbox,
} from "flowbite-svelte";
import { createEventDispatcher } from "svelte";
import { fade, fly, slide } from "svelte/transition";
let dispatch = createEventDispatcher();
import { get_local_data_bool } from "../../my_funcs";
import { onFormSubmit } from "../../my_funcs";
import {} from "../TimerLocalData";

//#endregion
export let item = { id: 0, count: 0, name: "Counter Name" };

let editing = false;
// let formModal = false;

function handleEdit(e) {
  let data = onFormSubmit(e, ["name", "count"]);
  console.log(data.count);
  if (data.count === "") {
    data.count = item.count;
  }
  dispatch("update", data);
  editing = false;
}
</script>

<!-- Info part -->
aaaaaaaaaaa
<!--  -->
<!--  -->
<!--  -->
<!--! RENAMING MODAL -->
<Modal bind:open="{editing}" size="xs" class="h-min">
  <form
    class="flex flex-col space-y-6"
    on:submit|preventDefault="{(e) => handleEdit(e)}"
  >
    <h3 class="text-xl font-medium text-gray-900 dark:text-white p-0">
      Rename Counter
    </h3>
    <Label class="space-y-2">
      <span>Name</span>
      <Input name="name" placeholder="{item.name}" />
    </Label>
    <Label class="space-y-2">
      <span>Value</span>
      <Input type="number" name="count" placeholder="{item.count}" />
    </Label>

    <Button type="submit" class="w-full1">Set</Button>
  </form>
</Modal>
