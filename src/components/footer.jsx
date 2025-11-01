import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations("Footer");
  const locale = useLocale();
  return (
    <footer className="bg-card border-t">
      <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Company */}
        <div>
          <h3 className="font-semibold mb-4 text-primary text-sm">
            {t("companyTitle")}
          </h3>
          <p className="text-xs">{t("companyDesc1")}</p>
          <p className="text-xs">{t("companyDesc2")}</p>
        </div>

        {/* Product */}
        <div>
          <h3 className="font-semibold mb-4 text-xs text-muted-foreground">
            {t("productTitle")}
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href={`/${locale}/features`}>{t("features")}</Link>
            </li>
            <li>
              <Link href={`/${locale}/pricing`}>{t("pricing")}</Link>
            </li>
            <li>
              <Link href={`/${locale}/app-parent`}>{t("parentApp")}</Link>
            </li>
            <li>
              <Link href={`/${locale}/faq`}>{t("faq")}</Link>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-4 text-xs text-muted-foreground">
            {t("legalTitle")}
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="#">{t("terms")}</Link>
            </li>
            <li>
              <Link href={`/${locale}/privacy`}>{t("privacy")}</Link>
            </li>
            <li>
              <Link href={`/${locale}/contact`}>{t("support")}</Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-4 text-xs text-muted-foreground">
            {t("contactTitle")}
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="mailto:contact@rawdatee.com">{t("email")}</a>
            </li>
            <li>
              <a href="https://wa.me/213655880049" target="_blank">{t("whatsapp")}</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t py-4 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Rawdatee. {t("copyright")}
      </div>
    </footer>
  );
}
