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

  return (
    <div className="relative w-full max-w-[500px] h-[500px] mx-auto md:w-[700px] md:h-[700px]">
      {/* Center logo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 md:w-24 md:h-24 bg-neutral-900 rounded-full flex items-center justify-center shadow-2xl border border-neutral-800">
        <div className="w-12 h-12 md:w-16 md:h-16 justify-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Circular icons */}
      {icons.map((icon, index) => {
        const angle = (index * 360) / icons.length;
        const radius = 120; // Reduced for smaller screens
        const radian = (angle - 90) * (Math.PI / 180);
        const x = Math.cos(radian) * radius;
        const y = Math.sin(radian) * radius;

        return (
          <div
            key={icon.name}
            className="absolute w-12 h-12 md:w-16 md:h-16 -translate-x-1/2 -translate-y-1/2 bg-neutral-900 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 cursor-pointer border border-neutral-800 shadow-xl"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
          >
            <icon.Icon className={`${icon.colorClass} text-2xl md:text-3xl`} />
          </div>
        );
      })}
    </div>
  );
};

export default function Technologies() {
  const [email, setEmail] = useState('');

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Technologies Section */}
      <div className="container mx-auto px-4 md:px-9 py-16 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left side - Content */}
          <div className="space-y-8 px-4 md:px-0">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Strategies we use to craft modern apps
              </h1>
              <p className="text-gray-400 text-base md:text-lg">
                Take a look at the modern & advanced frameworks we use to craft apps for your business with an affordable budget
              </p>
            </div>

            <div className="space-y-6 md:space-y-8">
              {/* Strategy items */}
              {[
                {
                  title: "Hybrid Frameworks",
                  description: "We create applications that work on cross-platform compatibility to help achieve cross-platform app support with a low budget."
                },
                {
                  title: "Responsive UI & Experience",
                  description: "Our applications are designed to provide a seamless experience across all devices and screen sizes."
                },
                {
                  title: "Top-notch Security",
                  description: "We implement industry-standard security measures to protect your application and user data."
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <FaCheckCircle className="text-purple-500 text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm md:text-base">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full md:w-auto px-6 md:px-8 py-2 md:py-3 rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold hover:opacity-90 transition-opacity uppercase tracking-wide">
              Learn More
            </button>
          </div>

          {/* Right side - Tech stack visualization */}
          <div className="order-first lg:order-last lg:translate-x-10">
            <CircularTechStack />
          </div>
        </div>
      </div>

      {/* Subscription Section */}
      <div className="relative isolate overflow-hidden bg-neutral-900 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-12 lg:gap-y-16 lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                Stay Ahead in Technology
              </h2>
              <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8">
                Technology evolves fast! Subscribe to get regular updates on the latest frameworks, tools, and trends shaping the future of software development.
              </p>
              <ul className="space-y-3 md:space-y-4 text-gray-300 mb-6 md:mb-8">
                {[
                  "Latest insights on React, Node.js, and emerging technologies.",
                  "Tutorials and best practices for building scalable applications.",
                  "Updates on cloud services, databases, and AI-driven solutions."
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <FaCheckCircle className="text-green-500 flex-shrink-0" />
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-lg bg-neutral-800 px-4 py-3 text-base text-white border border-neutral-700 placeholder:text-gray-500 focus:outline-none focus:border-purple-500"
                  placeholder="Email address"
                />
                <button className="w-full md:w-auto rounded-lg bg-gradient-to-r from-green-400 to-blue-500 px-6 md:px-8 py-3 text-base font-semibold text-white shadow-sm hover:opacity-90 transition-opacity">
                  Join Now
                </button>
              </div>
            </div>

            <div className="flex flex-col items-start justify-center mt-8 lg:mt-0">
              <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 md:mb-6">
                Exclusive Perks Include:
              </h3>
              <ul className="space-y-3 text-gray-300">
                {[
                  "Access to premium tutorials",
                  "Early updates on frameworks",
                  "Networking opportunities with professionals",
                  "Invitations to community meetups"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <span className="text-base md:text-lg">✅</span>
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Background gradient effect */}
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6">
          <div 
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30" 
            style={{ 
              clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' 
            }}
          ></div>
        </div>
      </div>
    </main>
  );
}