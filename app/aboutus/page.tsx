'use client';

import { Header } from '@/components/header';
import { FaLaptopCode, FaUsers, FaAward } from 'react-icons/fa';

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      {/* Hero Section */}
      <section className="text-center bg-black text-white py-28">
        <h1 className="text-3xl font-bold mb-2">About Us</h1>
        <p className="text-md max-w-2xl mx-auto">
          We are a passionate team of web developers dedicated to crafting innovative, responsive, and user-friendly websites.
        </p>
      </section>

      {/* Mission Section */}
      {/* <section className="py-8 px-6 text-center bg-black">
        <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Our mission is to empower businesses with cutting-edge web solutions that drive growth, enhance user experience, and foster brand identity.
        </p>
      </section> */}

      {/* Core Values Section */}
      <section className="py-8 px-6 bg-gray-900">
        <h2 className="text-2xl font-bold text-center mb-4">Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="flex flex-col items-center text-center">
            <FaLaptopCode className="text-4xl text-blue-400 mb-3" />
            <h3 className="font-semibold text-lg">Innovation</h3>
            <p className="text-gray-400">We stay ahead of trends to deliver state-of-the-art solutions.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaUsers className="text-4xl text-blue-400 mb-3" />
            <h3 className="font-semibold text-lg">Collaboration</h3>
            <p className="text-gray-400">We value teamwork, transparency, and client partnerships.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <FaAward className="text-4xl text-blue-400 mb-3" />
            <h3 className="font-semibold text-lg">Excellence</h3>
            <p className="text-gray-400">Our commitment to quality ensures exceptional results.</p>
          </div>
        </div>
      </section>

      {/* Meet Our Leadership Section */}
      <section className="bg-black py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Meet our leadership
            </h2>
            <p className="mt-6 text-lg text-gray-300">
              We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            <li>
              <div className="flex items-center gap-x-6">
                <img
                  className="w-16 h-16 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Leslie Alexander"
                />
                <div>
                  <h3 className="text-base font-semibold tracking-tight text-white">Leslie Alexander</h3>
                  <p className="text-sm font-semibold text-blue-400">Co-Founder / CEO</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-x-6">
                <img
                  className="w-16 h-16 rounded-full"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Michael Foster"
                />
                <div>
                  <h3 className="text-base font-semibold tracking-tight text-white">Michael Foster</h3>
                  <p className="text-sm font-semibold text-blue-400">Head of Product</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-x-6">
                <img
                  className="w-16 h-16 rounded-full"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Sarah Connor"
                />
                <div>
                  <h3 className="text-base font-semibold tracking-tight text-white">Sarah Connor</h3>
                  <p className="text-sm font-semibold text-blue-400">Lead Developer</p>
                </div>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-x-6">
                <img
                  className="w-16 h-16 rounded-full"
                  src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt="Emily Rios"
                />
                <div>
                  <h3 className="text-base font-semibold tracking-tight text-white">Emily Rios</h3>
                  <p className="text-sm font-semibold text-blue-400">UI/UX Designer</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-6 bg-gray-800 text-white text-center">
        <h2 className="text-xl font-bold mb-2">Let’s Build Something Amazing Together</h2>
        <p className="text-md max-w-2xl mx-auto mb-4">
          Ready to take your web presence to the next level? Contact us today to discuss your project!
        </p>
        <a
          href="/contact"
          className="bg-white text-black py-2 px-4 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
