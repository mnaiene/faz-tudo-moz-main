import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Lista das imagens que quer mostrar
const SLIDES = [
  {
    url: "https://images.unsplash.com/photo-1581094794329-cd1096a7a5e1?q=80&w=2670&auto=format&fit=crop",
    alt: "Eletricista a trabalhar"
  },
  {
    url: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=2670&auto=format&fit=crop",
    alt: "Canalização e Reparos"
  },
  {
    url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2669&auto=format&fit=crop",
    alt: "Técnico de Climatização"
  },
  {
    url: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2670&auto=format&fit=crop",
    alt: "Jardinagem e Exteriores"
  },
  {
    url: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2670&auto=format&fit=crop",
    alt: "Pintura Profissional"
  },
  {
    url: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&w=2670&auto=format&fit=crop",
    alt: "Limpeza de casa"
  }
]

export function HeroCarousel() {
  // Configuração do carrossel (loop infinito e autoplay de 4 segundos)
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4000, stopOnInteraction: false })
  ])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className="relative h-full w-full group">
      {/* Janela de visualização (Viewport) */}
      <div className="overflow-hidden h-full" ref={emblaRef}>
        <div className="flex touch-pan-y h-full">
          {SLIDES.map((slide, index) => (
            <div className="flex-[0_0_100%] min-w-0 relative h-full" key={index}>
              <img
                src={slide.url}
                alt={slide.alt}
                className="w-full h-full object-cover"
              />
              {/* Opcional: Gradiente escuro em baixo para texto se precisar */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
            </div>
          ))}
        </div>
      </div>

      {/* Botão Esquerda */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-lg backdrop-blur-md border border-white/20"
        aria-label="Anterior"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Botão Direita */}
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all shadow-lg backdrop-blur-md border border-white/20"
        aria-label="Próximo"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  )
}