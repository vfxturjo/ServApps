<script>
// #region IMPORTS
// importing CSS
import "./app.postcss";

// importing modules
import Router, { link } from "svelte-spa-router";
import { routes } from "./routes";
import AppTopBar from "./AppTopBar.svelte";
import LoadingAnim from "./lib/loadingAnim.svelte";

// #endregion

// main script
let loading_page = false;
</script>

<main>
  <!-- TOP BAR, ALWAYS ACTIVE -->
  <AppTopBar />

  <!-- PAGE LOADING ANIMATION -->
  {#if loading_page}
    <div
      class="absolute min-h-[80%] min-w-full flex justify-center items-center z-10"
    >
      <LoadingAnim />
    </div>
  {/if}

  <!-- PAGES -->
  <Router
    routes="{routes}"
    on:routeLoading="{() => {
      loading_page = true;
    }}"
    on:routeLoaded="{() => {
      loading_page = false;
    }}"
  />
</main>
