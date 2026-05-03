export const ADMIN_COOKIE = "admin_session";

const COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 30;

const sha256 = async (text: string): Promise<string> => {
  const buf = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(text),
  );
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
};

export const getExpectedCookieValue = async (env: {
  get: (key: string) => string | undefined;
}): Promise<string> => {
  const pw = env.get("ADMIN_PASSWORD");
  if (!pw) throw new Error("Missing ADMIN_PASSWORD env var");
  return sha256(pw);
};

export const adminCookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: "lax" as const,
  path: "/",
  maxAge: COOKIE_MAX_AGE_SECONDS,
};
