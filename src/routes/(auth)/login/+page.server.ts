import prisma from "$lib/server/db/prisma";
import { fail, redirect, type Actions } from "@sveltejs/kit";
import { z } from "zod";
import * as bcrypt from "bcrypt";
import {
  createSession,
  generateToken,
  setSessionTokenCookie,
} from "$lib/server/auth";

const schema = z.object({
  email: z.string().trim().min(1, "Please fill in this field"),
  password: z.string().trim().min(1, "Please fill in this field"),
});

const dummyHash =
  "$2b$10$k7DBVt5lwfER3P/wJplZgexJJ0hO87pYwmc6ljIpte8bLKEgrwf/S";

type LoginFormErrors = z.inferFlattenedErrors<typeof schema>["fieldErrors"];

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

    const hashToCompare = user ? user.password : dummyHash;

    const valid = await bcrypt.compare(password, hashToCompare);

    const errors: LoginFormErrors = {
      email: ["Invalid credentials"],
      password: ["Invalid credentials"],
    };

    if (!user || !valid) {
      return fail(400, {
        errors,
      });
    }

    const token = generateToken();

    const session = await createSession(token, user.id);

    setSessionTokenCookie(event, token, session.expiresAt);

    throw redirect(302, "/dashboard");
  },
};
