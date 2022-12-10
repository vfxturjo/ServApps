<script lang="ts">
import { SyncLoader } from "svelte-loading-spinners";
import { fade } from "svelte/transition";
</script>

<div
  out:fade
  class="absolute flex w-screen h-80 flex-grow items-center  justify-center"
>
  <SyncLoader color="green" />
</div>
