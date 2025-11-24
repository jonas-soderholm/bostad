import HeroVideo from "@/components/HeroVideo";
import LandingTabs from "@/components/LandingTabs";

export default function Page() {
  return (
    <main className="w-full min-h-screen bg-slate-200">
      <div className="w-full flex justify-center md:px-3">
        <HeroVideo />
      </div>

      <LandingTabs />
    </main>
  );
}
