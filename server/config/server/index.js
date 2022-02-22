const SCHEME = process.env.SCHEME || "http";
const HOST = process.env.HOST || "localhost";
const PORT = process.env.PORT || 8081;

const config__server = {
  SCHEME,
  HOST,
  PORT,
};

module.exports = config__server;
