import { component$ } from "@builder.io/qwik";
import { LuLinkedin } from "@qwikest/icons/lucide";
import { Logo } from "../logo/logo";

export const Footer = component$(() => {
  return (
    <footer class="flex items-center justify-between gap-2 px-4 py-8 sm:px-8">
      <Logo size="sm" />
      <a
        href="https://www.linkedin.com/company/highstackcasino/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Highstack on LinkedIn"
        class="text-[#94979c]"
        style={{ fontSize: "20px" }}
      >
        <LuLinkedin />
      </a>
      <p class="font-body text-[16px] text-[#94979c]">
        © 2026 Highstack. All rights reserved.
      </p>
    </footer>
  );
});
