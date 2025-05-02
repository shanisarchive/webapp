import React from 'react';
import { Shield, Globe, Bell, Code, Mail, Cpu, MessageSquare, Browser, Settings } from 'lucide-react';

const ProductCard = ({ icon, title, description, category, children }: any) => (
  <div className="bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl p-6 w-full max-w-sm hover:shadow-blue-500/20 transition-all duration-300">
    <div className="flex items-center justify-between mb-3">
      <div className="text-aura-silver text-sm font-medium tracking-wide uppercase">{category}</div>
      <div className="text-white/80">{icon}</div>
    </div>
    <div className="text-white text-xl font-semibold mb-2">{title}</div>
    <p className="text-white/70 text-sm leading-snug">{description}</p>
    {children}
  </div>
);

export default function AuraProductsShowcase() {
  return (
    <div className="min-h-screen bg-black text-white py-20 px-4 md:px-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProductCard
        icon={<Shield className="text-blue-500" />}
        title="Zaya OS"
        category="System"
        description="A Rust-built microkernel operating system for secure AI workloads."
      />
      <ProductCard
        icon={<Globe className="text-purple-500" />}
        title="Sphere"
        category="Browser"
        description="Privacy-forward browser • Search, no trackers."
      />
      <ProductCard
        icon={<MessageSquare className="text-pink-500" />}
        title="Ping / Air Meet"
        category="Comms"
        description="Docs. Mail. Meet—rebuilt for focus and control."
      />
      <ProductCard
        icon={<Bell className="text-yellow-400" />}
        title="Notifications"
        category="System"
        description="Smart notifications. Less distraction."
      />
      <ProductCard
        icon={<Code className="text-blue-400" />}
        title="AirScript"
        category="Docs"
        description="Minimalist, programmable writing suite for researchers & creatives."
      />
      <ProductCard
        icon={<Mail className="text-pink-300" />}
        title="AirMail"
        category="Inbox"
        description="Streamlined, private-first email experience for modern teams."
      />
      <ProductCard
        icon={<Cpu className="text-red-500" />}
        title="BODHI-1"
        category="Processor"
        description="India’s first AI-native processor—efficient, open, and powerful."
      />
      <ProductCard
        icon={<Settings className="text-lime-400" />}
        title="BarX"
        category="Language"
        description="A reflexive programming language designed for the next generation of intelligent systems."
      />
      <ProductCard
        icon={<Mail className="text-sky-300" />}
        title="AirStore"
        category="Utility"
        description="Decentralized, zero-loss cloud storage engineered for sovereignty."
      />
    </div>
  );
}
