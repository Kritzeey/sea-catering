import { deleteSessionTokenCookie } from "$lib/server/auth";
import { redirect, type Actions } from "@sveltejs/kit";

export const actions: Actions = {
  default: async (event) => {
    deleteSessionTokenCookie(event);

    throw redirect(302, "/");
  },
};
