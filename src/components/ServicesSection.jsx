import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const categories = [
  "SRA-Compliant Accounting For UK Law Firms",
  "Global Bookkeeping Solutions",
  "System, Planning, Design & Accounting Advisory",
  "Financial Planning & Strategy Consulting",
  "Credit Control & Debt Recovery",
];

const serviceDetails = {
  "Global Bookkeeping Solutions": {
    image: "/services/bookkeep.jpg",
  },
  "System, Planning, Design & Accounting Advisory": {
    image: "/services/advisory.webp",
  },
  "Financial Planning & Strategy Consulting": {
    image: "/services/consulting.avif",
  },
  "Credit Control & Debt Recovery": {
    image: "/services/debt.jpg",
  },
  "SRA-Compliant Accounting For UK Law Firms": {
    image: "/services/sra.jpg",
  },
};

export const ServicesSection = () => (
  <section id="services" className="py-24 px-4 bg-secondary/30">
    <div className="container mx-auto max-w-9xl">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Our <span className="text-primary">Services</span>
      </h2>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        className="group"
      >
        {categories.map((category, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col lg:flex-row bg-card rounded-lg shadow-md overflow-hidden h-[700px] md:h-[600px]">
              {/* Image */}
              <div className="relative w-full lg:w-1/3 h-64 lg:h-auto">
                <img
                  src={serviceDetails[category].image}
                  alt={category}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="p-4 lg:p-8 flex flex-col justify-start w-full lg:w-2/3 overflow-y-auto custom-scroll">
                {category === "System, Planning, Design & Accounting Advisory" && (
                  <>
                    <h3 className="text-xl md:text-2xl font-semibold mb-6 text-foreground text-center">
                      {category}
                    </h3>
                    <p className="text-md md:text-lg text-muted-foreground mb-4 text-left">
                      We provide strategic financial advisory services that help businesses optimize their accounting systems, improve efficiency, and achieve long-term growth. Our System, Planning, and Design services are tailored to each client’s unique financial structure, ensuring streamlined operations and regulatory compliance.
                    </p>
                    <h4 className="font-semibold text-lg md:text-xl mb-2 text-foreground text-center">
                      Our Key Offerings
                    </h4>
                    <ul className="text-md md:text-lg list-disc space-y-2 text-left">
                      <li>Accounting System Setup & Optimization - We help businesses implement and fine-tune accounting systems using cutting-edge software, ensuring automation, accuracy, and compliance with financial reporting standards.</li>
                      <li>Financial Process Planning & Workflow Design - We analyze existing financial workflows and create optimized structures that enhance efficiency, reduce errors, and improve cash flow management.</li>
                      <li>Internal Controls & Risk Management - Our team develops robust internal control frameworks to prevent financial mismanagement, fraud, and regulatory non-compliance.</li>
                      <li>Regulatory & Compliance Advisory - We provide expert guidance on maintaining compliance with international accounting standards, tax laws, and industry-specific financial regulations.</li>
                      <li>Customized Financial Strategy Development - We assist businesses in developing tailored financial plans that align with their growth goals, helping them scale effectively while maintaining financial stability.</li>
                    </ul>
                    <p className="text-md md:text-lg text-muted-foreground mt-4 text-left">
                      With our structured approach to accounting system design and financial planning, businesses can operate effectively, remain compliant, and achieve greater financial success.
                    </p>
                  </>
                )}

                {category === "Global Bookkeeping Solutions" && (
                  <>
                    <h3 className="text-xl md:text-2xl font-semibold mb-6 text-foreground text-center">
                      {category}
                    </h3>
                    <p className="text-md md:text-lg text-muted-foreground mb-4 text-left">
                      We provide comprehensive bookkeeping services tailored for firms across the globe, enabling them to outsource their entire accounting department or hire dedicated trained staff who function as an extension of their in-house team. Our flexible service model allows businesses to choose the level of engagement that best suits their operational needs.
                    </p>
                    <h4 className="font-semibold text-lg md:text-xl mb-2 text-foreground text-center">
                      Our Service Models
                    </h4>
                    <ul className="text-md md:text-lg list-decimal space-y-2 text-left">
                      <li>Full-Service Outsourced Accounting Department 
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-md md:text-lg text-muted-foreground">
                          <li>We manage all aspects of bookkeeping, from transaction recording to financial reporting and compliance.</li>
                          <li>Businesses benefit from cost-effective, accurate, and timely financial management without the need for an in-house accounting team.</li>
                        </ul>
                      </li>
                      <li>Dedicated Bookkeeping Staff Placement
                        <ul className="list-disc pl-5 mt-2 space-y-1 text-md md:text-lg text-muted-foreground">
                          <li>Our trained professionals integrate seamlessly with your business, working as part of your team.</li>
                          <li>Ideal for firms looking to expand their finance team without the overhead costs of hiring and training employees.</li>
                        </ul>
                      </li>
                    </ul>
                    <h4 className="font-semibold text-lg md:text-xl mt-4 mb-2 text-foreground text-center">
                      Our Bookkeeping Expertise
                    </h4>
                    <ul className="text-md md:text-lg list-disc space-y-2 text-left">
                      <li>Recording Transactions - Tracking income, expenses, and other financial activities to maintain accurate financial records.</li>
                      <li>Bank Reconciliation - Matching financial records with bank statements to ensure accuracy and prevent discrepancies.</li>
                      <li>Accounts Payable & Receivable - Managing invoices, supplier payments, and customer collections efficiently.</li>
                      <li>Payroll Processing - Handling employee salaries, deductions, and tax filings with precision.</li>
                      <li>Tax Compliance & Preparation - Ensuring records are well-maintained for accurate tax filings and deductions.</li>
                    </ul>
                    <p className="text-md md:text-lg text-muted-foreground mt-4 text-left">
                      By outsourcing to Counts&Accounts, businesses gain access to efficient, scalable, and compliance-driven bookkeeping solutions.
                    </p>
                  </>
                )}

                {category === "Financial Planning & Strategy Consulting" && (
                  <>
                    <h3 className="text-xl md:text-2xl font-semibold mb-6 text-foreground text-center">
                      {category}
                    </h3>
                    <p className="text-md md:text-lg text-muted-foreground mb-4 text-left">
                      We provide expert financial leadership to navigate complex challenges and drive efficiency. That’s why we offer Consulting Financial Controller Services, led directly by our Founder and CEO, Priya Pradeep Nair.
                    </p>
                    <p className="text-md md:text-lg text-muted-foreground mb-4 text-left">
                      Priya brings extensive experience in shaping financial strategy and governance across a range of industries, with deep expertise in legal and professional services. She currently serves as the Consulting Financial Controller at Roose+Partner, a distinguished marine law firm based in London. In this role, she leads efforts to enhance financial clarity, streamline operations, and uphold regulatory compliance within one of the most complex and highly regulated sectors.
                    </p>
                    <p className="text-md md:text-lg text-muted-foreground mb-4 text-left">
                      Learn more about her role at Roose+Partner <a href="https://roosemarinelaw.com/team" target="_blank" rel="noopener noreferrer" className="text-primary">here</a>. With a proven track record of driving financial clarity, operational efficiency, and regulatory compliance in one of the most intricate and regulated legal sectors, Priya brings unparalleled expertise to the table.
                    </p>
                    <h4 className="font-semibold text-lg md:text-xl mb-2 text-foreground text-center">
                      What We Offer
                    </h4>
                    <ul className="text-md md:text-lg list-disc space-y-2 text-left">
                      <li>High-Level Financial Oversight - From monthly management reporting to cash flow forecasting, we ensure your leadership team always has the insights they need to make smart financial decisions.</li>
                      <li>Process Optimization - We evaluate and redesign internal financial systems to reduce inefficiencies and scale operations as your business grows.</li>
                      <li>Leadership Support - Acting as your part-time or interim financial controller, Priya partners directly with business owners and directors to guide strategy and performance.</li>
                      <li>Board-Level Reporting - We help you present clean, insightful, and actionable reports for investors, stakeholders, or the board.</li>
                    </ul>
                    <p className="text-md md:text-lg text-muted-foreground mt-4 text-left">
                      With experience at the helm of financial operations in a top-tier legal environment, Priya’s approach is dynamic as she delivers strategic direction, operational clarity, and real-world financial transformation. Whether you are a law firm, consultancy, or growing international business, you gain access to valuable insights.
                    </p>
                  </>
                )}

                {category === "Credit Control & Debt Recovery" && (
                  <>
                    <h3 className="text-xl md:text-2xl font-semibold mb-6 text-foreground text-center">
                      {category}
                    </h3>
                    <p className="text-md md:text-lg text-muted-foreground mb-4 text-left">
                      Efficient credit control is crucial for maintaining a healthy cash flow and ensuring businesses receive payments on time. Our Credit Chasing Services are designed to help firms effectively manage their receivables, reduce outstanding debts, and maintain strong financial stability.
                    </p>
                    <h4 className="font-semibold text-lg md:text-xl mb-2 text-foreground text-center">
                      Our Credit Chasing Approach
                    </h4>
                    <ul className="text-md md:text-lg list-disc space-y-2 text-left">
                      <li>Proactive Invoice Monitoring - We keep track of due and overdue invoices, ensuring timely follow-ups and reducing payment delays.</li>
                      <li>Automated & Personalized Follow-Ups - Using a strategic mix of automation and personal communication, we remind clients of upcoming and overdue payments in a professional, efficient manner.</li>
                      <li>Dispute Resolution Support - In cases of discrepancies or disputes, we assist in resolving them swiftly to prevent further delays.</li>
                      <li>Customized Reporting & Insights - We provide detailed, easy-to-understand reports on debtor status, enabling businesses to make informed and strategic credit control decisions.</li>
                    </ul>
                    <p className="text-md md:text-lg text-muted-foreground mt-4 text-left">
                      Under the leadership of Priya Pradeep Nair, our team has successfully recovered between £750,000 to £1 million in outstanding debt every year, significantly improving our clients&apos; cash flow and financial health.
                    </p>
                  </>
                )}

                {category === "SRA-Compliant Accounting For UK Law Firms" && (
                  <>
                    <h3 className="text-xl md:text-2xl font-semibold mb-6 text-foreground text-center">
                      {category}
                    </h3>
                    <p className="text-md md:text-lg text-muted-foreground mb-4 text-left">
                      We understand the unique financial challenges faced by UK law firms, including compliance with Solicitors Regulation Authority (SRA) standards, client account management, and complex taxregulations. Our specialized SRA-compliant bookkeeping services are designed to ensure law firms remain compliant, financially organized, and free to focus on delivering high-quality legal services. With expertise in marine law and other specialized legal sectors, we provide tailored, regulation-driven financial solutions that support seamless operations and long-term stability.
                    </p>
                    <h4 className="font-semibold text-lg md:text-xl mb-2 text-foreground text-center">
                      Our Comprehensive Services
                    </h4>
                    <ul className="text-md md:text-lg list-disc space-y-2 text-left">
                      <li>SRA-Compliant Bookkeeping - Our team ensures accurate and regulation-compliant financial record-keeping, adhering to SRA Accounts Rules. We help firms maintain precise ledgers, track client funds, and ensure transparency in all financial transactions.</li>
                      <li>Trust & Client Account Management - We provide specialized oversight of client funds, ensuring adherence to strict legal requirements. Our services include tracking disbursements, maintaining accurate trust account records, and ensuring full regulatory compliance, preventing financial mismanagement risks.</li>
                      <li>VAT & Tax Compliance Services - Managing VAT and tax obligations can be challenging for law firms. Our experts handle VAT filings, tax audits, and compliance risk assessments, ensuring that firms meet HMRC regulations and avoid unnecessary penalties.</li>
                      <li>Third-Party Billing & International Compliance - Many law firms, particularly in marine law, deal with complex disbursements, multi-currency transactions, and international compliance requirements. We assist firms in managing third-party billing, ensuring proper documentation, and streamlining cross-border financial processes for seamless operations.</li>
                    </ul>
                    <p className="text-md md:text-lg text-muted-foreground mt-4 text-left">
                      With our industry-specific expertise, UK law firms can streamline their accounting processes, mitigate compliance risks, and focus entirely on their legal practice—leaving the financial complexities to us.
                    </p>
                  </>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
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
