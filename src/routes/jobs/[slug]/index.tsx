import { component$ } from "@builder.io/qwik";
import { Link, useLocation, type DocumentHead } from "@builder.io/qwik-city";
import { Header } from "../../../components/header/header";
import { Footer } from "../../../components/footer/footer";
import { findPositionBySlug } from "../../../data/positions";

export default component$(() => {
  const loc = useLocation();
  const position = findPositionBySlug(loc.params.slug);

  if (!position) {
    return (
      <div class="flex min-h-screen flex-col">
        <Header ctaLabel="Subscribe" ctaHref="/" />
        <main class="flex flex-1 items-center justify-center px-4 py-8 text-center">
          <p>Position not found.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div class="flex min-h-screen flex-col">
      <Header ctaLabel="Subscribe" ctaHref="/" />
      <main class="flex flex-1 flex-col items-center px-4 py-8 sm:px-8">
        <article class="flex w-full max-w-3xl flex-col gap-4">
          <Link
            href="/jobs"
            class="self-start text-sm underline sm:text-base"
          >
            ‹ back to all positions
          </Link>
          <span class="self-start rounded-full border px-2.5 py-0.5 text-xs whitespace-nowrap">
            {position.tag}
          </span>
          <h1 class="text-2xl font-medium sm:text-3xl">{position.title}</h1>
          <p class="text-sm sm:text-base">{position.description}</p>
        </article>
      </main>
      <Footer />
    </div>
  );
});

export const head: DocumentHead = ({ params }) => {
  const position = findPositionBySlug(params.slug);
  return {
    title: position
      ? `${position.title} | Highstack`
      : "Position not found | Highstack",
  };
};
