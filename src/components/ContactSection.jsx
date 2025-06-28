import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Inquiry Made!",
        description: "Thank you for your query. We'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-9xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-md md:text-lg text-center text-muted-foreground mb-12 max-w-5xl mx-auto">
          Connect with us today to explore how Counts&Accounts can be your trusted outsourced accounting partner.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h4 className="text-xl md:text-2xl font-semibold">Contact Information</h4>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="text-md md:text-lg font-medium text-left"> Email</h4>
                  <a
                    href="mailto:nairpriyapradeep@gmail.com"
                    className="text-md md:text-lg text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    nairpriyapradeep@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="text-md md:text-lg font-medium text-left"> Phone</h4>
                  <a
                    href="tel:+919664517995"
                    className="text-md md:text-lg text-muted-foreground hover:text-primary transition-colors text-left"
                  >
                    +91 - 96645 17995
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="text-md md:text-lg font-medium text-left"> Location</h4>
                  <a className="text-md md:text-lg text-muted-foreground hover:text-primary transition-colors text-left">
                    India - Rajkot, Gujarat <strong>|</strong> UK - Fenemore Road, CR8 5GJ
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <h4 className="font-medium mb-4"> Connect With Me</h4>
              <div className="flex space-x-4 justify-center">
                <a href="#" target="_blank">
                  <Linkedin />
                </a>
                <a href="#" target="_blank">
                  <Twitter />
                </a>
                <a href="#" target="_blank">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl md:text-2xl font-semibold">Have An Inquiry?</h4>
            <p className="text-md md:text-lg text-muted-foreground">Fill out the form below and our team shall get back to you promptly.</p>
            <form className="space-y-4 mt-4 bg-card px-12 py-2 rounded-lg shadow-xs" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-md md:text-lg font-medium mb-1"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="John Doe..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-md md:text-lg font-medium mb-1"
                >
                  {" "}
                  Email ID
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="john@gmail.com..."
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="block text-md md:text-lg font-medium mb-1"
                >
                  Company/Organisation
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  className="w-full px-3 py-2 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="Public company/Private firm..."
                />
              </div>

              <div>
                <label
                  htmlFor="number"
                  className="block text-md md:text-lg font-medium mb-1"
                >
                  Contact Number
                </label>
                <input
                  type="text"
                  id="number"
                  name="number"
                  required
                  className="w-full px-3 py-2 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
                  placeholder="+1234567890..."
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-md md:text-lg font-medium mb-1"
                >
                  Inquiry
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full px-3 py-2 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to ask about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button text-md md:text-lg w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Inquiry"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
