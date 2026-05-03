import { component$, Slot } from "@builder.io/qwik";
import {
  Form,
  Link,
  routeAction$,
  useLocation,
} from "@builder.io/qwik-city";
import { Logo } from "../../../components/logo/logo";
import { ADMIN_COOKIE } from "../../../lib/admin-auth";

export const useAdminLogout = routeAction$(async (_, { cookie, redirect }) => {
  cookie.delete(ADMIN_COOKIE, { path: "/" });
  throw redirect(302, "/admin/login");
});

const TABS = [
  { href: "/admin/web", label: "Web Analytics" },
  { href: "/admin/performance", label: "Performance" },
  { href: "/admin/business", label: "Business Metrics" },
];

export default component$(() => {
  const logout = useAdminLogout();
  const location = useLocation();
  const currentPath = location.url.pathname.replace(/\/$/, "");

  return (
    <div class="bg-page-gradient min-h-screen text-white">
      <header class="border-border-primary sticky top-0 z-10 border-b bg-[#0c0e12]">
        <div class="flex items-center justify-between px-6 py-4">
          <div class="flex items-center gap-3">
            <Logo size="sm" />
            <span class="font-display text-[14px] font-semibold text-[#f7f7f7]">
              Admin
            </span>
          </div>
          <Form action={logout}>
            <button
              type="submit"
              disabled={logout.isRunning}
              class="font-ui rounded-full bg-[#6938ef] px-4 py-1.5 text-[13px] font-medium text-white transition-colors hover:bg-[#7b5bf8] disabled:cursor-not-allowed disabled:opacity-60"
            >
              Logout
            </button>
          </Form>
        </div>
        <nav class="flex gap-6 px-6">
          {TABS.map((tab) => {
            const isActive = currentPath === tab.href;
            return (
              <Link
                key={tab.href}
                href={tab.href}
                class={`font-ui border-b-2 py-3 text-[14px] transition-colors ${
                  isActive
                    ? "border-[#7a5af8] text-[#f7f7f7]"
                    : "border-transparent text-[#94979c] hover:text-[#f7f7f7]"
                }`}
              >
                {tab.label}
              </Link>
            );
          })}
        </nav>
      </header>
      <main>
        <Slot />
      </main>
    </div>
  );
});
