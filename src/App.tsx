import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Security, LoginCallback } from "@okta/okta-react";
import ErrorBoundary from "./components/error-boundary";
import { SecureRoute } from "./components/SecureRoute";
import { oktaAuth } from "./config/okta";
import TicTackToe from "./TicTackToe";
import "./App.css";
import { LoginPage } from "./pages/LoginPage";
import { LoadingSpinner } from "./components/LoadingSpinner";
let state: any;

const useMyState = (initialState: any) => {
  if (!state) state = initialState;
  return [state, (value) => (state = value)];
};

function App() {
  const [count, setCount] = useMyState(2);
  console.log(count);

  const restoreOriginalUri = async (
    _oktaAuth: typeof oktaAuth,
    originalUri: string
  ) => {
    console.log(_oktaAuth);
    console.log(originalUri);

    window.location.replace(originalUri ?? "/dashboard");
  };

  return (
    <ErrorBoundary
      onError={(error, errorInfo) => {
        // collect and send the error log to logging and monitoring service
        console.log(error, errorInfo);
      }}
    >
      <button onClick={() => setCount(10)}>Click me</button>
      {/* <Router>
        <Security oktaAuth={oktaAuth} restoreOriginalUri={restoreOriginalUri}>
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route
              path="/callback"
              element={<LoginCallback loadingElement={<LoadingSpinner />} />}
            />
            <Route
              path="/dashboard"
              element={
                <SecureRoute>
                </SecureRoute>
              }
            />
          </Routes>
        </Security>
      </Router> */}
      <TicTackToe />
    </ErrorBoundary>
  );
}

export default App;
