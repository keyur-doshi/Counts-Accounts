import { Globe, Sunrise, Users } from "lucide-react";

export const CareersSection = () => {
  return (
    <section id="careers" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-9xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Counts&Accounts <span className="text-primary">Careers</span>
        </h2>
        <p className="text-md md:text-lg text-center text-muted-foreground max-w-5xl mx-auto">
          We’re always looking for talented professionals who are passionate about financial excellence and client success.
        </p>
        <p className="text-md md:text-lg text-center text-muted-foreground mb-12 max-w-5xl mx-auto">
          Find your next job at Counts&Accounts.
        </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
              <div className="grid grid-cols-1 gap-6">
                <h4 className="text-xl md:text-2xl font-semibold">Why Join Us?</h4>
                <div className="gradient-border p-6 card-hover">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Sunrise className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-xl md:text-2xl">Professional Growth</h4>
                      <p className="text-md md:text-lg text-muted-foreground">
                        Opportunities for continuous learning and career advancement
                      </p>
                    </div>
                  </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Globe className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-xl md:text-2xl">Global Experience</h4>
                      <p className="text-md md:text-lg text-muted-foreground">
                        Work with international clients across industries
                      </p>
                    </div>
                  </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-xl md:text-2xl">Collaborative Environment</h4>
                      <p className="text-md md:text-lg text-muted-foreground">
                        Be part of a supportive and dynamic team
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl md:text-2xl font-semibold">How To Apply?</h4>
                <p className="text-md md:text-lg text-muted-foreground">If you’re ready to grow with us, simply send us your resume along with a short introduction about yourself and the role you’re interested in by clicking the button below.</p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                <a href="#" className="cosmic-button">
                    Apply For Job
                </a>
                </div>
              </div>
            </div>
      </div>
    </section>
  );
};
