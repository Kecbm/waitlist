import { $, component$ } from "@builder.io/qwik";
import {
  routeAction$,
  routeLoader$,
  type DocumentHead,
} from "@builder.io/qwik-city";
import { LuDownload, LuExternalLink } from "@qwikest/icons/lucide";
import { getSupabase } from "../../../../lib/supabase";

const SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;
const ROW_LIMIT = 50;

const formatDate = (iso: string): string =>
  new Date(iso).toISOString().slice(0, 16).replace("T", " ");

const csvEscape = (value: unknown): string =>
  `"${String(value ?? "").replace(/"/g, '""')}"`;

export const useBusinessData = routeLoader$(async ({ env }) => {
  const supabase = getSupabase(env);
  const sevenDaysAgo = new Date(Date.now() - SEVEN_DAYS_MS).toISOString();

  const [
    waitlistTotal,
    waitlistRecent,
    applicationsTotal,
    applicationsRecent,
    waitlistList,
    applicationsList,
  ] = await Promise.all([
    supabase
      .from("waitlist_signups")
      .select("*", { count: "exact", head: true }),
    supabase
      .from("waitlist_signups")
      .select("*", { count: "exact", head: true })
      .gte("created_at", sevenDaysAgo),
    supabase
      .from("job_applications")
      .select("*", { count: "exact", head: true }),
    supabase
      .from("job_applications")
      .select("*", { count: "exact", head: true })
      .gte("created_at", sevenDaysAgo),
    supabase
      .from("waitlist_signups")
      .select("email, created_at")
      .order("created_at", { ascending: false })
      .limit(ROW_LIMIT),
    supabase
      .from("job_applications")
      .select("created_at, job_slug, full_name, email, linkedin_url, resume_url")
      .order("created_at", { ascending: false })
      .limit(ROW_LIMIT),
  ]);

  return {
    kpis: {
      waitlistTotal: waitlistTotal.count ?? 0,
      waitlistRecent: waitlistRecent.count ?? 0,
      applicationsTotal: applicationsTotal.count ?? 0,
      applicationsRecent: applicationsRecent.count ?? 0,
    },
    waitlist: (waitlistList.data ?? []) as Array<{
      email: string;
      created_at: string;
    }>,
    applications: (applicationsList.data ?? []) as Array<{
      created_at: string;
      job_slug: string;
      full_name: string;
      email: string;
      linkedin_url: string;
      resume_url: string;
    }>,
  };
});

export const useExportWaitlist = routeAction$(async (_, { env }) => {
  const supabase = getSupabase(env);
  const { data } = await supabase
    .from("waitlist_signups")
    .select("email, created_at")
    .order("created_at", { ascending: false });

  const rows = data ?? [];
  const header = "email,created_at";
  const lines = rows.map(
    (r) => `${csvEscape(r.email)},${csvEscape(r.created_at)}`,
  );
  return {
    csv: [header, ...lines].join("\n"),
    filename: `waitlist-${new Date().toISOString().slice(0, 10)}.csv`,
  };
});

export const useExportApplications = routeAction$(async (_, { env }) => {
  const supabase = getSupabase(env);
  const { data } = await supabase
    .from("job_applications")
    .select(
      "created_at, job_slug, full_name, email, linkedin_url, resume_url",
    )
    .order("created_at", { ascending: false });

  const rows = data ?? [];
  const header =
    "created_at,job_slug,full_name,email,linkedin_url,resume_url";
  const lines = rows.map((r) =>
    [
      csvEscape(r.created_at),
      csvEscape(r.job_slug),
      csvEscape(r.full_name),
      csvEscape(r.email),
      csvEscape(r.linkedin_url),
      csvEscape(r.resume_url),
    ].join(","),
  );
  return {
    csv: [header, ...lines].join("\n"),
    filename: `applications-${new Date().toISOString().slice(0, 10)}.csv`,
  };
});

const KpiCard = component$<{ label: string; value: number }>(
  ({ label, value }) => (
    <div class="border-border-primary rounded-lg border bg-[#0c0e12] p-4">
      <p class="font-ui text-[12px] tracking-wide text-[#94979c] uppercase">
        {label}
      </p>
      <p class="font-display mt-1 text-[28px] font-bold text-[#f7f7f7]">
        {value.toLocaleString()}
      </p>
    </div>
  ),
);

