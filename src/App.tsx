import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/ScrollToTop";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AnimatePresence } from "framer-motion";
import { BrowserRouter, Routes, Route, useLocation, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CorporateTravel from "./pages/CorporateTravel";
import DMC from "./pages/DMC";
import Immigration from "./pages/Immigration";
import Packages from "./pages/Packages";
import PackageDetail from "./pages/PackageDetail";
import TeaTourism from "./pages/TeaTourism";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/corporate-travel" element={<CorporateTravel />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/packages/:slug" element={<PackageDetail />} />
        <Route path="/dmc" element={<DMC />} />
        <Route path="/tea-tourism" element={<TeaTourism />} />
        <Route path="/tea-buyer-tours" element={<Navigate to="/tea-tourism" replace />} />
        <Route path="/immigration-services" element={<Immigration />} />
        <Route path="/book" element={<Navigate to="/packages#book" replace />} />
        <Route path="/quote" element={<Navigate to="/packages#book" replace />} />
        <Route path="/services" element={<Navigate to="/packages" replace />} />
        <Route path="/safari-journeys" element={<Navigate to="/packages" replace />} />
        <Route path="/safari-journeys/:slug" element={<Navigate to="/packages" replace />} />
        <Route path="/contact" element={<Contact />} />

        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <AppRoutes />
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
