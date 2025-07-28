"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useParams, usePathname } from "next/navigation";
import { useTranslations } from "next-intl";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { locale } = useParams();
  const t = useTranslations("Header");
  console.log(pathname)
  const links = [
    { href: "/", label: t("home") },
    { href: "/features", label: t("features") },
    { href: "/pricing", label: t("pricing") },
    { href: "/contact", label: t("contact") },
  ].map(link => ({
    ...link,
    href: `/${locale}${link.href === "/" ? "" : link.href}`
  }));;

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };
  const currentLang = pathname.match(/^\/(en|ar)/)?.[1] || "en";
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 sm:px-8 lg:px-24 py-4 border-b backdrop-blur-md bg-white/50 shadow-sm">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-primary">
          Rawdatee
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-8 font-medium text-l">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "transition-colors hover:text-primary/60",
                pathname === link.href && "text-primary font-semibold"
              )}
            >
              {link.label}
            </Link>
          ))}

          {/* Language Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="sm"
                className="flex items-center text-base xl:text-md font-medium gap-2 border-0 bg-transparent"
              >
                {currentLang.toUpperCase()}
                <ChevronDown className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Link
                  className="w-full"
                  href={pathname.replace(/^\/(en|ar)/, "/en")}
                >
                  English
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  className="w-full"
                  href={pathname.replace(/^\/(en|ar)/, "/ar")}
                >
                  العربية
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* CTA Button */}
          <Button
            asChild
            size="sm"
            className="p-4 text-base !text-primary-foreground text-l rounded-full"
          >
            <Link href="/get-started">{t("getStarted")}</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </Button>
      </header>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset- backdrop-blur-sm"
            onClick={closeMobileMenu}
          />
          <div className="fixed top-[73px] left-0 right-0 bg-background backdrop-blur-md border-b shadow-lg">
            <nav className="flex flex-col px-4 py-6 space-y-4">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={cn(
                    "text-lg font-medium py-2 px-2 rounded-md transition-colors hover:bg-primary/10",
                    pathname === link.href &&
                      "text-primary font-semibold bg-primary/5"
                  )}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Language Selector */}
              <div className="pt-4 border-t">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between text-lg font-medium bg-transparent"
                    >
                      {t("language")}: {currentLang.toUpperCase()}
                      <ChevronDown className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full">
                    <DropdownMenuItem>
                      <Link
                        className="w-full"
                        href={pathname.replace(/^\/(en|ar)/, "/en")}
                      >
                        English
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Link
                        className="w-full"
                        href={pathname.replace(/^\/(en|ar)/, "/ar")}
                      >
                        العربية
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              {/* Mobile CTA Button */}
              <div className="pt-4">
                <Button asChild className="w-full py-6 text-lg rounded-full">
                  <Link href="/get-started" onClick={closeMobileMenu}>
                    {t("getStarted")}
                  </Link>
                </Button>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
