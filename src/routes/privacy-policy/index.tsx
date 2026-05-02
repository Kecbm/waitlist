import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { PageMain } from "../../components/page-main/page-main";

export default component$(() => {
  return (
    <div class="flex min-h-screen flex-col">
      <Header />
      <PageMain class="flex-col items-center px-20! py-24! min-h-473">
        <article class="flex w-full max-w-3xl flex-col gap-12">
          <h1 class="font-display text-[48px] font-semibold text-[#f7f7f7]">
            Privacy Policy
          </h1>
          <p class="font-body w-full text-[16px] text-[#94969c]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p class="font-body w-full text-[16px] text-[#94969c]">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum. Sed ut perspiciatis
            unde omnis iste natus error sit voluptatem accusantium doloremque
            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
            veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <p class="font-body w-full text-[16px] text-[#94969c]">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
            non numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem.
          </p>
        </article>
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
