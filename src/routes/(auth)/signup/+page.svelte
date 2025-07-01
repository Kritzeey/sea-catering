<script lang="ts">
  import Button from "$lib/components/button.svelte";
  import { AtSign, Eye, EyeClosed, Lock, User } from "@lucide/svelte";

  let { form } = $props();

  let showPassword = $state(false);
  let showConfirmPassword = $state(false);

  let password = $state("");
  let confirmPassword = $state("");
  let firstName = $state("");
  let lastName = $state("");
  let email = $state("");

  let passwordContainsUppercase = $derived(/[A-Z]/.test(password));
  let passwordContainsLowercase = $derived(/[a-z]/.test(password));
  let passwordContainsSpecial = $derived(/[@$!%*?&]/.test(password));
  let passwordContainsNumber = $derived(/\d/.test(password));
  let passwordLengthOK = $derived(password.length >= 8);
  let passwordMatches = $derived(password === confirmPassword);

  let validPassword = $derived(
    passwordContainsUppercase &&
      passwordContainsLowercase &&
      passwordContainsSpecial &&
      passwordContainsNumber &&
      passwordLengthOK,
  );
</script>

<div class="flex h-dvh items-center justify-center">
  <form
    method="post"
    class="mx-auto flex w-full max-w-xl flex-col gap-4 rounded-2xl bg-white px-8 py-6 shadow-xs"
  >
    <span class="text-primary w-full text-center text-4xl font-bold">
      Create an Account
    </span>
    <div class="grid grid-cols-2 gap-4">
      <div class="col-span-1 flex flex-col gap-4">
        <label for="firstName"> First Name* </label>
        <div class="relative w-full">
          <input
            bind:value={firstName}
            name="firstName"
            type="text"
            id="firstName"
            placeholder="First Name..."
            class="h-12 w-full rounded-3xl border p-4 px-12"
            class:text-red-500={form?.errors.firstName && !firstName}
          />
          <User class="absolute top-[25%] left-4" />
        </div>
        {#if form?.errors.firstName && !firstName}
          <span class="text-sm text-red-500">{form.errors.firstName}</span>
        {/if}
      </div>
      <div class="col-span-1 flex flex-col gap-4">
        <label for="lastName"> Last Name </label>
        <div class="relative w-full">
          <input
            bind:value={lastName}
            name="lastName"
            type="text"
            id="lastName"
            placeholder="Last Name..."
            class="h-12 w-full rounded-3xl border p-4 px-12"
            class:text-red-500={form?.errors.lastName && !lastName}
          />
          <User class="absolute top-[25%] left-4" />
        </div>
        {#if form?.errors.email && !lastName}
          <span class="text-sm text-red-500">{form.errors.lastName}</span>
        {/if}
      </div>
    </div>
    <div class="flex w-full flex-col gap-4">
      <label for="email"> Email* </label>
      <div class="relative w-full">
        <input
          bind:value={email}
          name="email"
          type="email"
          id="email"
          placeholder="Email..."
          class="h-12 w-full rounded-3xl border p-4 px-12"
          class:text-red-500={form?.errors.email && !email}
        />
        <AtSign class="absolute top-[25%] left-4" />
      </div>
      {#if form?.errors.email && !email}
        <span class="text-sm text-red-500">{form.errors.email}</span>
      {/if}
    </div>
    <div class="flex w-full flex-col gap-4">
      <label for="password"> Password* </label>
      <div class="relative w-full">
        <input
          name="password"
          bind:value={password}
          type={showPassword ? "text" : "password"}
          id="password"
          placeholder="Password..."
          class="h-12 w-full rounded-3xl border p-4 px-12"
          class:text-red-500={((password && !validPassword) ||
            form?.errors.password) &&
            !password}
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
      {#if form?.errors.email && !password}
        <span class="text-sm text-red-500">{form.errors.email}</span>
      {/if}
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
            {#if !passwordContainsNumber}
              <li class="text-sm text-red-500">• A number</li>
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
      <label for="confirmpassword">Confirm Password* </label>
      <div class="relative w-full">
        <input
          name="confirmpassword"
          bind:value={confirmPassword}
          type={showConfirmPassword ? "text" : "password"}
          id="confirmpassword"
          placeholder="Confirm Password..."
          class="h-12 w-full rounded-3xl border p-4 px-12"
          class:text-red-500={!passwordMatches || form?.errors.confirmPassword}
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
      {#if form?.errors.confirmPassword && passwordMatches && !confirmPassword && !confirmPassword}
        <span class="text-sm text-red-500">{form?.errors.confirmPassword}</span>
      {/if}
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
