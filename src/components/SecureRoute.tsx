import { useOktaAuth } from "@okta/okta-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingSpinner } from "./LoadingSpinner";

interface SecureRouteProps {
  children: React.ReactNode;
}

export const SecureRoute = ({ children }: SecureRouteProps) => {
  const { authState } = useOktaAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!authState) {
      return;
    }

    if (!authState?.isAuthenticated) {
      navigate("/");
    }
  }, [authState, navigate]);

  if (!authState || !authState?.isAuthenticated) {
    return <LoadingSpinner />;
  }

  return <>{children}</>;
};
