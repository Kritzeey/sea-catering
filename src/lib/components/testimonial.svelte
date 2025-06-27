<script lang="ts">
  import { testimonials, type Testimony } from "$lib/constants/testimony";
  import { ArrowBigLeft, ArrowBigRight, Quote } from "@lucide/svelte";
  import { render } from "svelte/server";

  let selectedTestimony = $state(1);

  function incrementSelected() {
    if (selectedTestimony === 5) {
      selectedTestimony = 1;

      return;
    }

    selectedTestimony = selectedTestimony + 1;
  }

  function decrementSelected() {
    if (selectedTestimony === 1) {
      selectedTestimony = 5;

      return;
    }

    selectedTestimony = selectedTestimony - 1;
  }
</script>

<div class="flex h-dvh flex-col items-center justify-center gap-8 bg-white">
  <div class="text-primary text-4xl font-bold">
    What do they say about SEA Catering?
  </div>
  <div class="flex items-center gap-4">
    {@render arrowButton("left")}

    {#each testimonials as testimony}
      {#if testimony.id === selectedTestimony}
        {@render testimonyCard(testimony)}
      {/if}
    {/each}

    {@render arrowButton("right")}
  </div>
</div>

{#snippet testimonyCard(testimony: Testimony)}
  <div
    class="relative flex w-2xl flex-col gap-8 rounded-xl bg-white p-4 shadow-md"
  >
    <div class="absolute top-1">
      <Quote color="#2c7537" />
    </div>
    <div class="text-md ml-8 font-medium">
      {testimony.quote}
    </div>
    <div class="flex items-center gap-4">
      <div class="bg-primary/10 size-12 rounded-[50%]"></div>
      <div>
        {testimony.name} - {testimony.title}
      </div>
    </div>
  </div>
{/snippet}

{#snippet arrowButton(direction: "left" | "right")}
  {#if direction === "left"}
    <button
      class="bg-primary/10 flex size-12 cursor-pointer items-center justify-center rounded-[50%]"
      onclick={decrementSelected}
    >
      <ArrowBigLeft />
    </button>
  {:else if direction === "right"}
    <button
      class="bg-primary/10 flex size-12 cursor-pointer items-center justify-center rounded-[50%]"
      onclick={incrementSelected}
    >
      <ArrowBigRight />
    </button>
  {/if}
{/snippet}
