import { useTranslations } from "next-intl";

export default function PrivacyPage() {
  const t = useTranslations("privacy");

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800 mt-10">
      <h1 className="text-3xl font-bold text-center mb-8">{t("title")}</h1>

      <p className="text-sm text-gray-500 text-center mb-12">{t("updated")}</p>

      <p className="mb-6">{t("intro")}</p>

      {/* Section 1 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">{t("section1.title")}</h2>
        <ul className="list-disc list-inside space-y-2">
          {t.raw("section1.items").map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p className="mt-3">{t("section1.note")}</p>
      </section>

      {/* Section 2 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">{t("section2.title")}</h2>
        <p>{t("section2.text")}</p>
      </section>

      {/* Section 3 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">{t("section3.title")}</h2>
        <p>{t("section3.text")}</p>
      </section>

      {/* Section 4 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">{t("section4.title")}</h2>
        <p className="mb-2">{t("section4.text1")}</p>
        <p className="mb-2">{t("section4.text2")}</p>
        <p>{t("section4.text3")}</p>
      </section>

      {/* Section 5 */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">{t("section5.title")}</h2>
        <p>{t("section5.text")}</p>
      </section>

      {/* Section 6 */}
      <section>
        <h2 className="text-xl font-semibold mb-3">{t("section6.title")}</h2>
        <p>
          {t("section6.text")}{" "}
          <a
            href={`mailto:${t("section6.contact")}`}
            className="text-blue-600 hover:underline"
          >
            {t("section6.contact")}
          </a>
        </p>
      </section>
    </div>
  );
}