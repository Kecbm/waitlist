import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { LuArrowLeft } from "@qwikest/icons/lucide";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { PageMain } from "../page-main/page-main";

export const NotFound = component$(() => {
  return (
    <div class="flex min-h-screen flex-col">
      <Header />
      <PageMain class="flex-col items-center px-20! py-24! min-h-473">
        <article class="flex w-full max-w-3xl flex-col gap-12">
          <Link
            href="/"
            class="font-ui flex h-9 w-fit items-center gap-1.5 py-2 pr-3 pl-0 text-[14px] text-[#94979c]"
          >
            <LuArrowLeft />
            <span class="font-semibold whitespace-nowrap">Back to home</span>
          </Link>
          <h1 class="font-display text-[48px] font-semibold text-[#f7f7f7]">
            Page not found
          </h1>
          <p class="font-body w-full text-[16px] text-[#94969c]">
            The page you&apos;re looking for doesn&apos;t exist or has been
            moved. Check the URL or head back to the home page to continue
            exploring.
          </p>
        </article>
      </PageMain>
      <Footer />
    </div>
  );
});
