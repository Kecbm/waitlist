import { component$, $ } from "@builder.io/qwik";

export const ApplyForm = component$(() => {
  const handleSubmit = $((e: Event) => {
    e.preventDefault();
  });

  return (
    <aside class="flex w-full flex-col gap-4 rounded-2xl border p-5 lg:sticky lg:top-8">
      <header class="flex flex-col gap-2">
        <h2 class="text-lg font-medium sm:text-xl">Apply for this position</h2>
        <p class="text-xs sm:text-sm">
          Fill out the form below to submit your application.
          <br />
          <a href="mailto:careers@jaqpot.io" class="underline">
            careers@jaqpot.io
          </a>
        </p>
      </header>

      <form
        class="flex flex-col gap-4"
        preventdefault:submit
        onSubmit$={handleSubmit}
      >
        <label class="flex w-full flex-col gap-1">
          <span class="text-sm">
            Full name <span aria-hidden="true">*</span>
          </span>
          <input
            type="text"
            name="fullName"
            required
            placeholder="Enter your full name"
            class="w-full rounded-md border px-3 py-2 text-sm"
          />
        </label>

        <label class="flex w-full flex-col gap-1">
          <span class="text-sm">
            Email <span aria-hidden="true">*</span>
          </span>
          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email address"
            class="w-full rounded-md border px-3 py-2 text-sm"
          />
        </label>

        <label class="flex w-full flex-col gap-1">
          <span class="text-sm">
            LinkedIn <span aria-hidden="true">*</span>
          </span>
          <input
            type="url"
            name="linkedin"
            required
            placeholder="Enter your LinkedIn profile URL"
            class="w-full rounded-md border px-3 py-2 text-sm"
          />
        </label>

        <div class="flex w-full flex-col gap-1">
          <span class="text-sm">
            Resume <span aria-hidden="true">*</span>
          </span>
          <label class="flex w-full cursor-pointer flex-col items-center gap-1 rounded-md border border-dashed px-3 py-6 text-center text-sm">
            <span class="text-xs">
              <span class="font-medium">Click to upload</span> or drag and drop
            </span>
            <span class="text-xs">PDF (max. 10MB)</span>
            <input
              type="file"
              name="resume"
              required
              accept="application/pdf"
              class="hidden"
            />
          </label>
        </div>

        <label class="flex w-full items-start gap-2 text-sm">
          <input type="checkbox" name="consent" required class="mt-1" />
          <span>
            I consent to the processing of my personal data for recruitment
            purposes.
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
