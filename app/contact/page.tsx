"use client";

import { useState } from 'react'; 
import { Header } from '@/components/header';
import Chatbot from '../chatbot';

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function ContactUs() {
  const [selectedProblems, setSelectedProblems] = useState<string[]>([]);

  const handleCheckboxChange = (problem: string) => {
    setSelectedProblems((prevSelected) =>
      prevSelected.includes(problem)
        ? prevSelected.filter((item) => item !== problem)
        : [...prevSelected, problem]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      email: (e.target as HTMLFormElement).email.value,
      subject: (e.target as HTMLFormElement).subject.value,
      message: (e.target as HTMLFormElement).message.value,
      selectedProblems,
    };

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to send email');
      }

      alert('Email sent successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to send email. Please try again.');
    }
  };

  const problems = [
    'Technical Support',
    'Mobile app devlopement',
    'Web Devlopment',
    'Feature Request',
    'Bug Report',
  ];

  const problemDescriptions: { [key in typeof problems[number]]: string } = {
    'Technical Support': 'Receive help with troubleshooting and maintenance.',
    'Mobile app devlopement': 'Resolve issues related to login or account management.',
    'Web Devlopment': 'Assistance with billing, refunds, or payment processing.',
    'Feature Request': 'Suggest new features or improvements for our services.',
    'Bug Report': 'Report a problem or glitch in our system or software.',
  };

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      <section
        className="relative text-center text-white py-28"
        style={{
          backgroundImage: 'url(/17973908.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50"></div>

        <h1 className="relative text-4xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Contact Us
        </h1>
        <p className="relative text-lg max-w-2xl text-black mx-auto">
          How can we help you? Explore the topics below or send us a message directly.
        </p>
      </section>

      <section className="py-12 px-6 bg-black-900">
        <h2 className="text-3xl font-bold text-center mb-6 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
          Still Need Help?
        </h2>
        <form
          onSubmit={handleSubmit}
          className="max-w-4xl mx-auto bg-gray-900 border border-gray-700 p-8 rounded-lg shadow-lg relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-gray-300 font-semibold mb-2">
                Your Email Address
              </label>
              <input
                type="email"
                id="email"
                required
                className="border border-gray-600 bg-gray-800 p-3 rounded-lg focus:ring-2 focus:ring-purple-500 text-white"
                placeholder="name@flowbite.com"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="subject" className="text-gray-300 font-semibold mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                required
                className="border border-gray-600 bg-gray-800 p-3 rounded-lg focus:ring-2 focus:ring-purple-500 text-white"
                placeholder="Let us know how we can help you"
              />
            </div>
          </div>

          <div className="flex flex-col mb-6">
            <label htmlFor="message" className="text-gray-300 font-semibold mb-2">
              Your Message
            </label>
            <textarea
              id="message"
              required
              className="border border-gray-600 bg-gray-800 p-3 rounded-lg focus:ring-2 focus:ring-purple-500 text-white"
              placeholder="Leave a comment..."
            ></textarea>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4 text-white">Select Services</h3>
            <div className="flex flex-wrap gap-6">
              {problems.map((problem, index) => (
                <div key={index} className="flex flex-col items-start">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      id={problem}
                      checked={selectedProblems.includes(problem)}
                      onChange={() => handleCheckboxChange(problem)}
                      className="mr-3 w-5 h-5 border-2 border-gray-600 rounded-md appearance-none bg-gray-800 checked:bg-purple-500 checked:border-purple-500 relative"
                      style={{
                        backgroundImage: selectedProblems.includes(problem)
                          ? "url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22white%22 stroke-width=%222%22 stroke-linecap=%22round%22 stroke-linejoin=%22round%22%3E%3Cpolyline points=%226 12 10 16 18 8%22/%3E%3C/svg%3E')"
                          : 'none',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'center',
                        backgroundSize: '70%',
                      }}
                    />
                    <label htmlFor={problem} className="text-gray-300 text-lg">
                      {problem}
                    </label>
                  </div>
                  <p
                    className={`text-gray-400 text-sm ${
                      problem === 'Account Acesses' ? 'ml-16' : 'ml-16'
                    }`}
                  >
                    {problemDescriptions[problem as keyof typeof problemDescriptions]}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <Chatbot />

          <p className="text-gray-400 text-sm mb-4">
            By submitting this form, you confirm that you have read and agree to our{' '}
            <a href="#" className="text-purple-400 hover:underline">
              Terms of Service
            </a>{' '}
            and{' '}
            <a href="#" className="text-purple-400 hover:underline">
              Privacy Statement
            </a>
            .
          </p>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-3 px-6 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}