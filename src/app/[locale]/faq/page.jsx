import FaqItem from "@/components/faq-item";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "FAQ",
};

export default function AppParentPage() {
  const t = useTranslations("HomePage");

  return (
    <div className="w-full py-8 px-4 container mx-auto text-center max-w-5xl space-y-6 mt-15">
      <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-20 leading-tight">
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
    </div>
  );
}
