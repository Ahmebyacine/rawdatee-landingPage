"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MessageCircle, Instagram, Facebook } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("ContactPage");
  const [form, setForm] = useState({
    fullname: "",
    institution: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (data.success) {
      setStatus("success");
      setForm({
        fullname: "",
        institution: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
      setStatus("error");
    }
  };

  return (
    <main className="max-w-6xl mx-auto px-6 md:px-12 py-16 mt-10">
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        {/* Contact Info (left) */}
        <div className="space-y-8">
          <h1 className="text-4xl font-bold mb-4">{t("title")}</h1>
          <p className="text-muted-foreground text-lg">{t("subtitle")}</p>

          <div className="space-y-4">
            <a href="mailto:contact@rawdatee.com" className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-muted-foreground" />
              <span>contact@rawdatee.com</span>
            </a>
            <a href="tel:0655880049" className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-muted-foreground" />
              <span>0655880049</span>
            </a>
          </div>

          {/* Social icons */}
          <div className="flex space-x-4">
            <a href="https://wa.me/213655880049" target="_blank">
              <MessageCircle className="w-6 h-6 text-muted-foreground hover:text-primary" />
            </a>
            <a href="https://www.instagram.com/rawdatee_platform/" target="_blank">
              <Instagram className="w-6 h-6 text-muted-foreground hover:text-primary" />
            </a>
            <a href="https://www.facebook.com/p/Rawdatee-100082837852901/" target="_blank">
              <Facebook className="w-6 h-6 text-muted-foreground hover:text-primary" />
            </a>
          </div>
        </div>

        {/* Contact Form (right) */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {["fullname", "institution", "email", "phone", "message"].map((field) => (
            <div key={field}>
              <label htmlFor={field} className="block font-medium mb-2">
                {t(`${field}.label`)}
              </label>
              {field === "message" ? (
                <Textarea
                  id={field}
                  value={form[field]}
                  onChange={handleChange}
                  placeholder={t(`${field}.placeholder`)}
                  rows={6}
                  required
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                />
              ) : (
                <Input
                  id={field}
                  type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                  value={form[field]}
                  onChange={handleChange}
                  placeholder={t(`${field}.placeholder`)}
                  className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              )}
            </div>
          ))}

          <Button
            type="submit"
            className="w-full bg-primary hover:bg-primary text-primary-foreground py-3 rounded-lg font-medium"
            disabled={status === "sending"}
          >
            {status === "sending" ? t("sending") : t("button")}
          </Button>

          {status === "success" && (
            <p className="text-green-600 text-center mt-2">{t("message_sent_successfully")}</p>
          )}
          {status === "error" && (
            <p className="text-red-600 text-center mt-2">{t("failed_to_send_message")}</p>
          )}
        </form>
      </div>
    </main>
  );
}
