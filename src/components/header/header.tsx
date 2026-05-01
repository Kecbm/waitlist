import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { LuArrowRight } from "@qwikest/icons/lucide";
import { Logo } from "../logo/logo";

type HeaderProps = {
  ctaLabel?: string;
  ctaHref?: string;
  showCtaArrow?: boolean;
};

export const Header = component$<HeaderProps>(
  ({
    ctaLabel = "Open positions",
    ctaHref = "/jobs",
    showCtaArrow = true,
  }) => {
    return (
      <header class="flex items-center justify-between px-4 py-4 sm:px-8 sm:py-6">
        <Link href="/" aria-label="Highstack home">
          <Logo size="md" />
        </Link>
        <Link
          href={ctaHref}
          class="font-ui flex h-10.5 w-[149.38px] items-center justify-center gap-1.5 rounded-full border border-transparent bg-[#22262f] px-3.5 py-2.5 text-[14px] font-semibold whitespace-nowrap text-[#cecfd2] transition-colors hover:border-[#303139] hover:bg-[#393a42]"
        >
          {ctaLabel}
          {showCtaArrow && <LuArrowRight />}
        </Link>
      </header>
    );
  },
);
