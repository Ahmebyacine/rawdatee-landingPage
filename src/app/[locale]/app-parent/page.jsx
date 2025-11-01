import AppParentCard from "@/components/app-parent-card";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Parent App",
};

export default function AppParentPage() {
  const t = useTranslations("AppParent");

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 text-gray-800 mt-10">
      <h1 className="text-3xl font-bold text-center mb-8">{t("title")}</h1>
      <AppParentCard />
    </div>
  );
}