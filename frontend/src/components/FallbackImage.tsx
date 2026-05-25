import { useState } from "react";

interface FallbackImageProps {
  src: string;
  alt: string;
  className?: string;
  gradient?: string;
}

/**
 * Image component with gradient fallback for when external images fail to load.
 * Prevents broken image icons from appearing in the UI.
 */
const FallbackImage = ({ src, alt, className = "", gradient }: FallbackImageProps) => {
  const [failed, setFailed] = useState(false);

  const fallbackGradient =
    gradient ||
    "linear-gradient(135deg, hsla(var(--navy), 0.9) 0%, hsla(var(--navy), 0.55) 40%, hsla(var(--accent-red), 0.08) 100%)";

  if (failed) {
    return (
      <div
        className={`${className} relative`}
        style={{ background: fallbackGradient }}
        role="img"
        aria-label={alt}
      >
        <div className="absolute inset-0 flex items-center justify-center opacity-20">
          <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold">
            <path d="M21 15V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
        </div>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setFailed(true)}
      loading="lazy"
    />
  );
};

export default FallbackImage;
