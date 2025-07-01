import prisma from "$lib/server/db/prisma";
import { fail, type Actions } from "@sveltejs/kit";
import { z } from "zod";
import * as bcrypt from "bcrypt";
import {
  createSession,
  generateToken,
  setSessionTokenCookie,
} from "$lib/server/auth";

const schema = z.object({
  email: z.string(),
  password: z.string(),
});

export const actions: Actions = {
  default: async (event) => {
    const formData = await event.request.formData();

    const data = Object.fromEntries(formData);

    const validation = schema.safeParse(data);

    if (!validation.success) {
      return fail(400, {
        errors: validation.error.flatten().fieldErrors,
      });
    }

    const { email, password } = validation.data;

    const user = await prisma.user.findUnique({ where: { email } });

    const error = { message: "Invalid credentials" };

    if (!user) {
      return fail(400, {
        error,
      });
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      return fail(400, {
        error,
      });
    }

    const token = generateToken();

    const session = await createSession(token, user.id);

    setSessionTokenCookie(event, token, session.expiresAt);
  },
};