export default component$(() => {
  const data = useBusinessData();
  const exportWaitlist = useExportWaitlist();
  const exportApplications = useExportApplications();

  const downloadCsv = $((csv: string, filename: string) => {
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  });

  const handleExportWaitlist = $(async () => {
    const { value } = await exportWaitlist.submit();
    if (value.csv) await downloadCsv(value.csv, value.filename);
  });

  const handleExportApplications = $(async () => {
    const { value } = await exportApplications.submit();
    if (value.csv) await downloadCsv(value.csv, value.filename);
  });

  const { kpis, waitlist, applications } = data.value;

  return (
    <div class="mx-auto max-w-6xl px-6 py-8">
      <h1 class="font-display text-[24px] font-bold text-[#f7f7f7]">
        Business Metrics
      </h1>
      <p class="font-body mt-2 text-[#94979c]">
        Waitlist signups, job applications, and KPIs.
      </p>

      <div class="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
        <KpiCard label="Total Signups" value={kpis.waitlistTotal} />
        <KpiCard label="Signups Last 7d" value={kpis.waitlistRecent} />
        <KpiCard label="Total Applications" value={kpis.applicationsTotal} />
        <KpiCard label="Apps Last 7d" value={kpis.applicationsRecent} />
      </div>

      <section class="mt-10">
        <div class="mb-3 flex items-center justify-between">
          <h2 class="font-display text-[18px] font-semibold text-[#f7f7f7]">
            Recent Waitlist Signups
          </h2>
          <button
            onClick$={handleExportWaitlist}
            disabled={exportWaitlist.isRunning}
            class="font-ui inline-flex items-center gap-1.5 rounded-full border border-[#3a3548] bg-[#0c0e12] px-3 py-1.5 text-[13px] font-medium text-[#f7f7f7] transition-colors hover:bg-[#171a21] disabled:cursor-not-allowed disabled:opacity-60"
          >
            <LuDownload />
            Export CSV
          </button>
        </div>
        <div class="border-border-primary overflow-hidden rounded-lg border bg-[#0c0e12]">
          {waitlist.length === 0 ? (
            <p class="font-body p-6 text-center text-[14px] text-[#94979c]">
              No waitlist signups yet.
            </p>
          ) : (
            <table class="w-full text-left">
              <thead class="border-border-primary border-b bg-[#171a21]">
                <tr>
                  <th class="font-ui px-4 py-3 text-[12px] font-semibold tracking-wide text-[#94979c] uppercase">
                    Email
                  </th>
                  <th class="font-ui px-4 py-3 text-[12px] font-semibold tracking-wide text-[#94979c] uppercase">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                {waitlist.map((row) => (
                  <tr
                    key={`${row.email}-${row.created_at}`}
                    class="border-border-primary border-b last:border-b-0"
                  >
                    <td class="font-body px-4 py-3 text-[14px] text-[#f7f7f7]">
                      {row.email}
                    </td>
                    <td class="px-4 py-3 font-mono text-[13px] text-[#94979c]">
                      {formatDate(row.created_at)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>

      <section class="mt-10">
        <div class="mb-3 flex items-center justify-between">
          <h2 class="font-display text-[18px] font-semibold text-[#f7f7f7]">
            Recent Applications
          </h2>
          <button
            onClick$={handleExportApplications}
            disabled={exportApplications.isRunning}
            class="font-ui inline-flex items-center gap-1.5 rounded-full border border-[#3a3548] bg-[#0c0e12] px-3 py-1.5 text-[13px] font-medium text-[#f7f7f7] transition-colors hover:bg-[#171a21] disabled:cursor-not-allowed disabled:opacity-60"
          >
            <LuDownload />
            Export CSV
          </button>
        </div>
        <div class="border-border-primary overflow-hidden rounded-lg border bg-[#0c0e12]">
          {applications.length === 0 ? (
            <p class="font-body p-6 text-center text-[14px] text-[#94979c]">
              No applications yet.
            </p>
          ) : (
            <div class="overflow-x-auto">
              <table class="w-full text-left">
                <thead class="border-border-primary border-b bg-[#171a21]">
                  <tr>
                    <th class="font-ui px-4 py-3 text-[12px] font-semibold tracking-wide text-[#94979c] uppercase">
                      Date
                    </th>
                    <th class="font-ui px-4 py-3 text-[12px] font-semibold tracking-wide text-[#94979c] uppercase">
                      Job
                    </th>
                    <th class="font-ui px-4 py-3 text-[12px] font-semibold tracking-wide text-[#94979c] uppercase">
                      Name
                    </th>
                    <th class="font-ui px-4 py-3 text-[12px] font-semibold tracking-wide text-[#94979c] uppercase">
                      Email
                    </th>
                    <th class="font-ui px-4 py-3 text-[12px] font-semibold tracking-wide text-[#94979c] uppercase">
                      LinkedIn
                    </th>
                    <th class="font-ui px-4 py-3 text-[12px] font-semibold tracking-wide text-[#94979c] uppercase">
                      Resume
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((row, idx) => (
                    <tr
                      key={idx}
                      class="border-border-primary border-b last:border-b-0"
                    >
                      <td class="px-4 py-3 font-mono text-[13px] whitespace-nowrap text-[#94979c]">
                        {formatDate(row.created_at)}
                      </td>
                      <td class="px-4 py-3 font-mono text-[13px] text-[#f7f7f7]">
                        {row.job_slug}
                      </td>
                      <td class="font-body px-4 py-3 text-[14px] text-[#f7f7f7]">
                        {row.full_name}
                      </td>
                      <td class="font-body px-4 py-3 text-[14px] text-[#94979c]">
                        {row.email}
                      </td>
                      <td class="px-4 py-3">
                        <a
                          href={row.linkedin_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          class="inline-flex items-center text-[#7a5af8] hover:text-[#9b85ff]"
                          aria-label="Open LinkedIn"
                        >
                          <LuExternalLink />
                        </a>
                      </td>
                      <td class="px-4 py-3">
                        <a
                          href={row.resume_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          class="font-ui inline-flex items-center gap-1 text-[13px] text-[#7a5af8] hover:text-[#9b85ff]"
                        >
                          PDF
                          <LuExternalLink />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

    </div>
  );
});

export const head: DocumentHead = {
  title: "Business Metrics | Admin",
  meta: [{ name: "robots", content: "noindex, nofollow" }],
};
