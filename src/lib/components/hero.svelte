<script lang="ts">
  import Button from "./button.svelte";
  import { Utensils } from "@lucide/svelte";
</script>

<div class="flex h-dvh w-full items-center justify-center">
  <div class="flex flex-col gap-8">
    <div class="flex flex-col gap-4">
      <span class="text-primary text-7xl font-bold">SEA Catering</span>
      <span class="text-xl font-medium">Healthy Meals, Anytime, Anywhere</span>
    </div>
    <div class="flex flex-col">
      <span> Customizable, healthy, and hassle-free meal service. </span>
      <span> Delivering all across Indonesia. </span>
    </div>
    <div class="flex gap-4">
      <Button variant="primary">
        <span class="flex gap-4 font-bold">
          <Utensils /> Get Started
        </span>
      </Button>

      <Button variant="secondary">
        <span class="font-bold"> Our Menu </span>
      </Button>
    </div>
  </div>
</div>
