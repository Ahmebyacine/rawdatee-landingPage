import { FeatureCard } from "@/components/feature-card";
import PricingCards from "@/components/pricing-cards";
import { StepCard } from "@/components/step-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import FaqItem from "@/components/faq-item";

export const metadata = {
  title: "Rawdatee – Smarter Kindergarten Management",
  description:
    "Manage reports, payments, attendance, and parent communication all in one platform. Designed for kindergartens with full Arabic and English support.",
  openGraph: {
    title: "Rawdatee – Smarter Kindergarten Management",
    description:
      "Streamline kindergarten operations with attendance tracking, instant reports, multi-role dashboards, and a parent mobile app.",
    url: "https://rawdatee.com",
    siteName: "Rawdatee",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rawdatee Dashboard Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-items-center pb-20 gap-16 sm:p-10 mt-10 md:mt-0">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-t from-primary/20 to-transparent rounded-lg">
        <div className="py-16 px-4 container mx-auto text-center max-w-5xl">
          <Badge
            variant="outline"
            className="mb-8 px-6 py-2 rounded-full border-primary text-md font-semibold text-primary bg-card"
          >
            For smarter kindergarten operations
          </Badge>

          <h1 className="text-3xl md:text-4xl font-bold text-foregrounud mb-6 leading-tight">
            Manage reports, payments, and attendance all in one platform
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Empower your staff, engage parents, and streamline every part of
            your preschool.
          </p>

          <Button className="bg-primary hover:bg-primary/80 text-primary-foreground rounded-full px-8 py-3 text-lg">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        <div className="w-full flex justify-center">
          <Image
            src="/dashboardView.png"
            alt="dashboard preview"
            width={1000}
            height={80}
            priority
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-8 px-4 container mx-auto text-center max-w-5xl space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-foregrounud mb-6 leading-tight">
          Smart Features for Smoother Daily Flow
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard
            title="Attendance Tracking"
            description="Mark daily presence and absence with ease for every class and student."
            imageSrc="/attendace.png"
          />

          <FeatureCard
            title="Instant Reports"
            description="Share health and pedagogical reports directly with parents."
            imageSrc="/reports.png"
            width={800}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2">
            <FeatureCard
              title="Multi-role Access"
              description="Separate dashboards for Admins, Monitors, and Teachers."
              imageSrc="/multiRole.png"
            />
          </div>

          <FeatureCard
            title="Classroom Management"
            description="Manage class structures."
            imageSrc="/classRoom.png"
            width={800}
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-8 container mx-auto text-center max-w-6xl space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-foregrounud mb-6 leading-tight">
          How <span className="text-primary">Rawdatee</span> Works
          <p className="text-lg text-muted-foreground font-light">
            Start managing your kindergarten in just a few simple steps.
          </p>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StepCard
            step={1}
            title="Create your kindergarten account"
            description="Sign up in minutes and set up your school structure."
          />

          <StepCard
            step={2}
            title="Add classrooms, teachers, and students"
            description="Organize your structure effortlessly assign children to their classes, and connect each classroom with its teacher."
          />

          <StepCard
            step={3}
            title="Track and manage everything in one dashboard"
            description="Easily monitor attendance, generate reports, and manage staff responsibilities all in one intuitive control panel."
          />

          <StepCard
            step={4}
            title="Let parents stay updated through the mobile app"
            description="Parents receive real-time notifications, view reports, and stay informed about their child’s daily activities."
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-8 px-4 container mx-auto text-center max-w-5xl space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-foregrounud mb-20 leading-tight">
          Our Pricing Plans
          <p className="text-lg text-muted-foreground font-light">
            Easy pricing that grows with your kindergarten.
          </p>
        </h1>
        <PricingCards />
      </section>

      {/* Parent App Section */}
      <section className="w-full h-full container text-center max-w-6xl space-y-6 py-20">
        <div className="w-full flex flex-col md:flex-row items-center justify-center h-150 md:h-80 bg-[url('/backgroundAppSection.png')] bg-cover bg-right sm:rounded-2xl">
          <div className="w-3/4 md:w-[40%]">
            <Image
              src="/app.png"
              alt="app preview"
              width={1000}
              height={80}
              priority
            />
          </div>
          <div className="w-full md:w-[60%] flex items-center md:items-start flex-col text-primary-foreground text-left rtl:text-right">
            <h2 className="text-xl font-bold">
              Stay Connected with Your Child
            </h2>
            <p className="text-sm my-6 md:pr-45 px-5 md:px-0 md:rtl:pl-45">
              With the Rawdatee Parent App, families can track attendance,
              receive health and learning reports, and stay in touch with
              teachers
            </p>
            <div className="space-x-4">
              <Button
                variant="outline"
                className="border-0 p-6 rounded-lg"
                asChild
              >
                <a href="#" className="flex items-center gap-3">
                  <FaGooglePlay className="text-foreground" />
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">
                      GET IT ON
                    </div>
                    <div className="text-sm font-semibold text-foreground">
                      Google Play
                    </div>
                  </div>
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-0 p-6 rounded-lg"
                asChild
              >
                <a href="#" className="flex items-center gap-3">
                  <FaApple className="text-foreground" />
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground">
                      GET IT ON
                    </div>
                    <div className="text-sm font-semibold text-foreground">
                      App Store
                    </div>
                  </div>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Questions Section */}
      <section className="w-full py-8 px-4 container mx-auto text-center max-w-5xl space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-foregrounud mb-20 leading-tight">
          Frequently Asked Questions
          <p className="text-lg text-muted-foreground font-light">
            Clear answers to common questions from kindergarten managers and
            parents.
          </p>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FaqItem
            question="Is Rowdatee free to use?"
            answer="Yes! The Parent App is completely free. For kindergartens, we offer a free starter plan with optional upgrades."
          />
          <FaqItem
            question="Do I need technical experience to use Rowdatee?"
            answer="Not at all. The system is designed to be intuitive and beginner-friendly for both school staff and parents."
          />
          <FaqItem
            question="Can I manage more than one class or department?"
            answer="Absolutely. Rowdatee allows you to add unlimited classrooms, students, and teachers (depending on your plan)."
          />
          <FaqItem
            question="What languages does Rowdatee support?"
            answer="Currently, the platform supports both Arabic and English, with full RTL/LTR support."
          />
          <FaqItem
            question="Is there a mobile app for parents?"
            answer="Yes! Parents can download the mobile app to track attendance, view reports, and stay connected with the school in real time."
          />
          <FaqItem
            question=" Can multiple users access the same kindergarten account?"
            answer="Yes. You can create different roles (admin, monitor, teacher), each with their own access and permissions."
          />
          <FaqItem
            question="Is the platform secure?"
            answer="100%. All your data is securely stored, encrypted, and access-controlled. Privacy and safety are a top priority."
          />
          <FaqItem
            question="Is support available if I need help?"
            answer="Of course! Our team is available via email and WhatsApp for assistance, setup help, and training."
          />
          <FaqItem
            question="Can I limit what teachers or monitors can access?"
            answer="Yes. Each role has permission settings. Teachers can only access their assigned classes, while monitors have broader access for attendance."
          />
          <FaqItem
            question="Do parents need help installing or using the app?"
            answer="Not at all. The app is simple and guides parents through every step. Plus, we provide onboarding tips to help them get started."
          />
        </div>
      </section>

      {/* Get start Section */}
      <section className="w-full py-8 container text-center max-w-5xl space-y-6">
        <div className="w-full flex flex-col text-primary-foreground items-center justify-center h-60 bg-[url('/backroundAction.png')] bg-cover bg-center sm:rounded-2xl">
          <h2 className="text-xl font-bold">
            Ready to simplify your kindergarten management?
          </h2>
          <p className="text-sm m-2">
            Rowdatee helps you save time, reduce paperwork, and improve parent
            communication.
          </p>
          <Button className="bg-card hover:bg-card/80 text-primary rounded-full px-8 py-3 text-lg">
            Get Started
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
