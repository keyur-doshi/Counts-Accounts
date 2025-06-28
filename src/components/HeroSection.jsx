import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-5xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Counts</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">&</span>
            <span className="opacity-0 animate-fade-in">Accounts</span>
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Your Trusted Partner in Financial Excellence
          </p>
          <p className="text-md md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Providing Accurate, Compliant, and Scalable Accounting Solutions for Global Businesses
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#services" className="cosmic-button">
              Our Services
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> View more </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
