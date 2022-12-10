<script>
import { onMount } from "svelte";
import Router, { link } from "svelte-spa-router";
import { routes } from "./routes";
import E404 from "./lib/E404.svelte";
// import { Router, Route, Link } from "svelte-navigator";

// import CounterApp from "./lib/CounterApp/CounterApp.svelte";
import "./app.postcss";

import { DarkMode } from "flowbite-svelte";
import DesignerGreenRoom from "./lib/debugging/DesignerGreenRoom.svelte";
import AppTopBar from "./AppTopBar.svelte";
import { fade, fly, slide } from "svelte/transition";
import LoadingAnim from "./lib/loadingAnim.svelte";
let darkmodebtn =
  "text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-lg p-2.5 fixed right-4 top-2 z-50 transition-all";

let loading_page = false;
// let CounterApp = null;
// onMount(async () => {
//   try {
//     // Contact = (await import("./lib/CounterApp/CounterApp.svelte')).default;
//     CounterApp = (await import("./lib/CounterApp/CounterApp.svelte")).default;
//   } catch (e) {
//     CounterApp = 404;
//   }
// });
</script>

<main>
  <!-- TOP BAR, ALWAYS ACTIVE -->
  <AppTopBar />

  <!-- PAGE LOADING ANIMATION -->
  {#if loading_page}
    <LoadingAnim />
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

<!-- <DesignerGreenRoom /> -->
<!-- <DarkMode btnClass="{darkmodebtn}" /> -->

<!-- <svelte:component this="{CounterApp}" /> -->
<!-- <CounterApp /> -->

<!--  -->
<!--  -->
<!-- 
  More on routing: https://svelte.dev/repl/c81d8f3dff584065a82b2d3ea7cd4aee?version=3.54.0
 -->
<!-- https://github.com/rixo/svelte-template-hot/tree/example-code-splitting -->
<!-- https://github.com/Rich-Harris/rollup-svelte-code-splitting -->
<!-- kasakasi: https://svelte.dev/repl/ec6f6b61329f4f43ae049464d73d8158?version=3.23.1 -->
<!-- and https://flaming.codes/posts/lazy-loading-modules-in-svelte-to-import-components-on-demand -->
