export function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
        <div className="text-center">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} async.promise. Built with Next.js, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
} 