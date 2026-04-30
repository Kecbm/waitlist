import { component$, useComputed$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { JobCard } from "../../components/job-card/job-card";
import { POSITIONS } from "../../data/positions";

const TAGS = ["All", "Product", "Engineering", "Marketing", "AI & Data"] as const;
type TagFilter = (typeof TAGS)[number];

export default component$(() => {
  const search = useSignal("");
  const activeTag = useSignal<TagFilter>("All");

  const filtered = useComputed$(() => {
    const query = search.value.toLowerCase().trim();
    return POSITIONS.filter((p) => {
      const matchesTag = activeTag.value === "All" || p.tag === activeTag.value;
      const matchesSearch = p.title.toLowerCase().includes(query);
      return matchesTag && matchesSearch;
    });
  });

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
          <input
            type="text"
            placeholder="Search positions..."
            aria-label="Search positions"
            value={search.value}
            onInput$={(_, el) => (search.value = el.value)}
            class="w-full rounded-full border px-4 py-2 text-sm"
          />
          <div class="flex flex-wrap gap-2">
            {TAGS.map((t) => (
              <button
                key={t}
                type="button"
                aria-pressed={activeTag.value === t}
                onClick$={() => (activeTag.value = t)}
                class={`rounded-full px-3 py-1 text-xs sm:text-sm ${
                  activeTag.value === t ? "border-2 font-medium" : "border"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <p class="text-sm">{filtered.value.length} open position(s)</p>
        </section>
        <section class="flex w-full max-w-3xl flex-col gap-4">
          {filtered.value.length === 0 ? (
            <p class="text-sm">No positions found.</p>
          ) : (
            filtered.value.map((p) => (
              <JobCard
                key={p.slug}
                slug={p.slug}
                title={p.title}
                location={p.location}
                tag={p.tag}
                description={p.cardDescription ?? p.intro[0] ?? ""}
              />
            ))
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Jobs | Highstack",
};
