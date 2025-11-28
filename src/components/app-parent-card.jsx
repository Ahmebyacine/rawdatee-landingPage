import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { FaAndroid, FaApple, FaGooglePlay } from "react-icons/fa";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

export default function AppParentCard() {
  const t = useTranslations("AppParent");
  const locale = useLocale();
  return (
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
        <p className="text-sm my-6 ltr:md:pr-45 px-5 md:px-0 md:rtl:pl-45">
          {t("parentAppDesc")}
        </p>
        <div className="space-x-4">
          <Button variant="outline" className="border-0 p-6 rounded-lg" asChild>
            <Link
              href={`${locale}/app-apk`}
              className="flex items-center gap-3"
            >
              {/* <FaGooglePlay className="text-foreground" /> */}
              <FaAndroid className="text-foreground" />
              <div className="text-left">
                <div className="text-xs text-muted-foreground">
                  {t("getItOn")}
                </div>
                {/* <div className="text-sm font-semibold text-foreground">
                  {t("googlePlay")}
                </div> */}
                <div className="text-sm font-semibold text-foreground">APK</div>
              </div>
            </Link>
          </Button>
          <Button
            variant="outline"
            className="border-0 p-6 rounded-lg opacity-30 cursor-not-allowed"
          >
            <FaApple className="text-foreground" />
            <div className="text-left">
              <div className="text-xs text-muted-foreground">
                {t("getItOn")}
              </div>
              <div className="text-sm font-semibold text-foreground">
                {t("appStore")}
              </div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}
