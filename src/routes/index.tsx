import { $, component$, useSignal } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { Logo } from "../components/logo/logo";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default component$(() => {
  const email = useSignal("");
  const error = useSignal("");
  const submittedEmail = useSignal("");
  const dialogRef = useSignal<HTMLDialogElement>();

  const handleSubmit = $(() => {
    const value = email.value.trim();
    if (!EMAIL_REGEX.test(value)) {
      error.value = "Please enter a valid email address.";
      return;
    }
    error.value = "";
    submittedEmail.value = value;
    dialogRef.value?.showModal();
  });

  const handleClose = $(() => {
    email.value = "";
    error.value = "";
    submittedEmail.value = "";
  });

  return (
    <div class="flex min-h-screen flex-col">
      <Header />
      <main class="flex flex-1 items-center justify-center px-4 py-8 sm:px-8">
        <section class="flex w-full max-w-md flex-col items-center gap-4 text-center sm:gap-5">
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
            <div class="flex w-full gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                aria-invalid={error.value ? "true" : "false"}
                bind:value={email}
                class="flex-1 rounded-full border px-4 py-2.5 text-base focus:outline-none sm:px-5 sm:py-3"
              />
              <button
                type="submit"
                class="font-ui rounded-full bg-[#6938ef] px-4 py-2.5 text-[16px] font-medium text-[#ffffff]"
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
      </main>
      <Footer />

      <dialog
        ref={dialogRef}
        onClose$={handleClose}
        class="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl border p-6 backdrop:backdrop-blur-sm"
      >
        <button
          type="button"
          aria-label="Close"
          onClick$={() => dialogRef.value?.close()}
          class="absolute top-2 right-2 flex h-8 w-8 items-center justify-center rounded-full text-xl leading-none"
        >
          ×
        </button>
        <div class="flex max-w-sm flex-col items-center gap-4 text-center">
          <h2 class="text-lg font-medium sm:text-xl">You're on the list!</h2>
          <p class="text-sm sm:text-base">
            Thanks for signing up. We'll send a confirmation to{" "}
            <span class="font-medium">{submittedEmail.value}</span> when we
            launch.
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
