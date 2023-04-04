const config = {
  env: {
    API_URL: process.env.NEXT_PUBLIC_API_URL,
  },
} as const;

export const CONFIG_TOKEN = Symbol("CONFIG");

export type Config = typeof config;

export default config;
