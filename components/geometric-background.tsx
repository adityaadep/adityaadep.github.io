export function GeometricBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.6) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.6) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Top left accent - Clean professional triangles */}
      <svg 
        viewBox="0 0 300 300" 
        className="absolute -top-10 -left-10 w-72 h-72"
      >
        {/* Primary triangle */}
        <polygon 
          points="0,0 240,0 0,240" 
          fill="url(#primaryGrad)"
        />
        {/* Secondary smaller triangle */}
        <polygon 
          points="180,0 300,0 180,120" 
          fill="url(#secondaryGrad)"
          opacity="0.8"
        />
        {/* Accent arrow */}
        <polygon 
          points="200,60 260,90 200,120" 
          fill="url(#accentGrad)"
          opacity="0.9"
        />
        <defs>
          <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1d4ed8" />
          </linearGradient>
          <linearGradient id="secondaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#0284c7" />
          </linearGradient>
          <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Left edge accent bar */}
      <div 
        className="absolute top-72 -left-1 w-1.5 h-24 rounded-r-full opacity-60"
        style={{
          background: 'linear-gradient(180deg, #3b82f6 0%, #06b6d4 100%)',
        }}
      />

      {/* Bottom right subtle accent */}
      <svg 
        viewBox="0 0 200 200" 
        className="absolute -bottom-16 -right-16 w-48 h-48 opacity-15"
      >
        <polygon 
          points="200,200 0,200 200,0" 
          fill="#3b82f6"
        />
      </svg>

      {/* Subtle floating nodes */}
      <div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 rounded-full bg-primary/25 animate-pulse" />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 rounded-full bg-blue-400/20 animate-pulse" style={{ animationDelay: '0.7s' }} />
      <div className="absolute bottom-1/3 left-1/4 w-1 h-1 rounded-full bg-primary/15 animate-pulse" style={{ animationDelay: '1.4s' }} />
      
      {/* Very subtle radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-transparent" />
    </div>
  )
}
