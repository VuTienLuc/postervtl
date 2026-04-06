import React from 'react';

interface BorderProps {
  color?: string;
  className?: string;
}

export const SportBorder: React.FC<BorderProps> = ({ color = 'currentColor', className = '' }) => (
  <div className={`absolute inset-0 pointer-events-none ${className}`}>
    <svg width="100%" height="100%" viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M20 20L60 20M20 20L20 60" stroke={color} strokeWidth="4" strokeLinecap="square"/>
      <path d="M380 20L340 20M380 20L380 60" stroke={color} strokeWidth="4" strokeLinecap="square"/>
      <path d="M20 580L60 580M20 580L20 540" stroke={color} strokeWidth="4" strokeLinecap="square"/>
      <path d="M380 580L340 580M380 580L380 540" stroke={color} strokeWidth="4" strokeLinecap="square"/>
      <path d="M0 300L15 300M385 300L400 300" stroke={color} strokeWidth="2" strokeOpacity="0.5"/>
    </svg>
  </div>
);

export const ElegantBorder: React.FC<BorderProps> = ({ color = 'currentColor', className = '' }) => (
  <div className={`absolute inset-0 pointer-events-none p-4 ${className}`}>
    <div className="w-full h-full border-2 border-double" style={{ borderColor: color }}>
      <svg width="100%" height="100%" viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="absolute inset-0">
        <path d="M0 40C0 17.9086 17.9086 0 40 0H60V10H40C23.4315 10 10 23.4315 10 40V60H0V40Z" fill={color} />
        <path d="M400 40C400 17.9086 382.091 0 360 0H340V10H360C376.569 10 390 23.4315 390 40V60H400V40Z" fill={color} />
        <path d="M0 560C0 582.091 17.9086 600 40 600H60V590H40C23.4315 590 10 576.569 10 560V540H0V560Z" fill={color} />
        <path d="M400 560C400 582.091 382.091 600 360 600H340V590H360C376.569 590 390 576.569 390 560V540H400V560Z" fill={color} />
      </svg>
    </div>
  </div>
);

export const CuteBorder: React.FC<BorderProps> = ({ color = 'currentColor', className = '' }) => (
  <div className={`absolute inset-0 pointer-events-none ${className}`}>
    <svg width="100%" height="100%" viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <circle cx="20" cy="20" r="10" fill={color} fillOpacity="0.3" />
      <circle cx="380" cy="20" r="10" fill={color} fillOpacity="0.3" />
      <circle cx="20" cy="580" r="10" fill={color} fillOpacity="0.3" />
      <circle cx="380" cy="580" r="10" fill={color} fillOpacity="0.3" />
      <path d="M40 20H360M40 580H360M20 40V560M380 40V560" stroke={color} strokeWidth="2" strokeDasharray="8 8" />
    </svg>
  </div>
);

export const CertificateBorder: React.FC<BorderProps> = ({ color = '#d4af37', className = '' }) => (
  <div className={`absolute inset-0 pointer-events-none p-2 ${className}`}>
    <div className="w-full h-full border-[12px] border-double" style={{ borderColor: color }}>
      <div className="w-full h-full border-2 border-solid m-1" style={{ borderColor: color }}>
        <svg width="100%" height="100%" viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="absolute inset-0">
          <rect x="10" y="10" width="30" height="30" fill={color} />
          <rect x="360" y="10" width="30" height="30" fill={color} />
          <rect x="10" y="560" width="30" height="30" fill={color} />
          <rect x="360" y="560" width="30" height="30" fill={color} />
        </svg>
      </div>
    </div>
  </div>
);

export const ModernBorder: React.FC<BorderProps> = ({ color = 'currentColor', className = '' }) => (
  <div className={`absolute inset-0 pointer-events-none ${className}`}>
    <svg width="100%" height="100%" viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <path d="M0 0L100 0L0 100Z" fill={color} fillOpacity="0.1" />
      <path d="M400 600L300 600L400 500Z" fill={color} fillOpacity="0.1" />
      <rect x="20" y="20" width="360" height="560" stroke={color} strokeWidth="1" strokeDasharray="4 4" strokeOpacity="0.3" />
    </svg>
  </div>
);

export const HeritageBorder: React.FC<BorderProps> = ({ color = '#e11d48', className = '' }) => (
  <div className={`absolute inset-0 pointer-events-none ${className}`}>
    <svg width="100%" height="100%" viewBox="0 0 400 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
      <rect x="10" y="10" width="380" height="580" stroke={color} strokeWidth="2" fill="none" />
      <path d="M0 0L40 0L0 40Z" fill={color} />
      <path d="M400 0L360 0L400 40Z" fill={color} />
      <path d="M0 600L40 600L0 560Z" fill={color} />
      <path d="M400 600L360 600L400 560Z" fill={color} />
      {/* Small star motifs in corners */}
      <path d="M20 20L23 26L29 26L24 30L26 36L20 32L14 36L16 30L11 26L17 26Z" fill="white" />
      <path d="M380 20L383 26L389 26L384 30L386 36L380 32L374 36L376 30L371 26L377 26Z" fill="white" />
    </svg>
  </div>
);

export const WavingFlag: React.FC<{ className?: string }> = ({ className = '' }) => (
  <div className={`pointer-events-none ${className}`}>
    <svg viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg">
      <path d="M0 5C20 -5 30 15 50 5C70 -5 80 15 100 5V55C80 65 70 45 50 55C30 65 20 45 0 55V5Z" fill="#DA251D" />
      <path d="M50 20L52.35 27.24H60L53.82 31.71L56.18 38.94L50 34.47L43.82 38.94L46.18 31.71L40 27.24H47.65L50 20Z" fill="#FFFF00" />
    </svg>
  </div>
);

export const LaurelWreath: React.FC<BorderProps> = ({ color = '#d4af37', className = '' }) => (
  <div className={`pointer-events-none ${className}`}>
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M60 160C40 140 30 110 30 80C30 50 40 30 60 20" stroke={color} strokeWidth="4" strokeLinecap="round" />
      <path d="M140 160C160 140 170 110 170 80C170 50 160 30 140 20" stroke={color} strokeWidth="4" strokeLinecap="round" />
      {/* Left leaves */}
      <path d="M35 140Q25 135 30 125Q35 115 45 120" fill={color} />
      <path d="M30 110Q20 105 25 95Q30 85 40 90" fill={color} />
      <path d="M30 80Q20 75 25 65Q30 55 40 60" fill={color} />
      <path d="M35 50Q25 45 30 35Q35 25 45 30" fill={color} />
      <path d="M45 25Q35 20 40 10Q45 0 55 5" fill={color} />
      {/* Right leaves */}
      <path d="M165 140Q175 135 170 125Q165 115 155 120" fill={color} />
      <path d="M170 110Q180 105 175 95Q170 85 160 90" fill={color} />
      <path d="M170 80Q180 75 175 65Q170 55 160 60" fill={color} />
      <path d="M165 50Q175 45 170 35Q165 25 155 30" fill={color} />
      <path d="M155 25Q165 20 160 10Q155 0 145 5" fill={color} />
    </svg>
  </div>
);
