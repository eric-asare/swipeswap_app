import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import HomePage from "./HomePage";
import LandingPage from "./LandingPage";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home/*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
