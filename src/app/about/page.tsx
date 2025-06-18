import { Code, Lightbulb, Users, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About - Linear Blog',
  description: 'Learn more about the creator and vision behind this blog',
};

export default function AboutPage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial opacity-30" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm text-white/70 mb-8">
            <Users className="w-4 h-4" />
            Meet the creator
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Building the future</span>
            <br />
            <span className="text-white">one idea at a time</span>
          </h1>
          
          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Passionate about the intersection of technology, design, and human creativity. 
            Exploring how we can use code to solve meaningful problems.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 pb-24">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-4">My Journey</h2>
            <p className="text-white/70 leading-relaxed">
              Welcome to my digital space! I&apos;m a passionate technologist who believes in the power 
              of well-crafted code and thoughtful design. This blog is where I document my learning 
              journey, share insights, and explore the evolving landscape of technology.
            </p>
            <p className="text-white/70 leading-relaxed">
              Built with cutting-edge technologies including Next.js, TypeScript, and Tailwind CSS, 
              this platform represents my commitment to creating performant, accessible, and beautiful 
              web experiences.
            </p>
          </div>
          
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">Quick Facts</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#5e5ce6] rounded-full" />
                <span className="text-white/70">Focus on modern web technologies</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#5e5ce6] rounded-full" />
                <span className="text-white/70">Passionate about developer experience</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#5e5ce6] rounded-full" />
                <span className="text-white/70">Advocate for clean, maintainable code</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#5e5ce6] rounded-full" />
                <span className="text-white/70">Always learning and sharing knowledge</span>
              </div>
            </div>
          </div>
        </div>

        {/* What You'll Find Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What You&apos;ll Discover</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover-lift">
              <div className="w-12 h-12 bg-gradient-to-br from-[#5e5ce6] to-[#4f4cdb] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Technical Deep Dives</h3>
              <p className="text-white/60 text-sm">
                In-depth tutorials, code reviews, and explorations of complex technical concepts 
                made accessible.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover-lift">
              <div className="w-12 h-12 bg-gradient-to-br from-[#5e5ce6] to-[#4f4cdb] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Industry Insights</h3>
              <p className="text-white/60 text-sm">
                Thoughts on emerging technologies, development trends, and the future 
                of software engineering.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover-lift">
              <div className="w-12 h-12 bg-gradient-to-br from-[#5e5ce6] to-[#4f4cdb] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Community Stories</h3>
              <p className="text-white/60 text-sm">
                Showcases of amazing projects, developer spotlights, and reflections 
                on our growing tech community.
              </p>
            </div>
          </div>
        </div>

        {/* Connect Section */}
        <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-4">Let&apos;s Connect</h2>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            I&apos;d love to connect with fellow developers, designers, and tech enthusiasts. 
            Whether you have questions, feedback, or just want to chat about the latest 
            in technology, feel free to reach out!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-[#5e5ce6] hover:bg-[#4f4cdb] text-white px-6 py-3 rounded-xl font-medium transition-all hover:scale-105"
            >
              Explore Articles
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            
            <button className="inline-flex items-center gap-2 text-white/70 hover:text-white px-6 py-3 rounded-xl border border-white/10 hover:border-white/20 font-medium transition-all backdrop-blur-sm">
              Get in Touch
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
} 