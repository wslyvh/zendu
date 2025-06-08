import { Newsletter } from "@/components/newsletter";
import { Hero } from "@/components/hero";
import { Target, Zap, Heart } from "lucide-react";

export default function LandingPage() {
  return (
    <main className="flex flex-col gap-8">
      <Hero />

      <section className="max-w-5xl mx-auto mb-8 py-16 px-4 text-center text-gray-800">
        <p className="text-accent text-sm font-medium mb-2">
          Embrace imperfection
        </p>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Progress over perfection
        </h2>
        <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-600">
          Zendu's philosophy is simple: embrace imperfection, celebrate small
          wins, and keep moving forward. We believe that consistent daily
          progress, no matter how small, creates lasting transformation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">
          {/* Consistency */}
          <div className="flex flex-col items-center">
            <div className="bg-green-400/90 rounded-xl p-4 mb-4 shadow-md">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Consistency</h3>
            <p className="max-w-xs text-gray-600">
              Small daily actions that compound into extraordinary results over
              time.
            </p>
          </div>

          {/* Focus */}
          <div className="flex flex-col items-center">
            <div className="bg-blue-500/90 rounded-xl p-4 mb-4 shadow-md">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Focus</h3>
            <p className="max-w-xs text-gray-600">
              Clear direction and gentle guidance to help you stay aligned with
              what matters most.
            </p>
          </div>

          {/* Momentum */}
          <div className="flex flex-col items-center">
            <div className="bg-pink-400/90 rounded-xl p-4 mb-4 shadow-md">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Momentum</h3>
            <p className="max-w-xs">
              Building forward motion that carries you through challenges with
              compassion.
            </p>
          </div>
        </div>
      </section>

      <Newsletter />
    </main>
  );
}
