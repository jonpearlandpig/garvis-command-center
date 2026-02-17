import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GarvisLayout from "./components/GarvisLayout";
import Dashboard from "./pages/Dashboard";
import Documentation from "./pages/Documentation";
import Architecture from "./pages/Architecture";
import PigPen from "./pages/PigPen";
import Brands from "./pages/Brands";
import GarvisChat from "./pages/GarvisChat";
import Glossary from "./pages/Glossary";
import AuditLog from "./pages/AuditLog";
import SettingsPage from "./pages/SettingsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <GarvisLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/docs" element={<Documentation />} />
            <Route path="/architecture" element={<Architecture />} />
            <Route path="/pigpen" element={<PigPen />} />
            <Route path="/brands" element={<Brands />} />
            <Route path="/chat" element={<GarvisChat />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/audit" element={<AuditLog />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </GarvisLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
