const bool = (v, def = false) => {
  if (v === undefined || v === null) return def;
  const s = String(v).toLowerCase();
  return ['1', 'true', 'yes', 'on'].includes(s);
};

// PUBLIC_INTERFACE
export function getEnvConfig() {
  /**
   * Reads environment variables and returns a normalized config object.
   * App works in local-only mode by default.
   */
  const cfg = {
    apiBase: process.env.REACT_APP_API_BASE || '',
    backendUrl: process.env.REACT_APP_BACKEND_URL || '',
    frontendUrl: process.env.REACT_APP_FRONTEND_URL || '',
    wsUrl: process.env.REACT_APP_WS_URL || '',
    nodeEnv: process.env.REACT_APP_NODE_ENV || process.env.NODE_ENV || 'development',
    enableSourceMaps: bool(process.env.REACT_APP_ENABLE_SOURCE_MAPS, true),
    port: process.env.REACT_APP_PORT || '3000',
    trustProxy: bool(process.env.REACT_APP_TRUST_PROXY, false),
    logLevel: process.env.REACT_APP_LOG_LEVEL || 'info',
    healthcheckPath: process.env.REACT_APP_HEALTHCHECK_PATH || '/health',
    featureFlags: process.env.REACT_APP_FEATURE_FLAGS || '',
    experiments: bool(process.env.REACT_APP_EXPERIMENTS_ENABLED, false)
  };
  return cfg;
}
