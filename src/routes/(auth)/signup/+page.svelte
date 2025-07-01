<script lang="ts">
  import Button from "$lib/components/button.svelte";
  import { AtSign, Eye, EyeClosed, Lock, User } from "@lucide/svelte";

  let showPassword = $state(false);
  let showConfirmPassword = $state(false);

  let password = $state("");
  let confirmPassword = $state("");

  let passwordContainsUppercase = $derived(/[A-Z]/.test(password));
  let passwordContainsLowercase = $derived(/[a-z]/.test(password));
  let passwordContainsSpecial = $derived(/[@$!%*?&]/.test(password));
  let passwordLengthOK = $derived(password.length >= 8);
  let passwordMatches = $derived(password === confirmPassword);

  let validPassword = $derived(
    passwordContainsUppercase &&
      passwordContainsLowercase &&
      passwordContainsSpecial &&
      passwordLengthOK,
  );
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
          bind:value={password}
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Password..."
          class="h-12 w-full rounded-3xl border p-4 px-12"
          class:text-red-500={password && !validPassword}
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
      {#if password && !validPassword}
        <div class="text-red-500">
          Password must contain:
          <ul>
            {#if !passwordContainsUppercase}
              <li class="text-sm text-red-500">• An uppercase character</li>
            {/if}
            {#if !passwordContainsLowercase}
              <li class="text-sm text-red-500">• A lowercase character</li>
            {/if}
            {#if !passwordContainsSpecial}
              <li class="text-sm text-red-500">
                • A special character [@$!%*?&]
              </li>
            {/if}
            {#if !passwordLengthOK}
              <li class="text-sm text-red-500">• A minimum of 8 character</li>
            {/if}
          </ul>
        </div>
      {/if}
    </div>
    <div class="flex w-full flex-col gap-4">
      <label for="confirmpassword">Confirm Password </label>
      <div class="relative w-full">
        <input
          bind:value={confirmPassword}
          type={showConfirmPassword ? "text" : "password"}
          id="confirmpassword"
          placeholder="Confirm Password..."
          class="h-12 w-full rounded-3xl border p-4 px-12"
          class:text-red-500={confirmPassword && !passwordMatches}
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
      {#if !passwordMatches}
        <span class="text-sm text-red-500">Passwords don't match</span>
      {/if}
    </div>
    <div class="flex w-full justify-center">
      <Button>Sign Up</Button>
    </div>
    <div class="flex w-full justify-center">
      Already have an account?&nbsp;<a
        href="/login"
        class="underline duration-200 hover:opacity-60">Log in</a
      >
    </div>
  </form>
</div>
