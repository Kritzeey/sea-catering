<script lang="ts">
  import type { Snippet } from "svelte";
  import { cva } from "class-variance-authority";

  const button = cva(
    "duration-200 cursor-pointer h-12 px-6 rounded-3xl border border-4 border-primary text-primary",
    {
      variants: {
        variant: {
          primary:
            "hover:bg-transparent hover:text-primary bg-primary text-white",
          secondary: "hover:bg-primary hover:text-white",
        },
      },
    },
  );

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
