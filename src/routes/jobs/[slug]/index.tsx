import { component$ } from "@builder.io/qwik";
import { Link, useLocation, type DocumentHead } from "@builder.io/qwik-city";
import { LuArrowLeft } from "@qwikest/icons/lucide";
import { Header } from "../../../components/header/header";
import { Footer } from "../../../components/footer/footer";
import { ApplyForm } from "../../../components/apply-form/apply-form";
import { PageMain } from "../../../components/page-main/page-main";
import { findPositionBySlug, TAG_COLORS } from "../../../data/positions";

const BOLD_TERMS = [
  "Creator Casino",
  "Rooms",
  "drops/missions",
  "Originals",
  "certified game engines",
  "AI Host layer",
  "programmable incentives",
];

const escapeRegex = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const BOLD_PATTERN = new RegExp(
  "(" + BOLD_TERMS.map(escapeRegex).join("|") + ")",
  "g",
);

const renderWithBold = (text: string) => {
  return text.split(BOLD_PATTERN).map((part, i) => {
    if (BOLD_TERMS.includes(part)) {
      return (
        <strong key={i} class="font-bold text-[#f7f7f7]">
          {part}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
};

export default component$(() => {
  const loc = useLocation();
  const position = findPositionBySlug(loc.params.slug);
  const backHref = `/jobs${loc.url.search}`;

  if (!position) {
    return (
      <div class="flex min-h-screen flex-col">
        <Header ctaLabel="Subscribe" ctaHref="/" showCtaArrow={false} ctaVariant="primary" />
        <PageMain class="items-center justify-center text-center px-20! py-24! min-h-473">
          <p>Position not found.</p>
        </PageMain>
        <Footer />
      </div>
    );
  }

  return (
    <div class="flex min-h-screen flex-col">
      <Header ctaLabel="Subscribe" ctaHref="/" showCtaArrow={false} ctaVariant="primary" />
      <PageMain class="flex-col items-center px-20! py-24! min-h-473">
        <div class="grid w-full max-w-6xl gap-8 lg:grid-cols-3 lg:items-start">
          <article class="flex flex-col lg:col-span-2">
            <div class="flex min-h-36 w-full flex-col gap-6">
              <Link
                href={backHref}
                class="font-ui flex h-9 w-[164.03px] items-center gap-1.5 py-2 pr-3 pl-0 text-[14px] text-[#94979c]"
              >
                <LuArrowLeft />
                <span class="font-semibold whitespace-nowrap">Back to all positions</span>
              </Link>
              <span
                class={`font-ui inline-flex h-6 items-center justify-center self-start rounded-full px-2 py-0.5 text-[14px] font-semibold whitespace-nowrap ${TAG_COLORS[position.tag] ?? "border text-white"}`}
              >
                {position.tag}
              </span>
              <h1 class="font-display flex h-15 w-[487.29px] items-center whitespace-nowrap text-[48px] font-semibold text-[#f7f7f7]">
                {position.title}
              </h1>
            </div>

            {position.intro.map((p, i) =>
              i === 0 ? (
                <p
                  key={`intro-${i}`}
                  class="font-body mt-12 min-h-45 w-full text-[20px] text-[#94969c]"
                >
                  {renderWithBold(p)}
                </p>
              ) : (
                <p
                  key={`intro-${i}`}
                  class="font-body mt-12 w-full text-[16px] text-[#94969c]"
                >
                  {p}
                </p>
              ),
            )}

            {position.sections.map((s) => (
              <section key={s.heading} class="mt-12 flex flex-col gap-2">
                <h2 class="font-body flex h-6 items-center text-[20px] font-semibold text-[#f7f7f7]">
                  {s.heading}
                </h2>
                {s.paragraphs?.map((p, i) => (
                  <p key={i} class="font-body w-full text-[16px] text-[#94969c]">
                    {p}
                  </p>
                ))}
                {s.items && (
                  <ul class="font-body w-full list-disc pl-5 text-[16px] text-[#94969c]">
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
            <ApplyForm jobTitle={position.title} jobSlug={position.slug} />
          </div>
        </div>
      </PageMain>
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
