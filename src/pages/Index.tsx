import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Work from "@/components/Work";
import WhyUs from "@/components/WhyUs";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StickyCallButton from "@/components/StickyCallButton";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Helmet>
        <html lang="ro" />
        <title>WorxAds | Dezvoltare Website-uri, Aplicații Mobile & Marketing Digital</title>
        <meta
          name="description"
          content="WorxAds îți construiește prezența digitală: website-uri profesionale, aplicații mobile și campanii de marketing digital. Solicită o ofertă gratuită!"
        />
        <meta
          name="keywords"
          content="dezvoltare website, aplicatii mobile, marketing digital, agentie web Romania, SEO, creare site"
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="Romanian" />
        <meta name="author" content="WorxAds" />
        <link rel="canonical" href="https://worxads.com/" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://worxads.com/" />
        <meta
          property="og:title"
          content="WorxAds | Dezvoltare Website-uri, Aplicații Mobile & Marketing Digital"
        />
        <meta
          property="og:description"
          content="WorxAds îți construiește prezența digitală: website-uri profesionale, aplicații mobile și campanii de marketing digital."
        />
        <meta property="og:image" content="https://worxads.com/og-image.svg" />
        <meta property="og:locale" content="ro_RO" />
        <meta property="og:site_name" content="WorxAds" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://worxads.com/" />
        <meta
          name="twitter:title"
          content="WorxAds | Dezvoltare Website-uri, Aplicații Mobile & Marketing Digital"
        />
        <meta
          name="twitter:description"
          content="WorxAds îți construiește prezența digitală: website-uri profesionale, aplicații mobile și campanii de marketing digital."
        />
        <meta name="twitter:image" content="https://worxads.com/og-image.svg" />
      </Helmet>
      <Navbar />
      <Hero />
      <Services />
      <Stats />
      <About />
      <Work />
      <WhyUs />
      <CTA />
      <Contact />
      <Footer />
      <StickyCallButton />
    </main>
  );
};

export default Index;
