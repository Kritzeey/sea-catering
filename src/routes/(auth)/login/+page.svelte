<script lang="ts">
  import { enhance } from "$app/forms";
  import Button from "$lib/components/button.svelte";
  import { AtSign, Eye, EyeClosed, Lock } from "@lucide/svelte";

  let { form } = $props();

  let showPassword = $state(false);
</script>

<div class="flex h-dvh items-center justify-center">
  <form
    use:enhance
    method="post"
    class="mx-auto flex w-full max-w-xl flex-col gap-8 rounded-2xl bg-white p-8 shadow-xs"
  >
    <span class="text-primary w-full text-center text-4xl font-bold">
      Welcome Back!
    </span>
    <div class="flex w-full flex-col gap-4">
      <label for="email"> Email </label>
      <div class="relative w-full">
        <input
          name="email"
          type="email"
          id="email"
          placeholder="Email..."
          class="h-12 w-full rounded-3xl border p-4 px-12"
          class:text-red-500={form?.errors.email}
        />
        <AtSign class="absolute top-[25%] left-4" />
      </div>
      {#if form?.errors?.email}
        <span class="text-sm text-red-500">{form.errors.email[0]}</span>
      {/if}
    </div>
    <div class="flex w-full flex-col gap-4">
      <label for="password"> Password </label>
      <div class="relative w-full">
        <input
          name="password"
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Password..."
          class="h-12 w-full rounded-3xl border p-4 px-12"
          class:text-red-500={form?.errors?.password}
        />
        <Lock class="absolute top-[25%] left-4" />
        {#if showPassword}
          <Eye
            onclick={() => (showPassword = false)}
            class="absolute top-[25%] right-4 cursor-pointer hover:opacity-60"
          />
        {:else}
          <EyeClosed
            onclick={() => (showPassword = true)}
            class="absolute top-[25%] right-4 cursor-pointer hover:opacity-60"
          />
        {/if}
      </div>
      {#if form?.errors?.password}
        <span class="text-sm text-red-500">{form.errors.password[0]}</span>
      {/if}
    </div>
    <div class="flex w-full justify-center">
      <Button>Log in</Button>
    </div>
    <div class="flex w-full justify-center">
      Don&apos;t have an account?&nbsp;<a
        href="/signup"
        class="underline duration-200 hover:opacity-60">Sign up</a
      >
    </div>
  </form>
</div>
