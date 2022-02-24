const SCHEME = process.env.VUE_APP_SCHEME__SERVER ?? "http";
const HOST = process.env.VUE_APP_HOST__SERVER ?? "localhost";
const PORT = process.env.VUE_APP_PORT__SERVER ?? 8081;
const ENDPOINT = process.env.VUE_APP_ENDPOINT__SERVER ?? "/api";

export const URL = `${SCHEME}://${HOST}:${PORT}${ENDPOINT}`;
