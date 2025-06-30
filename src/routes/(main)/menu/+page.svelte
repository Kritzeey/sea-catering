<script lang="ts">
  import { Search } from "@lucide/svelte";
  import { healthyMenu, type Menu } from "$lib/constants/menu";
</script>

<main class="flex h-dvh w-full flex-col items-center pt-20">
  <div class="flex w-full flex-col gap-8">
    <span class="text-primary text-center text-5xl font-bold">Our Menu</span>
    <div class="relative mx-auto w-full max-w-xl">
      <input
        class="border-primary h-12 w-full rounded-xl border px-12"
        placeholder="Search for food..."
      />
      <Search class="text-primary absolute top-[25%] left-2" />
    </div>
    <div class="mx-auto mb-8 grid w-full max-w-6xl grid-cols-3 gap-8">
      {#each healthyMenu as menu}
        {@render menuCard(menu)}
      {/each}
    </div>
  </div>
</main>

{#snippet menuCard(menu: Menu)}
  <div class="col-span-1 rounded-md bg-white p-4 shadow-md">
    <img class="h-48 w-full object-cover" alt={menu.name} src={menu.image} />
    <div class="mt-4 flex w-full items-center justify-between">
      <div class="text-primary font-medium">
        {menu.name}
      </div>
      <div class="flex h-full items-center justify-center">
        {menu.nutrients.cal} cal
      </div>
    </div>
  </div>
{/snippet}
