import { component$ } from "@builder.io/qwik";
import { Logo } from "../logo/logo";

export const Footer = component$(() => {
  return (
    <footer class="flex items-center justify-between gap-2 px-4 py-8 sm:px-8">
      <Logo size="sm" />
      <p class="text-xs sm:text-sm">© 2026 Highstack. All rights reserved.</p>
    </footer>
  );
});
