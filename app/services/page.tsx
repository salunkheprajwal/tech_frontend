'use client';

import { Header } from '@/components/header';
import { FaApple, FaAndroid, FaCode, FaPaintBrush, FaCloud, FaRobot } from 'react-icons/fa';

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Build modern, responsive websites.",
      icon: <FaCode />,
    },
    {
      title: "Mobile App Development",
      description: "Create engaging Android and cross-platform mobile experiences.",
      icon: <FaAndroid />,
    },
    {
      title: "iOS App Development",
      description: "Deliver seamless iOS applications tailored to Apple’s ecosystem.",
      icon: <FaApple />,
    },
    {
      title: "UI/UX Design",
      description: "Design user-friendly and visually appealing interfaces.",
      icon: <FaPaintBrush />,
    },
    {
      title: "AWS Cloud Services",
      description: "Leverage the power of AWS for scalable cloud infrastructure, hosting, and solutions.",
      icon: <FaCloud />,
    },
    {
      title: "AI/ML Services",
      description: "Harness the power of AI and Machine Learning to automate tasks, gain insights, and innovate solutions.",
      icon: <FaRobot />,
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <section className="text-center py-28 bg-black">
        <h1 className="text-4xl font-bold mb-4">Services</h1>
        <p className="text-gray-400">Explore our wide range of professional services designed to elevate your business.</p>
      </section>

      {/* Services Section */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
        {services.map((service, index) => (
          <div key={index} className="border border-gray-700 p-4 rounded-lg shadow-lg bg-[#121212]/90 flex flex-col items-center">
            <div className="text-5xl mb-4 text-purple-400">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-400 text-center">{service.description}</p>
          </div>
        ))}
      </section>

      {/* Contact CTA */}
      <section className="py-6 bg-black-800 text-center">
        <h2 className="text-xl font-bold mb-2">Let’s Build Something Amazing Together</h2>
        <p className="text-md max-w-2xl mx-auto mb-4 text-gray-400">
          Ready to take your web presence to the next level? Contact us today to discuss your project!
        </p>
        <a
          href="/contact"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition mb-6" // Added margin-bottom for gap
        >
          Contact Us
        </a>
        <hr className="border-gray-600 mt-14" /> 
      </section>
    </main>
  );
}
