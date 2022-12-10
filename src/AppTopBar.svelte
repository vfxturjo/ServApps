<script>
// #region IMPORTS
import {
  Navbar,
  NavBrand,
  NavLi,
  NavUl,
  NavHamburger,
  DarkMode,
  ToolbarButton,
  Dropdown,
  DropdownItem,
  DropdownDivider,
  P,
} from "flowbite-svelte";
import { slide } from "svelte/transition";
import { Current_app } from "./lib/CounterApp/CounterLocalData";

// #endregion

// main script
const toggleTheme = () => {
  const isDark = window.document.documentElement.classList.toggle("dark");
  localStorage.setItem("color-theme", isDark ? "dark" : "light");
};
</script>

<!-- LOAD THE THEME COLOR -->
<svelte:head>
  <script>
  if (window) {
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? window.document.documentElement.classList.add("dark")
      : window.document.documentElement.classList.remove("dark");
  }
  </script>
</svelte:head>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <span class="fab fa-unity m-3" alt="Flowbite Logo"></span>
    <span
      class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
    >
      Survapps
    </span>
  </NavBrand>

  <NavHamburger on:click="{toggle}" />
  <NavUl hidden="{hidden}">
    <NavLi class="cursor-pointer" on:click="{toggleTheme}">Toggle Theme</NavLi>
    <NavLi href="/" active="{$Current_app == 'MultiCounter'}"
      >Multi-Counter</NavLi
    >
    <NavLi href="/">Created By: vfxTurjo</NavLi>
  </NavUl>
</Navbar>
