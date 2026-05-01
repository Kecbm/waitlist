import { component$ } from "@builder.io/qwik";
import { Link, useLocation, type DocumentHead } from "@builder.io/qwik-city";
import { Header } from "../../../components/header/header";
import { Footer } from "../../../components/footer/footer";
import { ApplyForm } from "../../../components/apply-form/apply-form";
import { findPositionBySlug } from "../../../data/positions";

export default component$(() => {
  const loc = useLocation();
  const position = findPositionBySlug(loc.params.slug);

  if (!position) {
    return (
      <div class="flex min-h-screen flex-col">
        <Header ctaLabel="Subscribe" ctaHref="/" showCtaArrow={false} />
        <main class="flex flex-1 items-center justify-center px-4 py-8 text-center">
          <p>Position not found.</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div class="flex min-h-screen flex-col">
      <Header ctaLabel="Subscribe" ctaHref="/" showCtaArrow={false} />
      <main class="flex flex-1 flex-col items-center px-4 py-8 sm:px-8">
        <div class="grid w-full max-w-6xl gap-8 lg:grid-cols-3 lg:items-start">
          <article class="flex flex-col gap-6 lg:col-span-2">
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

            {position.intro.map((p, i) => (
              <p key={`intro-${i}`} class="text-sm sm:text-base">
                {p}
              </p>
            ))}

            {position.sections.map((s) => (
              <section key={s.heading} class="flex flex-col gap-2">
                <h2 class="text-lg font-medium sm:text-xl">{s.heading}</h2>
                {s.paragraphs?.map((p, i) => (
                  <p key={i} class="text-sm sm:text-base">
                    {p}
                  </p>
                ))}
                {s.items && (
                  <ul class="list-disc pl-5 text-sm sm:text-base">
                    {s.items.map((it, i) => (
                      <li key={i}>
                        {it.label ? <strong>{it.label}:</strong> : null}
                        {it.label ? " " : null}
                        {it.text}
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </article>

          <div class="lg:col-span-1">
            <ApplyForm />
          </div>
        </div>
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
