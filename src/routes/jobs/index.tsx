import { component$, useComputed$, useSignal } from "@builder.io/qwik";
import { useLocation, useNavigate, type DocumentHead } from "@builder.io/qwik-city";
import { LuSearch } from "@qwikest/icons/lucide";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { JobCard } from "../../components/job-card/job-card";
import { PageMain } from "../../components/page-main/page-main";
import { POSITIONS } from "../../data/positions";

const TAGS = ["All", "Product", "Engineering", "Marketing", "AI & Data"] as const;
type TagFilter = (typeof TAGS)[number];

export default component$(() => {
  const loc = useLocation();
  const nav = useNavigate();
  const initialTag = (loc.url.searchParams.get("tag") ?? "All") as TagFilter;
  const initialQuery = loc.url.searchParams.get("q") ?? "";
  const search = useSignal(initialQuery);
  const activeTag = useSignal<TagFilter>(
    (TAGS as readonly string[]).includes(initialTag) ? initialTag : "All",
  );

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
      <Header ctaLabel="Subscribe" ctaHref="/" showCtaArrow={false} ctaVariant="primary" />
      <PageMain class="flex-col items-center">
        <div class="flex w-full max-w-3xl flex-col gap-10">
          <section class="flex flex-col items-center gap-4 text-center">
            <h1 class="font-display flex h-30 w-full flex-col items-center justify-center text-[48px] font-medium text-[#f7f7f7]">
              <span>Build the Future of</span>
              <span>Entertainments</span>
            </h1>
            <p class="font-body flex min-h-7.5 w-full items-center justify-center text-[20px] whitespace-nowrap text-[#94979c]">
              Join a team redefining what&apos;s possible at the intersection of AI, gaming, and culture.
            </p>
            <p class="font-body flex min-h-7.5 w-full max-w-[696.91px] items-center justify-center text-[20px] text-[#94979c]">
              We&apos;re building experiences for millions.
            </p>
          </section>
          <section class="flex flex-col gap-4">
            <div class="relative w-full">
              <span
                class="text-text-placeholder pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2"
                style={{ fontSize: "20px" }}
              >
                <LuSearch />
              </span>
              <input
                type="text"
                placeholder="Search positions..."
                aria-label="Search positions"
                value={search.value}
                onInput$={(_, el) => {
                  search.value = el.value;
                  const url = new URL(window.location.href);
                  if (el.value) url.searchParams.set("q", el.value);
                  else url.searchParams.delete("q");
                  nav(url.pathname + url.search, { replaceState: true });
                }}
                class="border-border-primary placeholder:text-text-placeholder h-11.5 w-full rounded-md border bg-[#0c0e12] py-2.5 pr-3.5 pl-14.75 text-[16px] text-white transition-colors focus:border-2 focus:border-[#7d70cc] focus:outline-none"
              />
            </div>
            <div class="flex flex-wrap gap-2">
              {TAGS.map((t) => (
                <button
                  key={t}
                  type="button"
                  aria-pressed={activeTag.value === t}
                  onClick$={() => {
                    activeTag.value = t;
                    const url = new URL(window.location.href);
                    if (t === "All") url.searchParams.delete("tag");
                    else url.searchParams.set("tag", t);
                    nav(url.pathname + url.search, { replaceState: true });
                  }}
                  class={`font-ui inline-flex h-7.5 items-center rounded-full border-2 bg-[#0c0e12] px-3 py-1 text-[14px] font-semibold text-white transition-colors ${
                    activeTag.value === t
                      ? "border-[#7d70cc]"
                      : "border-border-primary hover:border-[#7d70cc]"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
            <p class="text-text-placeholder text-sm">{filtered.value.length} open position(s)</p>
          </section>
          <section class="flex flex-col gap-4">
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
        </div>
      </PageMain>
      <Footer />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Jobs | Highstack",
};
