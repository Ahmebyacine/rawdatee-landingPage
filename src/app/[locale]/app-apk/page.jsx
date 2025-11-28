"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useTranslations } from "next-intl";

export default function AppParentPage() {
  const t = useTranslations("AppAPK");

  return (
    <div className="w-full py-8 px-4 container mx-auto text-center max-w-5xl space-y-6 mt-15">
      <h1 className="text-2xl md:text-3xl font-bold text-foreground leading-tight">
        {t("Title")}
        <p className="text-lg text-muted-foreground font-light">
          {t("Subtitle")}
        </p>
      </h1>
      <div className="flex flex-col items-center justify-center space-y-4">
        <Button
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/rawdatee_v1.0.0.apk";
            link.download = "rawdatee_v1.0.0.apk";
            link.click();
          }}
          className="gap-2"
        >
          <Download className="w-4 h-4" />
          {t("Download")}
        </Button>
      </div>
    </div>
  );
}
