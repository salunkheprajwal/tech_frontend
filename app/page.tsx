// 'use client';

import { Hero } from '@/components/hero';
import Technologies from './Technologies/page';
import Services from './services/page';
import AboutUs from './aboutus/page';

export default function Home() {
  return (
    <main className="flex-grow pt-16 bg-black"> 
      <Hero />
      <div className="overflow-hidden bg-black py-24 sm:py-32 flex justify-center">
        <div className="mx-auto max-w-full px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8">
            <div className="w-full h-full flex justify-center">
              <img
                src="/image.png"
                alt="Modern Web Technologies"
                className="w-full h-auto max-w-screen-xl object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Add unique IDs to each section */}
      <section id="services">
        <Services />
      </section>
      
      <section id="technologies">
        <Technologies />
      </section>
      
      <section id="aboutus">
        <AboutUs />
      </section>
    </main>
  );
}
