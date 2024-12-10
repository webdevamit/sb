import "./App.css";
import ErrorBoundary from "./components/error-boundary";
import TicTackToe from "./TicTackToe";

function App() {
  return (
    <>
      <ErrorBoundary
        onError={(error, errorInfo) => {
          // collect and send the error log to logging and monitoring service
          console.log(error, errorInfo);
        }}
      >
        <TicTackToe />
      </ErrorBoundary>
    </>
  );
}

export default App;
