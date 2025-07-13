import { Target, Zap, Heart } from "lucide-react";

export function Why() {
  return (
    <section className="max-w-5xl mx-auto mb-8 py-16 px-4 text-center text-gray-800">
      <p className="text-accent text-sm font-medium mb-2">Why Zendu works ✨</p>
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
        Daily progress. Long-term clarity.
      </h2>
      <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto text-gray-600">
        Every check-in helps you reflect on what matters most and move forward
        with confidence. It's not about doing more. It's about making better
        decisions faster, that compound over time.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">
        {/* Consistency */}
        <div className="flex flex-col items-center">
          <div className="bg-green-400/90 rounded-xl p-4 mb-4 shadow-md">
            <Target className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold my-2">Consistency</h3>
          <p className="max-w-xs text-gray-600">
            Daily actions that compound into extraordinary results over time.
          </p>
        </div>

        {/* Focus */}
        <div className="flex flex-col items-center">
          <div className="bg-blue-500/90 rounded-xl p-4 mb-4 shadow-md">
            <Zap className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold my-2">Focus</h3>
          <p className="max-w-xs text-gray-600">
            Cut through noise to stay aligned with what matters most.
          </p>
        </div>

        {/* Momentum */}
        <div className="flex flex-col items-center">
          <div className="bg-pink-400/90 rounded-xl p-4 mb-4 shadow-md">
            <Heart className="h-8 w-8 text-white" />
          </div>
          <h3 className="text-xl font-bold my-2">Momentum</h3>
          <p className="max-w-xs text-gray-600">
            Move forward until progress becomes a habit.
          </p>
        </div>
      </div>
    </section>
  );
}
