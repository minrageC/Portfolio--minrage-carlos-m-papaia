interface HexagonImageProps {
  id: string;
  src: string;
  alt: string;
  className?: string;
  glowSize?: 'sm' | 'md' | 'lg';
}

export default function HexagonImage({ id, src, alt, className = '', glowSize = 'md' }: HexagonImageProps) {
  const glowShadow =
    glowSize === 'lg'
      ? 'drop-shadow(0 0 28px #00eeff)'
      : glowSize === 'sm'
      ? 'drop-shadow(0 0 16px #00eeff)'
      : 'drop-shadow(0 0 22px #00eeff)';

  return (
    <div id={id} className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Ambient Glow Backdrop Layer */}
      <div className="absolute w-[320px] h-[360px] sm:w-[380px] sm:h-[420px] bg-[#00eeff]/20 blur-[60px] rounded-full pointer-events-none -z-0"></div>

      {/* Hexagon Frame with SVG Polygon Clip Path */}
      <div
        className="relative w-[300px] h-[345px] xs:w-[340px] xs:h-[390px] sm:w-[380px] sm:h-[436px] flex items-center justify-center transition-all duration-500 hover:scale-[1.03] group cursor-pointer"
        style={{ filter: glowShadow }}
      >
        {/* Outer Hexagon Neon Ring Border (3px thickness via padding) */}
        <div
          className="w-full h-full bg-[#00eeff] p-[3.5px] transition-all duration-300"
          style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
        >
          {/* Inner Background Container */}
          <div
            className="w-full h-full bg-[#1b2029] overflow-hidden relative"
            style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)' }}
          >
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-95 group-hover:scale-105 group-hover:brightness-105 transition-all duration-700"
              loading="eager"
            />
            {/* Subtle inner top-lighting shine */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-[#0e141c]/40 pointer-events-none"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
