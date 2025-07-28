import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { FeatureCard } from "@/components/feature-card";
import { StepCard } from "@/components/step-card";
import PricingCards from "@/components/pricing-cards";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import FaqItem from "@/components/faq-item";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div className="font-sans flex flex-col items-center justify-items-center pb-20 gap-16 sm:p-10 mt-10 md:mt-0">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-t from-primary/20 to-transparent rounded-lg">
        <div className="py-16 px-4 container mx-auto text-center max-w-5xl">
          <Badge
            variant="outline"
            className="mb-8 px-6 py-2 rounded-full border-primary text-md font-semibold text-primary bg-card"
          >
            {t("heroBadge")}
          </Badge>

          <h1 className="text-3xl md:text-4xl font-bold text-foregrounud mb-6 leading-tight">
            {t("heroTitle")}
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {t("heroDescription")}
          </p>

          <Button className="bg-primary hover:bg-primary/80 text-primary-foreground rounded-full px-8 py-3 text-lg">
            {t("getStartedButton")}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>

        <div className="w-full flex justify-center">
          <Image
            src="/dashboardView.png"
            alt={t("dashboardImageAlt")}
            width={1000}
            height={80}
            priority
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-8 px-4 container mx-auto text-center max-w-5xl space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-foregrounud mb-6 leading-tight">
          {t("featuresTitle")}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard
            title={t("attendanceTrackingTitle")}
            description={t("attendanceTrackingDesc")}
            imageSrc="/attendace.png"
            altText={t("attendanceImageAlt")}
          />

          <FeatureCard
            title={t("instantReportsTitle")}
            description={t("instantReportsDesc")}
            imageSrc="/reports.png"
            altText={t("reportsImageAlt")}
            width={800}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-span-2">
            <FeatureCard
              title={t("multiRoleTitle")}
              description={t("multiRoleDesc")}
              imageSrc="/multiRole.png"
              altText={t("multiRoleImageAlt")}
            />
          </div>

          <FeatureCard
            title={t("classroomMgmtTitle")}
            description={t("classroomMgmtDesc")}
            imageSrc="/classRoom.png"
            altText={t("classroomImageAlt")}
            width={800}
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-8 container mx-auto text-center max-w-6xl space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-foregrounud mb-6 leading-tight">
          {t("howItWorksTitle")}
          <p className="text-lg text-muted-foreground font-light">
            {t("howItWorksSubtitle")}
          </p>
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StepCard
            step={1}
            title={t("step1Title")}
            description={t("step1Desc")}
          />

          <StepCard
            step={2}
            title={t("step2Title")}
            description={t("step2Desc")}
          />

          <StepCard
            step={3}
            title={t("step3Title")}
            description={t("step3Desc")}
          />

          <StepCard
            step={4}
            title={t("step4Title")}
            description={t("step4Desc")}
          />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="w-full py-8 px-4 container mx-auto text-center max-w-5xl space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-foregrounud mb-20 leading-tight">
          {t("pricingTitle")}
          <p className="text-lg text-muted-foreground font-light">
            {t("pricingSubtitle")}
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
              alt={t("appImageAlt")}
              width={1000}
              height={80}
              priority
            />
          </div>
          <div className="w-full md:w-[60%] flex items-center md:items-start flex-col text-primary-foreground text-left rtl:text-right">
            <h2 className="text-xl font-bold">{t("parentAppTitle")}</h2>
            <p className="text-sm my-6 md:pr-45 px-5 md:px-0 md:rtl:pl-45">
              {t("parentAppDesc")}
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
                      {t("getItOn")}
                    </div>
                    <div className="text-sm font-semibold text-foreground">
                      {t("googlePlay")}
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
                      {t("getItOn")}
                    </div>
                    <div className="text-sm font-semibold text-foreground">
                      {t("appStore")}
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
          {t("faqTitle")}
          <p className="text-lg text-muted-foreground font-light">
            {t("faqSubtitle")}
          </p>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <FaqItem question={t("faq1Q")} answer={t("faq1A")} />
          <FaqItem question={t("faq2Q")} answer={t("faq2A")} />
          <FaqItem question={t("faq3Q")} answer={t("faq3A")} />
          <FaqItem question={t("faq4Q")} answer={t("faq4A")} />
          <FaqItem question={t("faq5Q")} answer={t("faq5A")} />
          <FaqItem question={t("faq6Q")} answer={t("faq6A")} />
          <FaqItem question={t("faq7Q")} answer={t("faq7A")} />
          <FaqItem question={t("faq8Q")} answer={t("faq8A")} />
          <FaqItem question={t("faq9Q")} answer={t("faq9A")} />
          <FaqItem question={t("faq10Q")} answer={t("faq10A")} />
        </div>
      </section>

      {/* Get start Section */}
      <section className="w-full py-8 container text-center max-w-5xl space-y-6">
        <div className="w-full flex flex-col text-primary-foreground items-center justify-center h-60 bg-[url('/backroundAction.png')] bg-cover bg-center sm:rounded-2xl">
          <h2 className="text-xl font-bold">{t("ctaTitle")}</h2>
          <p className="text-sm m-2">{t("ctaDescription")}</p>
          <Button className="bg-card hover:bg-card/80 text-primary rounded-full px-8 py-3 text-lg">
            {t("getStartedButton")}
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
