import { Hero } from "@/components/hero";
import { Why } from "./why";
import { Testimonials } from "./testimonials";
import { Newsletter } from "@/components/newsletter";

export default function LandingPage() {
  return (
    <main className="flex flex-col gap-8">
      <Hero />

      <Why />

      <Testimonials />

      <Newsletter />
    </main>
  );
}
