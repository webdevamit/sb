import { useOktaAuth } from "@okta/okta-react";
import { LogIn } from "lucide-react";

export const LoginPage = () => {
  const { oktaAuth } = useOktaAuth();

  const login = () => oktaAuth.signInWithRedirect();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-600 mt-2">Please sign in to continue</p>
        </div>
        <button
          onClick={login}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          <LogIn className="w-5 h-5" />
          Sign in with Okta
        </button>
      </div>
    </div>
  );
};
