import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { JobCard } from "../../components/job-card/job-card";
import { POSITIONS } from "../../data/positions";

export default component$(() => {
  return (
    <div class="flex min-h-screen flex-col">
      <Header ctaLabel="Subscribe" ctaHref="/" />
      <main class="flex flex-1 flex-col items-center gap-10 px-4 py-8 sm:px-8">
        <section class="flex w-full max-w-3xl flex-col items-center gap-4 text-center">
          <h1 class="text-3xl font-medium sm:text-4xl">
            Build the Future of Entertainments
          </h1>
          <p class="text-base sm:text-lg">
            Join a team redefining what&apos;s possible at the intersection of
            AI, gaming, and culture.
          </p>
          <p class="text-base sm:text-lg">
            We&apos;re building experiences for millions.
          </p>
        </section>
        <section class="flex w-full max-w-3xl flex-col gap-4">
          {POSITIONS.map((p) => (
            <JobCard key={p.slug} {...p} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Jobs | Highstack",
};
