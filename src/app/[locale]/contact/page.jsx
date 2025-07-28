import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageCircle, Instagram, Facebook } from "lucide-react";
import { useTranslations } from "next-intl";

export const metadata = {
  title: "Contact | Rawdatee",
};

export default function ContactPage() {
  const t = useTranslations("ContactPage");

  return (
    <main className="max-w-6xl mx-auto px-6 md:px-12 py-16 mt-10">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Left Column - Contact Info */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
            <p className="text-muted-foreground text-lg">{t("subtitle")}</p>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-muted-foreground" />
              <span>support@rowdatee.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-muted-foreground" />
              <span>0749632985</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary transition-colors cursor-pointer">
              <MessageCircle className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary transition-colors cursor-pointer">
              <Instagram className="w-5 h-5 text-muted-foreground" />
            </div>
            <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary transition-colors cursor-pointer">
              <Facebook className="w-5 h-5 text-muted-foreground" />
            </div>
          </div>
        </div>

        {/* Right Column - Contact Form */}
        <div className="space-y-6">
          <div>
            <label htmlFor="fullname" className="block font-medium mb-2">
              {t("fullname.label")}
            </label>
            <Input
              id="fullname"
              placeholder={t("fullname.placeholder")}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-medium mb-2">
              {t("email.label")}
            </label>
            <Input
              id="email"
              type="email"
              placeholder={t("email.placeholder")}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="message" className="block font-medium mb-2">
              {t("message.label")}
            </label>
            <Textarea
              id="message"
              placeholder={t("message.placeholder")}
              rows={6}
              className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
            />
          </div>

          <Button className="w-full bg-primary hover:bg-[#4338ca] text-white py-3 rounded-lg font-medium">
            {t("button")}
          </Button>
        </div>
      </div>
    </main>
  );
}