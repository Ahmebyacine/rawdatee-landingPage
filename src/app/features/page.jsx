import { FeatureCard } from "@/components/feature-card";
export const metadata = {
  title: "Features | Rawdatee",
};
export default function FeaturesPage() {
  return (
    <section className="w-full py-8 px-4 container mx-auto text-center max-w-5xl space-y-6 mt-10">
      <h1 className="text-2xl md:text-3xl font-bold text-foregrounud mb-6 leading-tight">
        Smart Features for Smoother Kindergarten Management
        <p className="text-sm text-muted-foreground">
          Simplify your daily tasks, connect with parents, and keep everything
          in one place.
        </p>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FeatureCard
          title="Attendance Tracking"
          description="Mark daily presence and absence with ease for every class and student."
          imageSrc="/attendace.png"
        />

        <FeatureCard
          title="Instant Reports"
          description="Share health and pedagogical reports directly with parents."
          imageSrc="/reports.png"
          width={800}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="col-span-2">
          <FeatureCard
            title="Multi-role Access"
            description="Separate dashboards for Admins, Monitors, and Teachers."
            imageSrc="/multiRole.png"
          />
        </div>

        <FeatureCard
          title="Classroom Management"
          description="Manage class structures."
          imageSrc="/classRoom.png"
          width={800}
        />
      </div>
    </section>
  );
}
