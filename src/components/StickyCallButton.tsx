import { Phone } from "lucide-react";

const StickyCallButton = () => {
  return (
    <a
      href="tel:0786534051"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg animate-glow-pulse transition-transform duration-200"
      aria-label="Call us"
    >
      <span className="absolute inset-0 rounded-full bg-primary/40 animate-[ripple_4s_ease-out_infinite]" />
      <span className="absolute inset-0 rounded-full bg-primary/30 animate-[ripple_4s_ease-out_1.5s_infinite]" />
      <Phone className="w-6 h-6 relative z-10" />
    </a>
  );
};

export default StickyCallButton;
