import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import HomePage from "./HomePage";
import LandingPage from "./LandingPage";
import DonatePage from "./DonatePage";
import RequestPage from "./RequestPage";
import DinePage from "./DinePage";

// Create a client
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home/*" element={<HomePage />} />
          <Route path="/donate" element={<DonatePage />} />
          <Route path="/request" element={<RequestPage />} />
          <Route path="/dine" element={<DinePage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export default App;
