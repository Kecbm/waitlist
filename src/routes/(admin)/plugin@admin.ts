import type { RequestHandler } from "@builder.io/qwik-city";
import { ADMIN_COOKIE, getExpectedCookieValue } from "../../lib/admin-auth";

export const onRequest: RequestHandler = async ({
  url,
  cookie,
  redirect,
  env,
}) => {
  if (url.pathname === "/admin/login" || url.pathname === "/admin/login/") {
    return;
  }

  const session = cookie.get(ADMIN_COOKIE);
  const expected = await getExpectedCookieValue(env);

  if (!session || session.value !== expected) {
    throw redirect(302, "/admin/login");
  }
};
