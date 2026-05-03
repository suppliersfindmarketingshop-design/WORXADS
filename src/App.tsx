import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import DezvoltareWebsite from "./pages/DezvoltareWebsite";
import AplicatiiMobile from "./pages/AplicatiiMobile";
import MarketingDigital from "./pages/MarketingDigital";
import Seo from "./pages/Seo";
import Portofoliu from "./pages/Portofoliu";
import BlogWebsiteProfesional from "./pages/BlogWebsiteProfesional";
import BlogAplicatieTelefon from "./pages/BlogAplicatieTelefon";
import BlogSeoRomania from "./pages/BlogSeoRomania";
import Blog from "./pages/Blog";
import DespreNoi from "./pages/DespreNoi";
import ContactPage from "./pages/Contact";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/dezvoltare-website" element={<DezvoltareWebsite />} />
          <Route path="/aplicatii-mobile" element={<AplicatiiMobile />} />
          <Route path="/marketing-digital" element={<MarketingDigital />} />
          <Route path="/seo" element={<Seo />} />
          <Route path="/portofoliu" element={<Portofoliu />} />
          <Route path="/despre-noi" element={<DespreNoi />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/cum-sa-faci-un-website-profesional" element={<BlogWebsiteProfesional />} />
          <Route path="/blog/cum-sa-faci-o-aplicatie-pentru-telefon" element={<BlogAplicatieTelefon />} />
          <Route path="/blog/ghid-seo-romania-2025" element={<BlogSeoRomania />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
