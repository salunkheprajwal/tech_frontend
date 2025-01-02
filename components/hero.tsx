"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code, Laptop, Globe, Shield, Zap, Smartphone } from "lucide-react";

export function Hero() {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Background Video Section */}
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="3129902-uhd_3840_2160_25fps.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
      </video>

      {/* Hero Section */}
      <div className="relative z-10 py-16 bg-black/60">
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 lg:pt-32 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
              Crafting Digital Excellence for Your Business
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Transform your online presence with our cutting-edge web development solutions. 
              We build fast, secure, and scalable websites that drive results.
            </p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="bg-[#121212]/90 border-zinc-800 hover:border-indigo-500/50 transition-colors">
            <CardContent className="p-8">
              <div className="bg-emerald-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Laptop className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Custom Web Development</h3>
              <p className="text-gray-400 mb-4">
                Bespoke websites built with modern technologies to deliver exceptional user experiences.
              </p>
              <Button variant="ghost" className="text-emerald-500 p-0 flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-[#121212]/90 border-zinc-800 hover:border-indigo-500/50 transition-colors">
            <CardContent className="p-8">
              <div className="bg-emerald-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Responsive Design</h3>
              <p className="text-gray-400 mb-4">
                Mobile-first approach ensuring your website looks perfect on all devices.
              </p>
              <Button variant="ghost" className="text-emerald-500 p-0 flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-[#121212]/90 border-zinc-800 hover:border-indigo-500/50 transition-colors">
            <CardContent className="p-8">
              <div className="bg-emerald-500/20 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Performance Optimization</h3>
              <p className="text-gray-400 mb-4">
                Lightning-fast loading speeds and optimized performance for better user engagement.
              </p>
              <Button variant="ghost" className="text-emerald-400  p- 0 flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-5">
        <div className="mt-32">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[orange] mb-4">Why Choose Us</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              We combine technical expertise with creative excellence to deliver outstanding results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Code className="w-6 h-6" />,
                title: "Modern Tech Stack",
                description: "Using the latest technologies including React, Next.js, and TypeScript"
              },
              {
                icon: <Shield className="w-6 h-6" />,
                title: "Security First",
                description: "Built-in security measures to protect your website and users"
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Fast Development",
                description: "Quick turnaround without compromising on quality"
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Global Standards",
                description: "Following best practices and international web standards"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-zinc-900/50 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <div className="text-indigo-500">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
