// See https://svelte.dev/docs/kit/types#app.d.ts

import type { User } from "@prisma/client";

// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      user: User | null;
    }
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
