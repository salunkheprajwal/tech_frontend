'use client';

import { useState } from 'react';
import { Header } from '@/components/header';
import { FaCheckCircle } from 'react-icons/fa';
import {
  SiAmazon,
  SiReact,
  SiMongodb,
  SiPostgresql,
  SiFlutter,
  SiGraphql,
  SiNodedotjs,
} from 'react-icons/si';

const CircularTechStack = () => {
  const [icons] = useState([
    { name: 'AWS', Icon: SiAmazon, colorClass: 'text-blue-400' },
    { name: 'React', Icon: SiReact, colorClass: 'text-cyan-400' },
    { name: 'MongoDB', Icon: SiMongodb, colorClass: 'text-green-400' },
    { name: 'PostgreSQL', Icon: SiPostgresql, colorClass: 'text-blue-400' },
    { name: 'Flutter', Icon: SiFlutter, colorClass: 'text-cyan-400' },
    { name: 'GraphQL', Icon: SiGraphql, colorClass: 'text-pink-400' },
    { name: 'Node.js', Icon: SiNodedotjs, colorClass: 'text-green-400' },
  ]);

  // Async code can be moved into useEffect or a separate function if necessary

  return (
    <div className="relative w-[700px] h-[700px]">
      {/* Center logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-neutral-900 rounded-full flex items-center justify-center shadow-2xl border border-neutral-800">
        <div className="w-16 h-16 justify-center">
          <img
            src="/logo.png" // Replace this with the path to your logo
            alt="Logo"
            className="w-16 h-16 object-contain"
          />
        </div>
      </div>

      {/* Circular icons */}
      {icons.map((icon, index) => {
        const angle = (index * 360) / icons.length;
        const radius = 160; // Reduced the radius to make it smaller
        const radian = (angle - 90) * (Math.PI / 180);
        const x = Math.cos(radian) * radius;
        const y = Math.sin(radian) * radius;

        return (
          <div
            key={icon.name}
            className="absolute w-16 h-16 -translate-x-1/2 -translate-y-1/2 bg-neutral-900 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer border border-neutral-800 shadow-xl"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
          >
            <icon.Icon className={`${icon.colorClass} text-3xl`} />
          </div>
        );
      })}

      {/* Connecting lines */}
      <svg
        className="absolute top-0 left-0 w-full h-full -z-10"
        viewBox="0 0 600 600"
      >
        <circle
          cx="250"
          cy="250"
          r="160"
          fill="none"
          stroke="rgba(255,255,255,0.05)"
          strokeWidth="1"
        />
        <circle
          cx="250"
          cy="250"
          r="140"
          fill="none"
          stroke="rgba(255,255,255,0.03)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

export default function Technologies() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Technologies Section */}
      <div className="container mx-auto px-9 py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left side - Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-6xl font-bold mb-6 leading-tight ml-4">
                Strategies we use to craft modern apps
              </h1>
              <p className="text-gray-400 text-lg ml-4">
                Take a look at the modern & advanced frameworks we use to craft apps for your business with an affordable budget
              </p>
            </div>

            <div className="space-y-8">
              {/* Strategy items */}
              <div className="flex items-start gap-4 ml-4">
                <FaCheckCircle className="text-purple-500 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Hybrid Frameworks</h3>
                  <p className="text-gray-400">
                    We create applications that work on cross-platform compatibility to help achieve cross-platform app support with a low budget.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 ml-4">
                <FaCheckCircle className="text-purple-500 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Responsive UI & Experience
                  </h3>
                  <p className="text-gray-400">
                    Our applications are designed to provide a seamless experience across all devices and screen sizes.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 ml-4">
                <FaCheckCircle className="text-purple-500 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Top-notch Security</h3>
                  <p className="text-gray-400">
                    We implement industry-standard security measures to protect your application and user data.
                  </p>
                </div>
              </div>
            </div>

            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-opacity uppercase tracking-wide ml-4">
              Learn More
            </button>
          </div>

          {/* Right side - Tech stack visualization */}
          <div className="lg:translate-x-10">
            <CircularTechStack />
          </div>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="relative isolate overflow-hidden bg-neutral-900 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-4xl font-bold tracking-tight text-white mb-4 ml-4">
                Stay Ahead in Technology
              </h2>
              <p className="text-lg text-gray-300 mb-8 ml-4">
                Technology evolves fast! Subscribe to get regular updates on the latest frameworks, tools, and trends shaping the future of software development.
              </p>
              <ul className="space-y-4 text-gray-300 mb-8 ml-4">
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 flex-shrink-0" />
                  Latest insights on React, Node.js, and emerging technologies.
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 flex-shrink-0" />
                  Tutorials and best practices for building scalable applications.
                </li>
                <li className="flex items-center gap-2">
                  <FaCheckCircle className="text-green-500 flex-shrink-0" />
                  Updates on cloud services, databases, and AI-driven solutions.
                </li>
              </ul>
              <div className="flex max-w-md gap-x-4">
                <input
                  type="email"
                  required
                  className="min-w-0 flex-auto rounded-lg bg-neutral-800 px-4 py-3 text-base text-white border border-neutral-700 placeholder:text-gray-500 focus:outline-none focus:border-purple-500"
                  placeholder="Email address"
                />
                <button className="flex-none rounded-lg bg-gradient-to-r from-green-400 to-blue-500 px-8 py-3 text-base font-semibold text-white shadow-sm hover:opacity-90 transition-opacity">
                  Join Now
                </button>
              </div>
            </div>

            <div className="flex flex-col items-start justify-center lg:items-start">
              <h3 className="text-2xl font-semibold text-white mb-6 ml-4">
                Exclusive Perks Include:
              </h3>
              <ul className="space-y-4 text-gray-300 ml-4">
                <li className="flex items-center gap-2">
                  <span className="text-lg">✅</span>
                  Access to premium tutorials
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-lg">✅</span>
                  Early updates on frameworks
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-lg">✅</span>
                  Networking opportunities with professionals
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-lg">✅</span>
                  Invitations to community meetups
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
          <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
  </div>
      </div>
    </main>
  );
}
