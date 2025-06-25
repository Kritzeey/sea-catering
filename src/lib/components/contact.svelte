<script>
  import { Clock4, Phone, Send, User } from "@lucide/svelte";
  import Button from "./button.svelte";
</script>

<div
  id="contact"
  class="flex h-dvh w-full flex-col items-center justify-center gap-8"
>
  <span class="text-primary text-6xl font-bold"> Contact Us </span>

  <div class="mx-auto flex w-full max-w-4xl gap-8">
    <div class="flex h-70 w-full flex-col gap-8 rounded-md bg-white p-4">
      <span class="text-primary w-full text-center text-xl font-medium"
        >Contact Info</span
      >
      <div class="flex h-full flex-col justify-between">
        <div class="flex gap-4">
          <div
            class="text-primary bg-primary/10 flex size-12 items-center justify-center rounded-md"
          >
            <User />
          </div>
          <div class="flex flex-col items-center justify-between">
            <span class="w-full font-bold">Contact Person</span>
            <span class="w-full">Brian</span>
          </div>
        </div>
        <div class="flex gap-4">
          <div
            class="text-primary bg-primary/10 flex size-12 items-center justify-center rounded-md"
          >
            <Phone />
          </div>
          <div class="flex flex-col items-center justify-between">
            <span class="w-full font-bold">Phone Number</span>
            <span class="w-full">0812 3456 7890</span>
          </div>
        </div>
        <div class="flex gap-4">
          <div
            class="text-primary bg-primary/10 flex size-12 items-center justify-center rounded-md"
          >
            <Clock4 />
          </div>
          <div class="flex flex-col items-center justify-between">
            <span class="w-full font-bold">Active Hours</span>
            <span class="w-full">08.00 - 18.00 UTC + 7</span>
          </div>
        </div>
      </div>
    </div>
    <div
      class="flex h-70 w-full flex-col items-center gap-4 rounded-md bg-white p-4"
    >
      <span class="text-primary text-xl font-medium"> Send us a message! </span>
      <form class="flex h-full w-full flex-col justify-between gap-4">
        <input
          placeholder="Your Name"
          class="border-foreground/30 w-full rounded-sm border p-2 px-4"
        />
        <textarea
          placeholder="Your Message"
          class="border-foreground/30 h-full w-full rounded-sm border p-2 px-4"
        >
        </textarea>
        <div class="flex w-full justify-center">
          <Button type="submit">
            <div class="flex items-center justify-center gap-4 font-semibold">
              <Send /> Submit
            </div>
          </Button>
        </div>
      </form>
    </div>
  </div>
</div>
