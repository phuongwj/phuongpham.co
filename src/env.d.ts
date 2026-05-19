/// <reference types="astro/client" />

interface Env {
  LASTFM_API_KEY: string;
  LASTFM_USERNAME: string;
  GITHUB_TOKEN: string;
  GITHUB_USERNAME: string;
}

type Runtime = import("@astrojs/cloudflare").Runtime<Env>;

declare namespace App {
  interface Locals extends Runtime {}
}