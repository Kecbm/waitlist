import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { PageMain } from "../../components/page-main/page-main";

export default component$(() => {
  return (
    <div class="flex min-h-screen flex-col">
      <Header />
      <PageMain class="items-center justify-center">
        <h1 class="text-2xl font-medium sm:text-3xl">Privacy Policy</h1>
      </PageMain>
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
