import { component$, $ } from "@builder.io/qwik";
import {
  LuUploadCloud,
  LuUser,
  LuMail,
  LuLinkedin,
} from "@qwikest/icons/lucide";

export const ApplyForm = component$(() => {
  const handleSubmit = $((e: Event) => {
    e.preventDefault();
  });

  return (
    <aside class="flex w-80 h-192 flex-col gap-4 rounded-2xl border p-5 lg:sticky lg:top-8">
      <h2 class="font-ui text-[20px] font-medium text-[#f7f7f7]">Interested in this role?</h2>
      <p class="font-ui text-left text-[16px] text-[#94979c]">
        We&apos;d love to hear from you.
        <br />
        Apply below or reach out at
        <br />
        careers@jaqpot.com
      </p>

      <form
        class="flex flex-col gap-4"
        preventdefault:submit
        onSubmit$={handleSubmit}
      >
        <label class="flex w-full flex-col gap-1">
          <span class="font-body text-[14px] text-[#cecfd2]">
            Full name <span aria-hidden="true" class="text-[#9b8afb]">*</span>
          </span>
          <div class="relative">
            <span
              class="text-text-placeholder pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2"
              style={{ fontSize: "16px" }}
            >
              <LuUser />
            </span>
            <input
              type="text"
              name="fullName"
              required
              placeholder="Enter your full name"
              class="border-border-primary placeholder:text-text-placeholder h-11.5 w-full rounded-md border bg-[#0c0e12] py-2.5 pr-3.5 pl-10 text-[16px] text-white transition-colors focus:border-2 focus:border-[#7d70cc] focus:outline-none"
            />
          </div>
        </label>

        <label class="flex w-full flex-col gap-1">
          <span class="font-body text-[14px] text-[#cecfd2]">
            Email <span aria-hidden="true" class="text-[#9b8afb]">*</span>
          </span>
          <div class="relative">
            <span
              class="text-text-placeholder pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2"
              style={{ fontSize: "16px" }}
            >
              <LuMail />
            </span>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email address"
              class="border-border-primary placeholder:text-text-placeholder h-11.5 w-full rounded-md border bg-[#0c0e12] py-2.5 pr-3.5 pl-10 text-[16px] text-white transition-colors focus:border-2 focus:border-[#7d70cc] focus:outline-none"
            />
          </div>
        </label>

        <label class="flex w-full flex-col gap-1">
          <span class="font-body text-[14px] text-[#cecfd2]">
            LinkedIn <span aria-hidden="true" class="text-[#9b8afb]">*</span>
          </span>
          <div class="relative">
            <span
              class="text-text-placeholder pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2"
              style={{ fontSize: "16px" }}
            >
              <LuLinkedin />
            </span>
            <input
              type="url"
              name="linkedin"
              required
              placeholder="Enter your LinkedIn profile URL"
              class="border-border-primary placeholder:text-text-placeholder h-11.5 w-full rounded-md border bg-[#0c0e12] py-2.5 pr-3.5 pl-10 text-[16px] text-white transition-colors focus:border-2 focus:border-[#7d70cc] focus:outline-none"
            />
          </div>
        </label>

        <div class="flex w-full flex-col gap-1">
          <span class="font-body text-[14px] text-[#cecfd2]">
            Resume <span aria-hidden="true" class="text-[#9b8afb]">*</span>
          </span>
          <label class="border-border-primary flex h-30 w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-md border bg-[#0c0e12] px-3 py-3 text-center transition-colors">
            <div
              class="border-border-primary flex h-10 w-10 items-center justify-center rounded-md border text-[#94979c]"
              style={{ fontSize: "20px" }}
            >
              <LuUploadCloud />
            </div>
            <span class="font-body text-[14px]">
              <span class="font-bold text-[#d1b26e]">Click to upload</span>{" "}
              <span class="text-[#94979c]">or drag and drop</span>
            </span>
            <span class="font-body text-[12px] text-[#94979c]">PDF (max. 10MB)</span>
            <input
              type="file"
              name="resume"
              required
              accept="application/pdf"
              class="hidden"
            />
          </label>
        </div>

        <label class="font-ui flex w-full items-start gap-2 text-[12px] text-[#94979c]">
          <input type="checkbox" name="consent" required class="h-4 w-4 shrink-0" />
          <span>
            By submitting this form, you consent to the processing of your
            personal data for recruitment purposes. You may request access or
            deletion of your data at any time by contacting careers@jaqpot.com.
          </span>
        </label>

        <button
          type="submit"
          class="w-full rounded-full border px-4 py-2 text-sm font-medium"
        >
          Submit application
        </button>
      </form>
    </aside>
  );
});
