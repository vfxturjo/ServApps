import { wrap } from "svelte-spa-router/wrap";

import Home from "./lib/Home.svelte";
import LoadingAnim from "./lib/loadingAnim.svelte";
// import E404 from "./lib/E404.svelte";
// import DesignerGreenRoom from "./lib/debugging/DesignerGreenRoom.svelte";
// import CounterApp from "./lib/CounterApp/CounterApp.svelte";
// import TimerApp from "./lib/TimerApp/TimerApp.svelte";

export const routes = {
  // Home page
  "/": wrap({
    asyncComponent: () => import("./lib/Home.svelte"),
  }),

  "/ServApps": wrap({
    asyncComponent: () => import("./lib/Home.svelte"),
  }),
  "/home": wrap({
    asyncComponent: () => import("./lib/Home.svelte"),
  }),

  // utility page
  "/Designer": wrap({
    asyncComponent: () => import("./lib/debugging/DesignerGreenRoom.svelte"),
  }),

  //! MAIN APPS
  // Counter app
  "/CounterApp": wrap({
    asyncComponent: () => import("./lib/CounterApp/CounterApp.svelte"),
  }),

  // Timer app
  "/TimerApp": wrap({
    asyncComponent: () => import("./lib/TimerApp/TimerApp.svelte"),
  }),

  // error catching
  "*": wrap({
    asyncComponent: () => import("./lib/E404.svelte"),
  }),
};
