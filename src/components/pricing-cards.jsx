import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useTranslations } from "next-intl";

export default function PricingCards() {
  const t = useTranslations("Pricing");

  const plans = [
    { key: "basic" },
    { key: "pro", popular: true },
    { key: "enterprise" }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {plans.map((plan) => (
        <Card
          key={plan.key}
          className={`relative border border-border shadow-sm ${
            plan.popular ? "border-primary shadow-lg scale-105" : ""
          }`}
        >
          {plan.popular && (
            <div className="w-full absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground py-3 rounded-t-xl text-sm font-medium">
              {t(`${plan.key}.popular`)}
            </div>
          )}
          <CardHeader className={plan.popular ? "pt-4 rounded-t-xl" : ""}>
            <CardTitle className="text-xl font-bold">{t(`${plan.key}.title`)}</CardTitle>
            <p className="text-muted-foreground mt-2">{t(`${plan.key}.desc`)}</p>
            <div className="mt-6">
              <span className="text-3xl font-bold">{t(`${plan.key}.price`)}</span>
              <span className="text-muted-foreground ml-2">/{t('year')}</span>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-4">{t("whatsIncluded")}</h4>
              <ul className="space-y-3 text-left rtl:text-right text-sm">
                {t.raw(`${plan.key}.features`).map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-5 h-5 border-primary border-1 rounded-full flex items-center justify-center mr-3">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Button className="w-full bg-primary hover:bg-primary/80 text-white rounded-full py-3">
              {t(`${plan.key}.button`)}
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
