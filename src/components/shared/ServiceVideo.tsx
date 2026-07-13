import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ServiceVideoProps {
  src: string;
  poster: string;
  alt: string;
  className?: string;
}

/**
 * Vídeo premium para as páginas de serviço.
 * - autoplay, muted, loop, playsinline (compatível com iOS)
 * - respeita prefers-reduced-motion pausando o vídeo (mantém poster)
 */
export function ServiceVideo({ src, poster, alt, className }: ServiceVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const el = videoRef.current;
    if (!el) return;
    if (media.matches) {
      el.pause();
      el.removeAttribute("autoplay");
    }
  }, []);

  return (
    <div
      className={cn(
        "group relative isolate overflow-hidden rounded-[2rem] bg-secondary shadow-[0_30px_80px_-40px_oklch(0.185_0.008_70/0.45)] ring-1 ring-border/60",
        className,
      )}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={alt}
        className="aspect-[4/5] w-full object-cover"
      />
      {/* Vinheta suave para leitura */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/25 via-transparent to-transparent"
      />
      {/* Selo discreto */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-4 flex items-center gap-2 rounded-full border border-white/30 bg-ink/40 px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.22em] text-ink-foreground backdrop-blur-md"
      >
        <span className="relative flex size-1.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-bronze opacity-70" />
          <span className="relative inline-flex size-1.5 rounded-full bg-bronze" />
        </span>
        Ao vivo
      </div>
    </div>
  );
}
