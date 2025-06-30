import {
  deleteSessionTokenCookie,
  getUserFromId,
  setSessionTokenCookie,
  validateToken,
} from "$lib/server/auth";
import type { Handle } from "@sveltejs/kit";

export const handle: Handle = async ({ event, resolve }) => {
  const token = event.cookies.get("sessionId");

  if (!token) {
    event.locals.user = null;

    return resolve(event);
  }

  const session = await validateToken(token);

  if (!session) {
    event.locals.user = null;

    deleteSessionTokenCookie(event);

    return resolve(event);
  }

  setSessionTokenCookie(event, token, session.expiresAt);

  const user = await getUserFromId(session.userId);

  if (!user) {
    event.locals.user = null;

    deleteSessionTokenCookie(event);

    return resolve(event);
  }

  event.locals.user = user;

  return resolve(event);
};
