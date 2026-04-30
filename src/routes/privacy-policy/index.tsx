import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";

export default component$(() => {
  return (
    <div class="flex min-h-screen flex-col">
      <Header />
      <main class="flex flex-1 items-center justify-center px-4 py-8 sm:px-8">
        <h1 class="text-2xl font-medium sm:text-3xl">Privacy Policy</h1>
      </main>
      <Footer />
    </div>
  );
});

export const head: DocumentHead = {
  title: "Privacy Policy | Highstack",
  meta: [
    {
      name: "description",
      content: "Privacy Policy for the Highstack waitlist.",
    },
  ],
};
