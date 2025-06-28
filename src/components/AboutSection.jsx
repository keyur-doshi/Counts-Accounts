import { BookOpenCheck, Telescope } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-9xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Our <span className="text-primary"> Story</span>
        </h2>
        <p className="text-md md:text-lg text-center text-muted-foreground mb-12 max-w-5xl mx-auto">
          Every remarkable business begins with a clear vision. At Counts&Accounts, that vision is rooted in the belief that financial clarity is not just a service, it&apos;s a catalyst for growth. Our firm was founded with a commitment to excellence, delivering seamless, precise, and expert accounting solutions while fostering long-term partnerships based on trust and integrity.
        </p>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          className="group"
        >
          <SwiperSlide>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <h4 className="text-xl md:text-2xl font-semibold">What Sets Us Apart</h4>
                <p className="text-md md:text-lg text-muted-foreground">At Counts&Accounts, we go beyond traditional accounting. Our expertise lies in precision-driven financial management, ensuring compliance, efficiency, and profitability for our clients. Whether it’s bookkeeping, tax optimization, payroll services, or financial consulting, our tailored solutions help businesses stay ahead in an ever-evolving marketplace.</p>
                <p className="text-md md:text-lg text-muted-foreground">Our focus extends beyond numbers as we drive growth, innovation, and long-term success. By combining cutting-edge financial strategies with personalized service, we enable businesses to make informed decisions, enhance profitability, and scale effortlessly.</p>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                  <a href="#contact" className="cosmic-button">
                    Get In Touch
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="gradient-border p-6 card-hover">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Telescope className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-xl md:text-2xl">Vision</h4>
                      <p className="text-md md:text-lg text-muted-foreground">
                        To be a trusted global partner in financial management, empowering businesses with precision-driven accounting solutions that fuel sustainable growth and success.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="gradient-border p-6 card-hover">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <BookOpenCheck className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h4 className="font-semibold text-xl md:text-2xl">Mission</h4>
                      <p className="text-md md:text-lg text-muted-foreground">
                        To deliver accurate, compliant, and technology-driven accounting services that streamline financial operations, reduce risk, and help businesses focus on their core growth strategies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col lg:flex-row bg-card rounded-lg shadow-md overflow-hidden h-[700px] md:h-[400px]">
              {/* Image */}
              <div className="relative w-full lg:w-1/3 h-64 lg:h-auto">
                <img
                  src="/founder.jpg"
                  alt="Priya Pradeep Nair-Modi"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text Content */}
              <div className="p-4 lg:p-8 flex flex-col justify-start w-full lg:w-2/3 overflow-y-auto custom-scroll">
                <h3 className="text-xl md:text-2xl font-semibold mb-6 text-foreground text-center">
                  Founder&apos;s Journey
                </h3>
                <p className="text-md md:text-lg text-muted-foreground mb-4 text-center">
                  Priya Pradeep Nair, CEO and Founder of Counts&Accounts, is a distinguished accounting expert with extensive experience across banking, legal services, and media production. Her deep expertise in bookkeeping, payroll, tax compliance, and regulatory consulting has established her as a trusted financial partner for businesses seeking precision-driven financial solutions.
                </p>
                <p className="text-md md:text-lg text-muted-foreground text-center">
                  Priya has redefined the approach to accounting and bookkeeping by delivering tailored strategies that cater to the unique needs of businesses across diverse industries. Her work has helped firms streamline operations, ensure compliance, and unlock their full financial potential.
                </p>
                <p className="text-md md:text-lg text-muted-foreground mt-4 text-center">
                  Under her leadership, Counts&Accounts is setting new industry standards by empowering businesses with data-driven insights, risk management frameworks, and optimized financial strategies to drive unparalleled success.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      
       <style jsx global>{`
      /* Custom scrollbar */
      .custom-scroll::-webkit-scrollbar {
        width: 5px;
      }
      .custom-scroll::-webkit-scrollbar-thumb {
        background-color: #7f6ce0; /* Your purplish primary color */
        border-radius: 4px;
      }
      .custom-scroll::-webkit-scrollbar-track {
        background: transparent;
      }
      /* Swiper navigation arrows */
      .swiper-button-next,
      .swiper-button-prev {
        color: #7f6ce0; /* Primary color */
        font-weight: bold;
      }
      /* Pagination bullets */
      .swiper-pagination-bullet {
        width: 14px;
        height: 14px;
        background: rgba(124, 58, 237, 0.4); /* semi-transparent base */
      }
      .swiper-pagination-bullet-active {
        background: #7f6ce0; /* solid primary */
      }
    `}</style>
    </section>
  );
};
