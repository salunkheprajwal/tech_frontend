import { Hero } from '@/components/hero';
import Technologies from './Technologies/page';
import Services from './services/page';
import AboutUs from './aboutus/page';

export default function Home() {
  return (
    <main className="flex-grow pt-16 bg-black">
      <Hero />

      {/* Fullscreen Horizontal Image Section */}
      <div className="overflow-hidden bg-black py-24 sm:py-32 flex justify-center">
        <div className="mx-auto max-w-full px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            {/* Fullscreen Horizontal Image */}
            <div className="w-full h-full flex justify-center">
              <img
                src="/image.png" // Path to your image file
                alt="Modern Web Technologies"
                className="w-full h-auto max-w-screen-xl object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Add IDs for smooth scrolling */}
      <div id="technologies" className="pt-0">
        <Technologies />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="about-us">
        <AboutUs />
      </div>
    </main>
  );
}
