import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function PricingCards() {
  return (
    <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {/* Basic Plan */}
      <Card className="relative border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl font-bold">
            Basic
          </CardTitle>
          <p className="text-muted-foreground mt-2">
            For small kindergartens and individuals getting started.
          </p>
          <div className="mt-6">
            <span className="text-3xl font-bold">79000 DA</span>
            <span className="text-muted-foreground ml-2">/year</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-4">
              What's included:
            </h4>
            <ul className="space-y-3 text-left rtl:text-right text-sm">
              <li className="flex items-center">
                <div className="w-5 h-5 border-primary border-1 rounded-full flex items-center justify-center mr-3">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-muted-foreground">1 Admin + 1 Teacher</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 border-primary border-1 rounded-full flex items-center justify-center mr-3">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-muted-foreground">Up to 30 Students</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 border-primary border-1 rounded-full flex items-center justify-center mr-3">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-muted-foreground">Attendance tracking</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 border-primary border-1 rounded-full flex items-center justify-center mr-3">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-muted-foreground">
                  Basic health & pedagogical reports
                </span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 border-primary border-1 rounded-full flex items-center justify-center mr-3">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-muted-foreground">Email support</span>
              </li>
            </ul>
          </div>
          <Button className="w-full bg-primary hover:bg-primary/80 text-white rounded-full py-3">
            Get Started
          </Button>
        </CardContent>
      </Card>

      {/* Pro Plan - Popular */}
      <Card className="relative border-1 border-primary shadow-lg scale-105">
        <div className="w-full absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground py-3 rounded-t-xl text-sm font-medium">
            Popular Plan
        </div>
        <CardHeader className="pt-4 rounded-t-xl">
          <CardTitle className="text-xl font-bold">
            Pro
          </CardTitle>
          <p className="text-muted-foreground mt-2">Recommended for growing schools</p>
          <div>
            <span className="text-3xl font-bold">11900 DA</span>
            <span className="text-muted-foreground ml-2">/year</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-4">
              What's included:
            </h4>
            <ul className="space-y-3 text-left rtl:text-right  text-sm">
              <li className="flex items-center">
                <div className="w-5 h-5 border-primary border-1 rounded-full flex items-center justify-center mr-3">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-muted-foreground">
                  Up to 3 Admins + Unlimited Teachers
                </span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 border-primary border-1 rounded-full flex items-center justify-center mr-3">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-muted-foreground">
                  Unlimited students & classrooms
                </span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 border-primary border-1 rounded-full flex items-center justify-center mr-3">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-muted-foreground">Full reports</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 border-primary border-1 rounded-full flex items-center justify-center mr-3">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-muted-foreground">Payments management</span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 border-primary border-1 rounded-full flex items-center justify-center mr-3">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-muted-foreground">Role-based dashboards</span>
              </li>
            </ul>
          </div>
          <Button className="w-full bg-primary hover:bg-primary/80 text-white rounded-full py-3">
            Start with Pro
          </Button>
        </CardContent>
      </Card>

      {/* Enterprise Plan */}
      <Card className="relative border border-border shadow-sm">
        <CardHeader>
          <CardTitle className="text-xl font-bold">
            Enterprise
          </CardTitle>
          <p className="text-muted-foreground mt-2">
            for large educational institutions and multi-branch kindergartens
          </p>
          <div className="mt-6">
            <span className="text-3xl font-bold">15000 DA</span>
            <span className="text-muted-foreground ml-2">/year</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-semibold mb-4">
              What's included:
            </h4>
            <ul className="space-y-3 text-left rtl:trxt-right text-sm">
              <li className="flex items-center">
                <div className="w-5 h-5 border-primary border-1 rounded-full flex items-center justify-center mr-3">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-muted-foreground">
                  Unlimited students and classrooms
                </span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 border-primary border-1 rounded-full flex items-center justify-center mr-3">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-muted-foreground">
                  Multiple admin & teacher accounts
                </span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 border-primary border-1 rounded-full flex items-center justify-center mr-3">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-muted-foreground">
                  Advanced attendance & report export
                </span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 border-primary border-1 rounded-full flex items-center justify-center mr-3">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-muted-foreground">
                  Monthly performance reports
                </span>
              </li>
              <li className="flex items-center">
                <div className="w-5 h-5 border-primary border-1 rounded-full flex items-center justify-center mr-3">
                  <Check className="w-3 h-3 text-primary" />
                </div>
                <span className="text-muted-foreground">Staff onboarding guide</span>
              </li>
            </ul>
          </div>
          <Button className="w-full bg-primary hover:bg-primary/80 text-white rounded-full py-3">
            Contact Sales
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
