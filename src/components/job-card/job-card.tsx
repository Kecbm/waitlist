import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

type JobCardProps = {
  slug: string;
  title: string;
  location: string;
  tag: string;
  description: string;
};

export const JobCard = component$<JobCardProps>(
  ({ slug, title, location, tag, description }) => {
    return (
      <article class="flex flex-col gap-3 rounded-2xl border p-5">
        <header class="flex items-start justify-between gap-3">
          <div class="flex flex-col gap-1">
            <h2 class="text-base font-medium sm:text-lg">{title}</h2>
            <p class="text-xs sm:text-sm">📍 {location}</p>
          </div>
          <span class="rounded-full border px-2.5 py-0.5 text-xs whitespace-nowrap">
            {tag}
          </span>
        </header>
        <p class="text-sm">{description}</p>
        <Link
          href={`/jobs/${slug}`}
          class="self-end rounded-full border px-3 py-1.5 text-xs font-medium sm:text-sm"
        >
          View Details ›
        </Link>
      </article>
    );
  },
);
