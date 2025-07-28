import PricingCards from "@/components/pricing-cards";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Pricing | Rawdatee",
};

export default function PricingPage() {
  const t = useTranslations("PricingPage");

  return (
    <section className="w-full py-8 px-4 container mx-auto text-center max-w-5xl space-y-6 mt-10">
      <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
        {t("title")}
      </h1>
      <p className="text-lg text-muted-foreground font-light mb-20">
        {t("subtitle")}
      </p>
      <PricingCards />
    </section>
  );
}