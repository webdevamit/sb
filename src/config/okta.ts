import { OktaAuth } from "@okta/okta-auth-js";

export const oktaConfig = {
  issuer: import.meta.env.VITE_OKTA_ISSUER,
  clientId: import.meta.env.VITE_OKTA_CLIENT_ID,
  redirectUri: `${window.location.origin}/callback`,
  scopes: ["openid", "profile", "email"],
  pkce: true,
  tokenManager: {
    autoRenew: true,
    secure: true,
  },
};

// Validate configuration
const validateConfig = () => {
  if (!oktaConfig.issuer.startsWith("https://")) {
    throw new Error(
      "Okta issuer URL must start with https:// and be properly configured."
    );
  }
  if (!oktaConfig.issuer) {
    throw new Error(
      "Please configure your Okta issuer in src/config/constants.ts"
    );
  }
  if (!oktaConfig.clientId) {
    throw new Error(
      "Please configure your Client ID in src/config/constants.ts"
    );
  }
};

validateConfig();

// Create and export a single OktaAuth instance
export const oktaAuth = new OktaAuth(oktaConfig);
