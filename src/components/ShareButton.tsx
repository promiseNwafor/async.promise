'use client';

interface ShareButtonProps {
  title: string;
  className?: string;
  children: React.ReactNode;
}

export function ShareButton({ title, className, children }: ShareButtonProps) {
  const handleShare = async () => {
    const url = window.location.href;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title,
          url,
        });
      } catch {
        // Fallback to clipboard
        await navigator.clipboard.writeText(url);
        alert('Article URL copied to clipboard!');
      }
    } else {
      // Fallback to clipboard
      await navigator.clipboard.writeText(url);
      alert('Article URL copied to clipboard!');
    }
  };

  return (
    <button onClick={handleShare} className={className}>
      {children}
    </button>
  );
}