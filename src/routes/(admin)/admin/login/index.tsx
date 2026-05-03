import { component$ } from "@builder.io/qwik";
import {
  Form,
  routeAction$,
  z,
  zod$,
  type DocumentHead,
} from "@builder.io/qwik-city";
import { LuLock } from "@qwikest/icons/lucide";
import { Logo } from "../../../../components/logo/logo";
import {
  ADMIN_COOKIE,
  adminCookieOptions,
  getExpectedCookieValue,
} from "../../../../lib/admin-auth";

export const useAdminLogin = routeAction$(
  async (data, { fail, env, cookie, redirect }) => {
    const expectedPw = env.get("ADMIN_PASSWORD");
    if (!expectedPw || data.password !== expectedPw) {
      return fail(401, { message: "Invalid password" });
    }
    const cookieValue = await getExpectedCookieValue(env);
    cookie.set(ADMIN_COOKIE, cookieValue, adminCookieOptions);
    throw redirect(302, "/admin");
  },
  zod$({
    password: z.string().min(1),
  }),
);

export default component$(() => {
  const login = useAdminLogin();

  return (
    <div class="bg-page-gradient flex min-h-screen items-center justify-center px-4">
      <section class="flex w-full max-w-sm flex-col items-center gap-6">
        <Logo size="md" />
        <h1 class="font-display text-[28px] font-bold text-[#f7f7f7]">
          Admin Sign In
        </h1>
        <Form action={login} class="flex w-full flex-col gap-3">
          <div class="relative">
            <span
              class="text-text-placeholder pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2"
              style={{ fontSize: "20px" }}
            >
              <LuLock />
            </span>
            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="current-password"
              required
              class="border-border-primary placeholder:text-text-placeholder h-11.5 w-full rounded-md border bg-[#0c0e12] py-2.5 pr-3.5 pl-14.75 text-[16px] text-white transition-colors focus:border-2 focus:border-[#7d70cc] focus:outline-none"
            />
          </div>
          <button
            type="submit"
            disabled={login.isRunning}
            class="font-ui rounded-full bg-[#6938ef] px-4 py-2.5 text-[16px] font-medium text-[#ffffff] transition-colors hover:bg-[#7b5bf8] disabled:cursor-not-allowed disabled:opacity-60"
          >
            Sign in
          </button>
          {login.value?.failed && (
            <p class="text-center text-sm text-[#f87171]" role="alert">
              {(login.value as { message?: string }).message}
            </p>
          )}
        </Form>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Admin Sign In | Highstack",
  meta: [{ name: "robots", content: "noindex, nofollow" }],
};
