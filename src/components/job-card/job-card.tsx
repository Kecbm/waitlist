import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { LuArrowRight } from "@qwikest/icons/lucide";

type JobCardProps = {
  slug: string;
  title: string;
  location: string;
  tag: string;
  description: string;
};

const TAG_COLORS: Record<string, string> = {
  Product: "bg-[#27115f] text-[#bdb4fe] border-[1.5px] border-[#4a1fb8]",
  Engineering: "bg-[#27115f] text-[#bdb4fe] border-[1.5px] border-[#4a1fb8]",
  Marketing: "bg-[#4e0d30] text-[#faa7e0] border-[1.5px] border-[#9e165f]",
  "AI & Data": "bg-[#4e1d09] text-[#fec84b] border-[1.5px] border-[#93370d]",
};

export const JobCard = component$<JobCardProps>(
  ({ slug, title, location, tag, description }) => {
    const tagClass = TAG_COLORS[tag] ?? "border text-white";
    return (
      <article class="group relative flex h-62 flex-col gap-3 rounded-2xl border-2 border-transparent bg-[#13161b] p-8 transition-colors hover:border-[#4c457f] hover:bg-linear-to-r hover:from-[#211e32] hover:to-[#10121b] hover:to-70%">
        <header class="flex items-start justify-between gap-3">
          <div class="flex flex-col gap-1">
            <h2 class="font-ui h-7.5 text-[20px] text-[#f7f7f7]">{title}</h2>
            <p class="font-ui flex h-6 items-center text-[16px] text-[#94979c]">📍 {location}</p>
          </div>
          <span
            class={`font-ui inline-flex h-7.5 items-center rounded-full px-3 py-1 text-[14px] font-semibold whitespace-nowrap ${tagClass}`}
          >
            {tag}
          </span>
        </header>
        <p class="font-ui line-clamp-2 h-12 w-full overflow-hidden text-[16px] text-[#94979c]">
          {description}
        </p>
        <Link
          href={`/jobs/${slug}`}
          class="flex h-9 w-[135.09px] items-center justify-center gap-1.5 self-start rounded-full px-3 py-2 text-[#94979c] transition-colors group-hover:bg-[#21262e] after:absolute after:inset-0 after:content-['']"
        >
          <span class="font-ui px-0.5 text-[14px] font-semibold">View Details</span>
          <LuArrowRight />
        </Link>
      </article>
    );
  },
);
