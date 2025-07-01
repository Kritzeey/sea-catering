<script lang="ts">
  import Navbar from "$lib/components/navbar.svelte";
  import "../app.css";

  let { data, children } = $props();
</script>

<main>
  <Navbar {data} />

  {@render children()}
</main>
