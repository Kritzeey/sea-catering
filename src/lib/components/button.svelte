<script lang="ts">
  import type { Snippet } from "svelte";
  import { cva } from "class-variance-authority";

  const button = cva("cursor-pointer h-12 px-6 rounded-3xl", {
    variants: {
      variant: {
        primary: "bg-primary text-white",
        secondary: "border border-4 border-primary text-primary",
      },
    },
  });

  interface Props {
    children?: Snippet;
    variant?: "primary" | "secondary";
    type?: "button" | "submit" | "reset" | null | undefined;
  }

  let { children, variant = "primary", type }: Props = $props();
</script>

<button {type} class={button({ variant })}>
  {@render children?.()}
</button>
