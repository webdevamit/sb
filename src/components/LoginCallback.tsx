import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authConfig } from "../config/auth";

export function LoginCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    const handleCallback = async () => {
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");
      const state = params.get("state");
      const codeVerifier = localStorage.getItem("code_verifier");

      if (!code || !state || !codeVerifier) {
        navigate("/");
        return;
      }

      try {
        const tokenResponse = await fetch(`${authConfig.issuer}/v1/token`, {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            grant_type: "authorization_code",
            client_id: authConfig.clientId,
            code_verifier: codeVerifier,
            code,
            redirect_uri: authConfig.redirectUri,
          }),
        });

        if (tokenResponse.ok) {
          const tokens = await tokenResponse.json();
          localStorage.setItem("access_token", tokens.access_token);
          localStorage.setItem("id_token", tokens.id_token);
          navigate("/dashboard");
        } else {
          console.error("Token exchange failed");
          navigate("/");
        }
      } catch (error) {
        console.error("Login callback error:", error);
        navigate("/");
      }
    };

    handleCallback();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <p className="text-gray-600">Processing login...</p>
      </div>
    </div>
  );
}
