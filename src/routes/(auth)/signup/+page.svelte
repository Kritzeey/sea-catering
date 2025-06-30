<script>
  import Button from "$lib/components/button.svelte";
  import { AtSign, Eye, EyeClosed, Lock, User } from "@lucide/svelte";

  let showPassword = $state(false);
  let showConfirmPassword = $state(false);
</script>

<div class="flex h-dvh items-center justify-center">
  <form
    class="mx-auto flex w-full max-w-xl flex-col gap-8 rounded-2xl bg-white p-8 shadow-xs"
  >
    <span class="text-primary w-full text-center text-4xl font-bold">
      Create an Account
    </span>
    <div class="grid grid-cols-2 gap-4">
      <div class="col-span-1 flex flex-col gap-4">
        <label for="firstname"> First Name </label>
        <div class="relative w-full">
          <input
            type="text"
            id="firstname"
            placeholder="First Name..."
            class="h-12 w-full rounded-3xl border p-4 px-12"
          />
          <User class="absolute top-[25%] left-4" />
        </div>
      </div>
      <div class="col-span-1 flex flex-col gap-4">
        <label for="lastname"> Last Name </label>
        <div class="relative w-full">
          <input
            type="text"
            id="lastname"
            placeholder="Last Name..."
            class="h-12 w-full rounded-3xl border p-4 px-12"
          />
          <User class="absolute top-[25%] left-4" />
        </div>
      </div>
    </div>
    <div class="flex w-full flex-col gap-4">
      <label for="email"> Email </label>
      <div class="relative w-full">
        <input
          type="email"
          id="email"
          placeholder="Email..."
          class="h-12 w-full rounded-3xl border p-4 px-12"
        />
        <AtSign class="absolute top-[25%] left-4" />
      </div>
    </div>
    <div class="flex w-full flex-col gap-4">
      <label for="password"> Password </label>
      <div class="relative w-full">
        <input
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Password..."
          class="h-12 w-full rounded-3xl border p-4 px-12"
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
    </div>
    <div class="flex w-full flex-col gap-4">
      <label for="confirmpassword">Confirm Password </label>
      <div class="relative w-full">
        <input
          type={showPassword ? "text" : "password"}
          id="confirmpassword"
          placeholder="Confirm Password..."
          class="h-12 w-full rounded-3xl border p-4 px-12"
        />
        <Lock class="absolute top-[25%] left-4" />
        {#if showConfirmPassword}
          <Eye
            onclick={() => (showConfirmPassword = false)}
            class="absolute top-[25%] right-4 cursor-pointer hover:opacity-60"
          />
        {:else}
          <EyeClosed
            onclick={() => (showConfirmPassword = true)}
            class="absolute top-[25%] right-4 cursor-pointer hover:opacity-60"
          />
        {/if}
      </div>
    </div>
    <div class="flex w-full justify-center">
      <Button>Log in</Button>
    </div>
    <div class="flex w-full justify-center">
      Already have an account?&nbsp;<a
        href="/login"
        class="underline duration-200 hover:opacity-60">Log in</a
      >
    </div>
  </form>
</div>
