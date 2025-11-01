import { FeatureCard } from "@/components/feature-card";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Features",
};

export default function FeaturesPage() {
  const t = useTranslations("FeaturesPage");
  const features = t.raw("features");

  return (
    <section className="w-full py-8 px-4 container mx-auto text-center max-w-5xl space-y-6 mt-10">
      <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-6 leading-tight">
        {t("title")}
        <p className="text-sm text-muted-foreground">{t("subtitle")}</p>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FeatureCard
          title={features[0].title}
          description={features[0].description}
          imageSrc="/attendace.png"
        />
        <FeatureCard
          title={features[1].title}
          description={features[1].description}
          imageSrc="/reports.png"
          width={800}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2">
          <FeatureCard
            title={features[2].title}
            description={features[2].description}
            imageSrc="/multiRole.png"
          />
        </div>
        <FeatureCard
          title={features[3].title}
          description={features[3].description}
          imageSrc="/classRoom.png"
          width={800}
        />
      </div>
    </section>
  );
}