import React from "react";
import ServiceCard from "../ui/ServiceCard";
import { FileText, BookOpen, Landmark, FileCheck, FilePen, HandCoins, Banknote, ChartSpline } from "lucide-react";

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="sticky top-1 lg:col-span-4">
            <h4 className="font-semibold text-[#2a4768]">Services</h4>
            <h2 className="text-navy-800 mb-4 text-4xl font-bold md:text-5xl">
              <span className="text-[#2a4768]">Outsourced Accounting </span>{" "}
              Services Designed for Your Firm
            </h2>

            <p className="mb-6 text-gray-600">
              Managing client accounts can be a drain on your time and
              resources.
              <span className="font-medium"> WiselyYours</span> takes the load
              off your shoulders with a full range of outsourced accounting
              services designed to meet the unique needs of India accounting
              firms. Let us handle the critical and time-consuming tasks while
              you focus on growing your business.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:col-span-8">
            <ServiceCard
              icon={<FileText size={32} />}
              title="Accounting Services"
              description="We manage your clients' financial records, ensuring accuracy and compliance without taking up your time."
              color="default"
              className="flex aspect-square h-full flex-col border border-black"
            />

            <ServiceCard
              icon={<BookOpen size={32} />}
              title="Bookkeeping Services"
              description="Keep your clients' financials in order with our streamlined bookkeeping services that improve clarity and decision-making."
              color="default"
            />

            <ServiceCard
              icon={<Landmark size={32} />}
              title="Year-End Accounting Services"
              description="We prepare precise balance sheets and financial statements, helping you wrap up the year with clarity and assurance."
              color="default"
            />

            <ServiceCard
              icon={<FileCheck size={32} />}
              title="Taxation – Self-Assessment"
              description="We handle self-assessment returns, ensuring your clients stay organized, punctual, and fully compliant with tax requirements."
              color="default"
            />
            <ServiceCard
              icon={<FilePen size={32} />}
              title="Tax Return Preparation"
              description="Simplify tax season with our preparation and filing services that take the stress out of tax returns."
              color="default"
            />
            <ServiceCard
              icon={<HandCoins size={32} />}
              title="Payroll Services"
              description="Timely, accurate payroll, every time. We make sure your clients’ payroll is compliant with UK regulations, without the hassle."
              color="default"
            />
            <ServiceCard
              icon={<Banknote size={32} />}
              title="GST Return Filing"
              description="We handle VAT returns with precision and efficiency, ensuring compliance with HMRC."
              color="default"
            />
            <ServiceCard
              icon={<ChartSpline size={32} />}
              title="Financial Analysis"
              description="Our team delivers the insights your clients need to make smart, informed decisions with their financial data."
              color="default"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
