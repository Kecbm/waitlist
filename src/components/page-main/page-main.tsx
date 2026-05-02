import { Slot, component$ } from "@builder.io/qwik";

type PageMainProps = {
  class?: string;
};

export const PageMain = component$<PageMainProps>(({ class: className }) => {
  return (
    <main
      class={`mx-auto flex w-full max-w-311.5 flex-1 px-4 py-0 sm:px-8 ${className ?? ""}`}
    >
      <Slot />
    </main>
  );
});
