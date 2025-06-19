import { FingerPrintIcon } from "@heroicons/react/24/outline";
import { SlidersIcon, ThermometerSunIcon } from "lucide-react";

const Promo = () => {
  return (
    <div className="w-full pb-12   border-b border-[#333]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#B026FF]">
          Why Choose Cricon AI?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-8">
          {/* Feature 1 */}
          <div className="relative group bg-[#0a0a0a]/60 backdrop-blur-sm border border-[#333] rounded-2xl p-6 transition-all hover:border-[#00F0FF]/50">
            {/* Gradient shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F] opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity -z-10"></div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-gradient-to-r from-[#00F0FF] to-[#B026FF] rounded-full">
                <FingerPrintIcon className="h-8 w-8 text-black" />
              </div>

              <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#B026FF]">
                Natural, Human Voices
              </h3>

              <p className="text-gray-300">
                Create realistic voiceovers in multiple languages with our
                AI-powered text-to-speech technology that captures human-like
                intonation and emotion.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="relative group bg-[#0a0a0a]/60 backdrop-blur-sm border border-[#333] rounded-2xl p-6 transition-all hover:border-[#FF2E9F]/50">
            {/* Gradient shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F] opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity -z-10"></div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-gradient-to-r from-[#FF2E9F] to-[#B026FF] rounded-full">
                <ThermometerSunIcon className="h-8 w-8 text-black" />
              </div>

              <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#FF2E9F] to-[#B026FF]">
                Creative Text Generation
              </h3>

              <p className="text-gray-300">
                Generate compelling content in multiple languages with our
                advanced AI that understands context, tone, and creative
                expression.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="relative group bg-[#0a0a0a]/60 backdrop-blur-sm border border-[#333] rounded-2xl p-6 transition-all hover:border-[#B026FF]/50">
            {/* Gradient shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F] opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity -z-10"></div>

            <div className="flex flex-col items-center text-center">
              <div className="mb-4 p-3 bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F] rounded-full">
                <SlidersIcon className="h-8 w-8 text-black" />
              </div>

              <h3 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#00F0FF] to-[#FF2E9F]">
                Stunning Visual Creation
              </h3>

              <p className="text-gray-300">
                Generate high-quality thumbnails, posters, and AI images with
                intuitive controls and professional-grade results.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Promo;
