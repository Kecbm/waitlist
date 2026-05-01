import { component$ } from "@builder.io/qwik";

type LogoSize = "sm" | "md" | "xl";

const VARIANTS: Record<
  LogoSize,
  { src: string; width: number; height: number; class: string }
> = {
  sm: {
    src: "/logo/logo3.webp",
    width: 116,
    height: 16,
    class: "h-4 w-[116px]",
  },
  md: {
    src: "/logo/logo1.webp",
    width: 153,
    height: 32,
    class: "h-8 w-[153px]",
  },
  xl: {
    src: "/logo/logo2.webp",
    width: 446,
    height: 150,
    class: "h-[150px] w-[446px]",
  },
};

export const Logo = component$<{ size?: LogoSize }>(({ size = "md" }) => {
  const v = VARIANTS[size];
  return (
    <img
      src={v.src}
      width={v.width}
      height={v.height}
      alt="Highstack"
      class={v.class}
      loading={size === "xl" ? "eager" : "lazy"}
      decoding="async"
    />
  );
});
