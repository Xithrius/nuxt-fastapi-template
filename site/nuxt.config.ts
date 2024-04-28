// This code is demo only.
if (!process.env.NUXT_AUTH_PASSWORD) {
  console.warn(
    "Security warning: NUXT_AUTH_PASSWORD is not set. Using an example value. Please set it otherwise your session is unsecure!"
  );
  process.env.NUXT_AUTH_PASSWORD = "secretsecretsecretsecretsecretsecretsecret";
}

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  extends: ["./auth"],
  ui: {
    icons: ["simple-icons"],
  },
});
