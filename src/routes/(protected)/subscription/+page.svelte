<script>
  import { Phone, User } from "@lucide/svelte";

  let selected = $state("diet");
</script>

<div class="flex min-h-dvh items-center justify-center">
  <form
    class="mx-auto flex w-full max-w-3xl flex-col items-center justify-center gap-4 rounded-2xl bg-white p-4"
  >
    <div class="grid grid-cols-2 gap-8">
      <div class="col-span-1 flex w-full flex-col gap-4">
        <label for="name"> Your Name* </label>
        <div class="relative w-full">
          <input
            name="name"
            type="text"
            id="name"
            placeholder="Your Name..."
            class="h-12 w-full rounded-3xl border p-4 px-12"
          />
          <User class="absolute top-[25%] left-4" />
        </div>
      </div>
      <div class="col-span-1 flex w-full flex-col gap-4">
        <label for="phone"> Active Phone Number* </label>
        <div class="relative w-full">
          <input
            name="phone"
            type="text"
            id="phone"
            placeholder="Your Phone Number..."
            class="h-12 w-full rounded-3xl border p-4 px-12"
          />
          <Phone class="absolute top-[25%] left-4" />
        </div>
      </div>
    </div>
    <div class="grid w-full grid-cols-3 gap-4">
      <input
      class="sr-only"
      type="radio"
      name="plan"
      value="diet"
      bind:group={selected}
    />
      <div
        class:border-primary={selected === "diet"}
        class="border-primary col-span-1 flex h-12 w-full items-center justify-center rounded-xl border p-4"
      >
        a
      </div>
      <div
        class:border-primary={selected === "protein"}
        class="border-primary col-span-1 flex h-12 w-full items-center justify-center rounded-xl border p-4"
      >
        b
      </div>
      <div
        class:border-primary={selected === "royal"}
        class="border-primary col-span-1 flex h-12 w-full items-center justify-center rounded-xl border p-4"
      >
        c
      </div>
    </div>
  </form>
</div>
