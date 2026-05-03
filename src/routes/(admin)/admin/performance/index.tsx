import { component$ } from "@builder.io/qwik";
import { routeLoader$, type DocumentHead } from "@builder.io/qwik-city";
import { LuGauge, LuExternalLink } from "@qwikest/icons/lucide";

export const useVercelUrl = routeLoader$(({ env }) => {
  const url = env.get("VERCEL_PROJECT_URL");
  if (!url) return null;
  return url.replace(/\/$/, "");
});

export default component$(() => {
  const vercelUrl = useVercelUrl();
  const speedUrl = vercelUrl.value ? `${vercelUrl.value}/speed-insights` : null;

  return (
    <div class="mx-auto max-w-6xl px-6 py-8">
      <h1 class="font-display text-[24px] font-bold text-[#f7f7f7]">
        Performance
      </h1>
      <p class="font-body mt-2 text-[#94979c]">
        Core Web Vitals (LCP, CLS, INP) and other performance metrics —
        tracked via Vercel.
      </p>

      <div class="border-border-primary mt-6 rounded-lg border bg-[#0c0e12] p-6">
        <div class="flex items-start gap-4">
          <div class="text-[32px] text-[#7a5af8]">
            <LuGauge />
          </div>
          <div class="flex-1">
            <h2 class="font-display text-[18px] font-semibold text-[#f7f7f7]">
              Vercel Speed Insights
            </h2>
            <p class="font-body mt-1 text-[14px] text-[#94979c]">
              View Core Web Vitals (LCP, CLS, INP, FCP, TTFB) by route,
              device, and country in your Vercel dashboard.
            </p>

            {speedUrl ? (
              <a
                href={speedUrl}
                target="_blank"
                rel="noopener noreferrer"
                class="font-ui mt-4 inline-flex items-center gap-2 rounded-full bg-[#6938ef] px-4 py-2 text-[14px] font-medium text-white transition-colors hover:bg-[#7b5bf8]"
              >
                Open Speed Insights
                <LuExternalLink />
              </a>
            ) : (
              <p class="font-body mt-4 text-[13px] text-[#f87171]" role="alert">
                Set the <code class="font-mono">VERCEL_PROJECT_URL</code> env
                var to enable this link.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Performance | Admin",
  meta: [{ name: "robots", content: "noindex, nofollow" }],
};
