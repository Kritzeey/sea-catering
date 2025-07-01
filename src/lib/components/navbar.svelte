<script lang="ts">
  import { TreePine } from "@lucide/svelte";
  import Button from "./button.svelte";
  import { onMount } from "svelte";

  let active = $state("home");

  let { data } = $props();

  onMount(() => {
    console.log(data.user.firstName);
  });
</script>

<nav
  class="fixed top-0 z-200 h-16 w-full border-b border-white/30 bg-white/5 backdrop-blur-md"
>
  <div
    class="mx-auto flex h-full w-full max-w-6xl items-center justify-between"
  >
    <a
      href="/"
      class="text-primary flex h-full items-center justify-center gap-4 text-2xl font-bold"
      onclick={() => (active = "home")}
    >
      <TreePine /> SEA Catering
    </a>
    <div class="flex gap-8">
      <a
        class:active={active === "menu"}
        onclick={() => (active = "menu")}
        id="menu"
        href="/menu"
        class="col-span-1 border-[2px] border-transparent">Menu</a
      >
      <a
        class:active={active === "subscription"}
        onclick={() => (active = "subscription")}
        id="subscription"
        href="/subscription"
        class="col-span-1 border-[2px] border-transparent">Subscription</a
      >
      <a
        class:active={active === "contact"}
        onclick={() => (active = "contact")}
        id="contact"
        href="/contact"
        class="col-span-1 border-[2px] border-transparent">Contact</a
      >
    </div>

    <div class="flex items-center gap-4">
      {#if data.user}
        <span class="hidden sm:inline">Hi, {data.user.firstName}!</span>
        <form action="/logout" method="post">
          <Button variant="primary">Logout</Button>
        </form>
      {:else}
        <a href="/login">
          <Button>Login</Button>
        </a>
      {/if}
    </div>
  </div>
</nav>

<style>
  .active {
    border-bottom: 2px solid #2c7537;
  }
</style>
