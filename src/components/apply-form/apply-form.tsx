import { component$, $, useSignal } from "@builder.io/qwik";
import {
  LuUploadCloud,
  LuUser,
  LuMail,
  LuLinkedin,
  LuArrowRight,
  LuX,
} from "@qwikest/icons/lucide";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const URL_REGEX = /^https?:\/\/.+/i;
const MAX_RESUME_BYTES = 10 * 1024 * 1024;
const AUTO_CLOSE_MS = 15000;

type ApplyFormProps = {
  jobTitle?: string;
};

export const ApplyForm = component$<ApplyFormProps>(({ jobTitle }) => {
  const fullName = useSignal("");
  const email = useSignal("");
  const linkedin = useSignal("");
  const resumeName = useSignal("");
  const resumeFile = useSignal<File | null>(null);
  const consent = useSignal(false);

  const errFullName = useSignal("");
  const errEmail = useSignal("");
  const errLinkedin = useSignal("");
  const errResume = useSignal("");
  const errConsent = useSignal("");

  const submittedName = useSignal("");
  const dialogRef = useSignal<HTMLDialogElement>();
  const closeTimeoutId = useSignal<number>();

  const handleSubmit = $(() => {
    const name = fullName.value.trim();
    const mail = email.value.trim();
    const link = linkedin.value.trim();

    errFullName.value = !name ? "Please enter your full name." : "";
    errEmail.value = !EMAIL_REGEX.test(mail)
      ? "Please enter a valid email address."
      : "";
    errLinkedin.value = !URL_REGEX.test(link)
      ? "Please enter a valid LinkedIn URL."
      : "";

    if (!resumeFile.value) {
      errResume.value = "Please upload your resume (PDF).";
    } else if (resumeFile.value.type !== "application/pdf") {
      errResume.value = "Resume must be a PDF file.";
    } else if (resumeFile.value.size > MAX_RESUME_BYTES) {
      errResume.value = "Resume must be 10MB or less.";
    } else {
      errResume.value = "";
    }

    errConsent.value = !consent.value ? "You must consent to continue." : "";

    if (
      errFullName.value ||
      errEmail.value ||
      errLinkedin.value ||
      errResume.value ||
      errConsent.value
    ) {
      return;
    }

    submittedName.value = name;
    dialogRef.value?.showModal();
    if (closeTimeoutId.value !== undefined) {
      window.clearTimeout(closeTimeoutId.value);
    }
    closeTimeoutId.value = window.setTimeout(() => {
      dialogRef.value?.close();
    }, AUTO_CLOSE_MS);
  });

  const handleClose = $(() => {
    fullName.value = "";
    email.value = "";
    linkedin.value = "";
    resumeName.value = "";
    resumeFile.value = null;
    consent.value = false;
    errFullName.value = "";
    errEmail.value = "";
    errLinkedin.value = "";
    errResume.value = "";
    errConsent.value = "";
    submittedName.value = "";
    if (closeTimeoutId.value !== undefined) {
      window.clearTimeout(closeTimeoutId.value);
      closeTimeoutId.value = undefined;
    }
  });

  return (
    <aside class="flex w-80 flex-col gap-4 rounded-2xl border-[1.5px] border-[#9b8afb] bg-linear-to-r from-[#211e32] to-[#10121b] to-70% p-4 lg:sticky lg:top-8">
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
        noValidate
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
              bind:value={fullName}
              aria-invalid={errFullName.value ? "true" : "false"}
              placeholder="Enter your full name"
              class="border-border-primary placeholder:text-text-placeholder h-11.5 w-full rounded-md border bg-[#0c0e12] py-2.5 pr-3.5 pl-10 text-[16px] text-white transition-colors focus:border-2 focus:border-[#7d70cc] focus:outline-none"
            />
          </div>
          {errFullName.value && (
            <p class="font-ui text-[12px] text-[#f97066]" role="alert">
              {errFullName.value}
            </p>
          )}
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
              bind:value={email}
              aria-invalid={errEmail.value ? "true" : "false"}
              placeholder="Enter your email address"
              class="border-border-primary placeholder:text-text-placeholder h-11.5 w-full rounded-md border bg-[#0c0e12] py-2.5 pr-3.5 pl-10 text-[16px] text-white transition-colors focus:border-2 focus:border-[#7d70cc] focus:outline-none"
            />
          </div>
          {errEmail.value && (
            <p class="font-ui text-[12px] text-[#f97066]" role="alert">
              {errEmail.value}
            </p>
          )}
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
              bind:value={linkedin}
              aria-invalid={errLinkedin.value ? "true" : "false"}
              placeholder="Enter your LinkedIn profile URL"
              class="border-border-primary placeholder:text-text-placeholder h-11.5 w-full rounded-md border bg-[#0c0e12] py-2.5 pr-3.5 pl-10 text-[16px] text-white transition-colors focus:border-2 focus:border-[#7d70cc] focus:outline-none"
            />
          </div>
          {errLinkedin.value && (
            <p class="font-ui text-[12px] text-[#f97066]" role="alert">
              {errLinkedin.value}
            </p>
          )}
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
            {resumeName.value ? (
              <span class="font-body text-[14px] font-bold text-[#d1b26e]">
                {resumeName.value}
              </span>
            ) : (
              <>
                <span class="font-body text-[14px]">
                  <span class="font-bold text-[#d1b26e]">Click to upload</span>{" "}
                  <span class="text-[#94979c]">or drag and drop</span>
                </span>
                <span class="font-body text-[12px] text-[#94979c]">
                  PDF (max. 10MB)
                </span>
              </>
            )}
            <input
              type="file"
              accept="application/pdf"
              class="hidden"
              onChange$={(_, el) => {
                const f = el.files?.[0] ?? null;
                resumeFile.value = f;
                resumeName.value = f?.name ?? "";
              }}
            />
          </label>
          {errResume.value && (
            <p class="font-ui text-[12px] text-[#f97066]" role="alert">
              {errResume.value}
            </p>
          )}
        </div>

        <div class="flex flex-col gap-1">
          <label class="font-ui flex w-full items-start gap-2 text-[12px] text-[#94979c]">
            <input
              type="checkbox"
              bind:checked={consent}
              aria-invalid={errConsent.value ? "true" : "false"}
              class="h-4 w-4 shrink-0"
            />
            <span>
              By submitting this form, you consent to the processing of your
              personal data for recruitment purposes. You may request access or
              deletion of your data at any time by contacting careers@jaqpot.com.
            </span>
          </label>
          {errConsent.value && (
            <p class="font-ui text-[12px] text-[#f97066]" role="alert">
              {errConsent.value}
            </p>
          )}
        </div>

        <button
          type="submit"
          class="font-ui flex h-10 w-[126.5px] items-center justify-center gap-1.5 rounded-full border-[3px] border-white/12 bg-[#7a5af8] px-3 py-2 text-[14px] text-white"
        >
          <span class="px-0.5 font-semibold">Apply now</span>
          <LuArrowRight />
        </button>
      </form>

      <dialog
        ref={dialogRef}
        onClose$={handleClose}
        class="bg-page-gradient border-border-primary fixed top-1/2 left-1/2 max-w-md -translate-x-1/2 -translate-y-1/2 rounded-md border p-8 text-white backdrop:bg-black/50 backdrop:backdrop-blur-sm"
      >
        <button
          type="button"
          aria-label="Close"
          onClick$={() => dialogRef.value?.close()}
          class="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full text-[#94979c] transition-colors hover:text-white"
          style={{ fontSize: "20px" }}
        >
          <LuX />
        </button>
        <div class="flex max-w-sm flex-col items-center gap-4 text-center">
          <h2 class="font-display text-[24px] font-bold text-white">
            Application received!
          </h2>
          <p class="font-body text-[16px] text-[#94979c]">
            Thanks{" "}
            <span class="font-medium text-white">{submittedName.value}</span>,
            we&apos;ll review your application
            {jobTitle && (
              <>
                {" "}
                for <span class="font-medium text-white">{jobTitle}</span>
              </>
            )}{" "}
            and be in touch soon.
          </p>
        </div>
      </dialog>
    </aside>
  );
});
