export default function Logo({ className = "w-8 h-8", textClassName = "text-2xl" }: { className?: string, textClassName?: string }) {
  return (
    <div className="flex items-center gap-2">
      <div className={`relative flex items-center justify-center ${className}`}>
        <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
          <defs>
            <linearGradient id="toothGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
            <linearGradient id="sparkleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FDE047" />
              <stop offset="100%" stopColor="#F59E0B" />
            </linearGradient>
          </defs>
          {/* Tooth Body */}
          <path d="M25,30 C25,15 40,15 50,25 C60,15 75,15 75,30 C75,45 65,55 60,75 C58,85 52,85 50,75 C48,85 42,85 40,75 C35,55 25,45 25,30 Z" fill="url(#toothGrad)" />
          {/* Smile */}
          <path d="M40,40 Q50,50 60,40" stroke="white" strokeWidth="4" strokeLinecap="round" fill="none" />
          {/* Eyes */}
          <circle cx="42" cy="32" r="4" fill="white" />
          <circle cx="58" cy="32" r="4" fill="white" />
          {/* Sparkle */}
          <path d="M75,15 L80,22 L87,15 L80,8 Z" fill="url(#sparkleGrad)" />
          <path d="M15,50 L18,54 L22,50 L18,46 Z" fill="url(#sparkleGrad)" opacity="0.8" />
        </svg>
      </div>
      <span className={`font-bold tracking-tight text-blue-600 ${textClassName}`}>SmileCare</span>
    </div>
  );
}
