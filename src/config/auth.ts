export const authConfig = {
  issuer: import.meta.env.VITE_OKTA_ISSUER, // e.g., 'https://dev-123456.okta.com'
  clientId: import.meta.env.VITE_OKTA_CLIENT_ID,
  redirectUri: window.location.origin + "/login/callback",
  scopes: ["openid", "profile", "email"],
};
