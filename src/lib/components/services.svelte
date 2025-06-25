<script lang="ts">
  import food from "$lib/assets/food.jpg";
  import delivery from "$lib/assets/delivery.jpg";
  import { Utensils, Truck, FileText } from "@lucide/svelte";
  import type { Component } from "svelte";

  interface Service {
    icon: Component;
    image: string;
    text: string;
    subtext: string;
  }

  const services: Service[] = [
    {
      icon: Utensils,
      image: food,
      text: "Meal Customization",
      subtext:
        "Customize your meal however you want. \
      With our wide options, you can fill in your daily \
      nutritional needs.",
    },
    {
      icon: Truck,
      image: delivery,
      text: "Wide Delivery Coverage",
      subtext:
        "Live far away from our HQ? Don't worry, \
      we deliver to most major cities in Indonesia.",
    },
    {
      icon: FileText,
      image: "",
      text: "Detailed Nutritional Info",
      subtext:
        "Ever wonder the nutritional content \
      inside your food? We provide detailed nutritional \
      info based on your food.",
    },
  ];
</script>

<div
  id="services"
  class="flex h-dvh flex-col items-center justify-center gap-8"
>
  <div class="text-primary text-4xl font-bold">Why Choose SEA?</div>
  <div class="mx-auto grid w-full max-w-5xl grid-cols-3 gap-6">
    {#each services as service}
      {@render card(service)}
    {/each}
  </div>
</div>

{#snippet card(service: Service)}
  <div
    class="border-primary col-span-1 flex flex-col gap-4 rounded-2xl border-4 p-4"
  >
    <div class="relative h-40 overflow-hidden rounded-xl">
      <div
        class="mx-auto flex h-full w-full items-center justify-center text-white"
      >
        <service.icon size={56} />
      </div>
      <img
        class="absolute top-0 -z-50 blur-xs"
        src={service.image}
        alt={service.text}
      />
    </div>
    <div class="text-primary flex w-full justify-center text-xl font-medium">
      {service.text}
    </div>
    <div class="">
      {service.subtext}
    </div>
  </div>
{/snippet}
