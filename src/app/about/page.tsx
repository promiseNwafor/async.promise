import { Code, Lightbulb, Users, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'About - async.promise',
  description: 'Learn more about the vision behind async.promise - exploring AI in software engineering',
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
            About async.promise
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Awaiting the future</span>
            <br />
            <span className="text-white">of AI in software engineering</span>
          </h1>
          
          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Where AI meets async development. Exploring the promises and pitfalls 
            of AI-powered software engineering in the modern development landscape.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 pb-24">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white mb-4">The Promise</h2>
            <p className="text-white/70 leading-relaxed">
              async.promise explores the rapidly evolving intersection of AI and software engineering. 
              As AI tools become integral to development workflows, we need thoughtful analysis of their 
              promises, limitations, and practical applications.
            </p>
            <p className="text-white/70 leading-relaxed">
              This blog captures the async nature of AI development - the waiting, the promises, 
              the resolutions, and yes, the rejections. It&apos;s about understanding when AI delivers 
              on its promises and when human expertise remains irreplaceable.
            </p>
          </div>
          
          <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
            <h3 className="text-xl font-semibold text-white mb-4">Core Themes</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#5e5ce6] rounded-full" />
                <span className="text-white/70">AI integration patterns and practices</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#5e5ce6] rounded-full" />
                <span className="text-white/70">Production challenges with AI systems</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#5e5ce6] rounded-full" />
                <span className="text-white/70">Critical analysis of AI limitations</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#5e5ce6] rounded-full" />
                <span className="text-white/70">Future of AI-powered development</span>
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
              <h3 className="text-lg font-semibold text-white mb-2">Awaiting: Future Tools</h3>
              <p className="text-white/60 text-sm">
                Exploring upcoming AI tools, their promises, and potential impact on 
                software development workflows.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover-lift">
              <div className="w-12 h-12 bg-gradient-to-br from-[#5e5ce6] to-[#4f4cdb] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Resolving: Integration Challenges</h3>
              <p className="text-white/60 text-sm">
                Practical solutions for integrating AI into production systems, 
                handling edge cases, and managing complexity.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all hover-lift">
              <div className="w-12 h-12 bg-gradient-to-br from-[#5e5ce6] to-[#4f4cdb] rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Catching: AI Limitations</h3>
              <p className="text-white/60 text-sm">
                Critical analysis of where AI falls short and when human expertise 
                remains essential in software development.
              </p>
            </div>
          </div>
        </div>

        {/* Connect Section */}
        <div className="text-center p-8 rounded-2xl bg-white/5 border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-4">Join the Conversation</h2>
          <p className="text-white/70 mb-6 max-w-2xl mx-auto">
            Whether you&apos;re building AI-powered applications, wrestling with integration challenges, 
            or simply curious about the future of AI in software engineering, let&apos;s connect 
            and explore these async promises together.
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