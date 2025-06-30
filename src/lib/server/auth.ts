import { createHash, randomBytes } from "crypto";
import prisma from "./db/prisma";
import type { RequestEvent } from "@sveltejs/kit";

export function generateToken() {
  return randomBytes(32).toString("base64url");
}

export async function createSession(token: string, userId: string) {
  const hash = createHash("sha256").update(token).digest("base64url");

  const DAY_IN_MS = 1000 * 60 * 60 * 24;

  const session = await prisma.session.create({
    data: {
      sessionId: hash,
      userId,
      expiresAt: new Date(Date.now() + DAY_IN_MS),
    },
  });

  return session;
}

export async function validateToken(token: string) {
  const sessionId = createHash("sha256").update(token).digest("base64url");

  const session = await prisma.session.findUnique({ where: { sessionId } });

  if (!session) {
    return null;
  }

  const expired = Date.now() >= session.expiresAt.getTime();

  if (expired) {
    return null;
  }

  return session;
}

export async function invalidateToken(sessionId: string) {
  await prisma.session.delete({ where: { sessionId } });
}

export function setSessionTokenCookie(
  event: RequestEvent,
  token: string,
  expiresAt: Date,
) {
  event.cookies.set("sessionId", token, {
    expires: expiresAt,
    path: "/",
  });
}

export function deleteSessionTokenCookie(event: RequestEvent) {
  event.cookies.delete("sessionId", {
    path: "/",
  });
}

export async function getUserFromId(sessionId: string) {
  return await prisma.user.findUnique({ where: { id: sessionId } });
}
