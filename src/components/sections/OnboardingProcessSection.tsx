import React from "react";
import ProcessStep from "../ui/ProcessStep";
import { Users, FileText, Monitor, Award, FileSignature } from "lucide-react";

const OnboardingProcessSection: React.FC = () => {
  return (
    <section id="process" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-4 text-center">
          <span className="text-sm font-medium tracking-wider text-teal-600 uppercase">
            Client Onboarding Process
          </span>
        </div>

        <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">
          Onboarding with <span className="text-navy-800">WiselyYours</span> –
          Fast, Simple, and Efficient
        </h2>

        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-gray-600">
            We believe in making it easy for you. Our onboarding process is
            designed for a seamless transition, so you can quickly start seeing
            the benefits of outsourcing to WiselyYours.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-5">
          <ProcessStep
            number="01."
            title="Consultation & Needs Assessment"
            description="We begin by understanding your firm's needs and how our services can best support your accounting work. We'll create a plan that fits your requirements."
            icon={<Users size={28} />}
          />

          <ProcessStep
            number="02."
            title="Secure Document Transfer"
            description="We handle your clients' documents securely to make sure we understand your current financial processes and can work with your existing systems."
            icon={<FileText size={28} />}
            isActive={true}
          />

          <ProcessStep
            number="03."
            title="Software Access"
            description="We integrate with the accounting software you already use, so there's no disruption to your workflow. This helps your team stay productive from the start."
            icon={<Monitor size={28} />}
          />

          <ProcessStep
            number="04."
            title="Complimentary 20-Hour Trial"
            description="You can try our services risk-free with a 20-hour trial. This gives you a chance to see how we can reduce your workload and improve your firm's operations."
            icon={<Award size={28} />}
          />

          <ProcessStep
            number="05."
            title="Mutual Agreement"
            description="Once you're ready, we initiate our partnership with an agreement that outlines our roles and responsibilities, setting the stage for successful collaboration."
            icon={<FileSignature size={28} />}
          />
        </div>
      </div>
    </section>
  );
};

export default OnboardingProcessSection;
