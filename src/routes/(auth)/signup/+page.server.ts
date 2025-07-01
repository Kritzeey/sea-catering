import {
  createSession,
  generateToken,
  setSessionTokenCookie,
} from "$lib/server/auth";
import prisma from "$lib/server/db/prisma";
import { fail, type Actions } from "@sveltejs/kit";
import * as bcrypt from "bcrypt";
import { z } from "zod";

const schema = z
  .object({
    firstName: z.string().trim().min(1, "Please fill in this field"),
    lastName: z.string().trim().optional(),
    email: z.string().trim().email("Please provide a valid email"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain an uppercase character")
      .regex(/[a-z]/, "Password must contain a lowercase character")
      .regex(/\d/, "Password must contain a number")
      .regex(/[@$!%*?&]/, "Password must contain a special character"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

type RegisterFormErrors = z.inferFlattenedErrors<typeof schema>["fieldErrors"];

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

    const { email, firstName, lastName, password } = validation.data;

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    const errors: RegisterFormErrors = { email: ["Email is not available"] };

    if (existingUser) {
      return fail(400, {
        errors,
        data: { firstName, lastName, email },
      });
    }

    const hash = await bcrypt.hash(password!.toString(), 10);

    const user = await prisma.user.create({
      data: {
        email: email!.toString(),
        firstName: firstName!.toString(),
        password: hash,
      },
    });

    const token = generateToken();

    const session = await createSession(token, user.id);

    setSessionTokenCookie(event, token, session.expiresAt);
  },
};
