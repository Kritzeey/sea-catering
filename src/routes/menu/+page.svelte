<script lang="ts">
  import { Search } from "@lucide/svelte";
</script>

<main class="flex h-dvh w-full flex-col items-center bg-white pt-20">
  <div class="flex w-full flex-col gap-8">
    <span class="text-primary text-center text-5xl font-bold">Our Menu</span>
    <div class="relative mx-auto w-full max-w-xl">
      <input
        class="border-primary h-12 w-full rounded-xl border px-12"
        placeholder="Search for food..."
      />
      <Search class="text-primary absolute top-[25%] left-2" />
    </div>
  </div>
</main>
