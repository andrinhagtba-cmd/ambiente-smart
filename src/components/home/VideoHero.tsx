import { Link } from "@tanstack/react-router";
import { ChevronDown, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import heroVideoAsset from "@/assets/hero-video.mp4.asset.json";
import heroPoster from "@/assets/hero-poster.jpg";

/**
 * Hero em vídeo da Home.
 * Vídeo: src/assets/hero-video.mp4 (via CDN) — Poster: src/assets/hero-poster.jpg
 * Com fallback estático para prefers-reduced-motion e economia de dados.
 */
export function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showVideo, setShowVideo] = useState(false);
  const [playing, setPlaying] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const nav = navigator as Navigator & { connection?: { saveData?: boolean } };
    const saveData = nav.connection?.saveData === true;
    if (!reducedMotion && !saveData) setShowVideo(true);
  }, []);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      void video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  return (
    <section className="relative isolate flex min-h-[80vh] items-end overflow-hidden bg-ink md:min-h-[90vh]">
      {/* Mídia de fundo */}
      <img
        src={heroPoster}
        alt="Sala de estar contemporânea com cortina de linho do teto ao piso e luz natural suave"
        width={1920}
        height={1080}
        fetchPriority="high"
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      {showVideo ? (
        <video
          ref={videoRef}
          className="absolute inset-0 -z-20 size-full object-cover"
          src={heroVideoAsset.url}
          poster={heroPoster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          tabIndex={-1}
        />
      ) : null}

      {/* Overlays para legibilidade */}
      <div className="absolute inset-0 -z-10 bg-ink/35" aria-hidden="true" />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-2/3 bg-gradient-to-t from-ink/75 to-transparent"
        aria-hidden="true"
      />

      <div className="container-site relative w-full pb-24 pt-40 md:pb-32">
        <div className="max-w-2xl">
          <p className="eyebrow text-bronze">Decoração sob medida</p>
          <h1 className="mt-5 text-[2.75rem] leading-[1.04] text-cream md:text-7xl lg:text-[5.25rem]">
            Cortinas que transformam luz em atmosfera.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/85 md:text-lg">
            Soluções personalizadas para criar ambientes mais elegantes, confortáveis e funcionais.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/orcamento" className="btn btn-light w-full sm:w-auto">
              Solicitar orçamento
            </Link>
            <Link to="/servicos" className="btn btn-outline-light w-full sm:w-auto">
              Conhecer soluções
            </Link>
          </div>
        </div>
      </div>

      {/* Controle do vídeo */}
      {showVideo ? (
        <button
          type="button"
          onClick={togglePlayback}
          aria-label={playing ? "Pausar vídeo de fundo" : "Reproduzir vídeo de fundo"}
          className="absolute bottom-6 right-6 z-10 flex size-11 items-center justify-center rounded-full border border-cream/30 text-cream/80 transition-colors hover:border-cream hover:text-cream"
        >
          {playing ? <Pause className="size-4" aria-hidden="true" /> : <Play className="size-4" aria-hidden="true" />}
        </button>
      ) : null}

      {/* Indicador de scroll */}
      <div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-cream/60 md:flex"
        aria-hidden="true"
      >
        <span className="text-[0.65rem] uppercase tracking-[0.3em]">Role</span>
        <ChevronDown className="size-4 animate-bounce" />
      </div>
    </section>
  );
}
