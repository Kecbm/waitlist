import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Logo } from "../logo/logo";

type HeaderProps = {
  ctaLabel?: string;
  ctaHref?: string;
};

export const Header = component$<HeaderProps>(
  ({ ctaLabel = "Open positions ›", ctaHref = "/jobs" }) => {
    return (
      <header class="flex items-center justify-between px-4 py-4 sm:px-8 sm:py-6">
        <Link href="/" aria-label="Highstack home">
          <Logo size="md" />
        </Link>
        <Link
          href={ctaHref}
          class="rounded-full border px-3 py-1.5 text-sm sm:px-4 sm:py-2"
        >
          {ctaLabel}
        </Link>
      </header>
    );
  },
);
