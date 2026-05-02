import { $, component$, useSignal } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { LuMail, LuX } from "@qwikest/icons/lucide";
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { Logo } from "../components/logo/logo";
import { PageMain } from "../components/page-main/page-main";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const AUTO_CLOSE_MS = 15000;

export default component$(() => {
  const email = useSignal("");
  const error = useSignal("");
  const submittedEmail = useSignal("");
  const dialogRef = useSignal<HTMLDialogElement>();
  const closeTimeoutId = useSignal<number>();

  const handleSubmit = $(() => {
    const value = email.value.trim();
    if (!EMAIL_REGEX.test(value)) {
      error.value = "Please enter a valid email address.";
      return;
    }
    error.value = "";
    submittedEmail.value = value;
    dialogRef.value?.showModal();
    if (closeTimeoutId.value !== undefined) {
      window.clearTimeout(closeTimeoutId.value);
    }
    closeTimeoutId.value = window.setTimeout(() => {
      dialogRef.value?.close();
    }, AUTO_CLOSE_MS);
  });

  const handleClose = $(() => {
    email.value = "";
    error.value = "";
    submittedEmail.value = "";
    if (closeTimeoutId.value !== undefined) {
      window.clearTimeout(closeTimeoutId.value);
      closeTimeoutId.value = undefined;
    }
  });

  return (
    <div class="flex min-h-screen flex-col">
      <Header />
      <PageMain class="items-center justify-center">
        <section class="flex w-full max-w-xl flex-col items-center gap-4 text-center sm:gap-5">
          <Logo size="xl" />
          <h1 class="font-display text-[48px] font-bold whitespace-nowrap text-[#ffffff]">
            The Creator Casino.
          </h1>
          <p class="font-body text-[20px] text-[#94979c]">Coming soon.</p>
          <form
            onSubmit$={handleSubmit}
            preventdefault:submit
            noValidate
            class="flex w-full flex-col items-center gap-2"
          >
            <div class="flex w-full justify-center gap-2">
              <div class="relative w-[394.04px]">
                <span
                  class="text-text-placeholder pointer-events-none absolute top-1/2 left-3.5 -translate-y-1/2"
                  style={{ fontSize: "20px" }}
                >
                  <LuMail />
                </span>
                <input
                  type="email"
                  placeholder="Enter your email"
                  aria-label="Email address"
                  aria-invalid={error.value ? "true" : "false"}
                  bind:value={email}
                  class="border-border-primary placeholder:text-text-placeholder h-11.5 w-full rounded-md border bg-[#0c0e12] py-2.5 pr-3.5 pl-14.75 text-[16px] text-white transition-colors focus:border-2 focus:border-[#7d70cc] focus:outline-none"
                />
              </div>
              <button
                type="submit"
                class="font-ui rounded-full bg-[#6938ef] px-4 py-2.5 text-[16px] font-medium text-[#ffffff] transition-colors hover:bg-[#7b5bf8]"
              >
                Get notified
              </button>
            </div>
            {error.value && (
              <p class="text-xs sm:text-sm" role="alert">
                {error.value}
              </p>
            )}
          </form>
          <p class="font-ui text-[14px] text-[#94979c]">
            We care about your data. See our{" "}
            <Link href="/privacy-policy" class="underline">
              Privacy Policy.
            </Link>
          </p>
        </section>
      </PageMain>
      <Footer />

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
            You're on the list!
          </h2>
          <p class="font-body text-[16px] text-[#94979c]">
            Thanks for signing up. We'll send a confirmation to{" "}
            <span class="font-medium text-white">{submittedEmail.value}</span>{" "}
            when we launch.
          </p>
        </div>
      </dialog>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Waitlist | Highstack",
  meta: [
    {
      name: "description",
      content: "The Creator Casino. Coming soon.",
    },
  ],
};
