<script lang="ts">
  import { TreePine } from "@lucide/svelte";
  import Button from "./button.svelte";
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
    >
      <TreePine /> SEA Catering
    </a>
    <div class="flex gap-8">
      <a href="#about" class="col-span-1">About</a>
      <a href="#services" class="col-span-1">Services</a>
      <a href="#contact" class="col-span-1">Contact</a>
    </div>
    <div>
      <Button>Login</Button>
    </div>
  </div>
</nav>
