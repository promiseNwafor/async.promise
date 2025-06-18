interface AsyncPromiseLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function AsyncPromiseLogo({ className = '', size = 'md' }: AsyncPromiseLogoProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  return (
    <div className={`${sizeClasses[size]} ${className} relative`}>
      <svg
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Background circle with gradient */}
        <defs>
          <linearGradient id="asyncGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5e5ce6" />
            <stop offset="100%" stopColor="#4f4cdb" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Main container circle */}
        <circle
          cx="16"
          cy="16"
          r="15"
          fill="url(#asyncGradient)"
          filter="url(#glow)"
          className="drop-shadow-lg"
        />
        
        {/* Async symbol - stylized "A" with arrow */}
        <path
          d="M8 22 L12 10 L16 22 M10 18 L14 18"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Promise symbol - stylized "P" with dots */}
        <path
          d="M18 10 L18 22 M18 10 L22 10 C23 10 24 11 24 12 C24 13 23 14 22 14 L18 14"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        
        {/* Async dots - representing the waiting state */}
        <circle cx="9" cy="8" r="1" fill="white" opacity="0.7">
          <animate
            attributeName="opacity"
            values="0.3;1;0.3"
            dur="1.5s"
            repeatCount="indefinite"
            begin="0s"
          />
        </circle>
        <circle cx="12" cy="6" r="1" fill="white" opacity="0.7">
          <animate
            attributeName="opacity"
            values="0.3;1;0.3"
            dur="1.5s"
            repeatCount="indefinite"
            begin="0.5s"
          />
        </circle>
        <circle cx="15" cy="8" r="1" fill="white" opacity="0.7">
          <animate
            attributeName="opacity"
            values="0.3;1;0.3"
            dur="1.5s"
            repeatCount="indefinite"
            begin="1s"
          />
        </circle>
        
        {/* Promise resolution arrow */}
        <path
          d="M22 18 L25 21 L22 24"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          opacity="0.8"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0; 2,0; 0,0"
            dur="2s"
            repeatCount="indefinite"
          />
        </path>
      </svg>
    </div>
  );
}