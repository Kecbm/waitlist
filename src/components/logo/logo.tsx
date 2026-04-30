import { component$ } from "@builder.io/qwik";

type LogoSize = "sm" | "md" | "xl";

export const Logo = component$<{ size?: LogoSize }>(({ size = "md" }) => {
  const sizeClass = {
    sm: "text-sm",
    md: "text-lg",
    xl: "text-3xl sm:text-4xl",
  }[size];
  return (
    <span class={`font-semibold tracking-tight ${sizeClass}`}>Highstack</span>
  );
});
