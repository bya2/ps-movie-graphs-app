export const init_config__server = {
  SCHEME: process.env.VUE_APP_SCHEME ?? "http",
  HOST: process.env.VUE_APP_HOST ?? "localhost",
  PORT: process.env.VUE_APP_PORT ?? 8081,
};

const { SCHEME, HOST, PORT } = init_config__server;

export const base_URL__server = `${SCHEME}://${HOST}:${PORT}/api`;
