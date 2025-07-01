import prisma from "$lib/server/db/prisma";
import { fail, type Actions } from "@sveltejs/kit";
import * as bcrypt from "bcrypt";

export const actions: Actions = {
  default: async (event) => {
    const data = await event.request.formData();

    const email = data.get("email");
    const password = data.get("password");
    const firstName = data.get("firstName");
    const confirmPassword = data.get("confirmPassword");

    let errorFlag = false;

    let errors = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      confirmPassword: "",
    };

    if (!email) {
      errors.email = "Please fill in this field";
      errorFlag = true;
    }

    if (!password) {
      errors.password = "Please fill in this field";
      errorFlag = true;
    }

    if (!confirmPassword) {
      errors.confirmPassword = "Please fill in this field";
      errorFlag = true;
    }

    if (!firstName || firstName.toString().trim().length < 1) {
      errors.firstName = "Please fill in this field";
      errorFlag = true;
    }

    if (errorFlag) {
      return fail(400, { errors });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email: data.get("email")?.toString() },
    });

    if (existingUser) {
      errors.email = "Email is not available";
      return fail(400, { errors });
    }

    const hash = await bcrypt.hash(password!.toString(), 10);

    const user = await prisma.user.create({
      data: {
        email: email!.toString(),
        firstName: firstName!.toString(),
        password: hash,
      },
    });
  },
};
