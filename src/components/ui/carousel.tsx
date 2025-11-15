"use client";

import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

/**
 * NOTE:
 * - Embla types vary between versions. To avoid build/type mismatches across projects,
 *   this file types Embla-related values as `any`. If you prefer stricter typing,
 *   replace `any` with the correct Embla types from your installed `embla-carousel-react`.
 */

/* ---------- Props & Context Types ---------- */

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  opts?: any; // Embla options (use your Embla types here if desired)
  plugins?: any[]; // Embla plugins
  setApi?: (api: any) => void; // Embla API setter (use Embla types if desired)
}

type CarouselContextType = {
  carouselRef: (node: HTMLDivElement | null) => void;
  api: any | undefined;
  opts?: any;
  orientation: "horizontal" | "vertical";
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
};

const CarouselContext = React.createContext<CarouselContextType | null>(null);

/* ---------- Hook to use context ---------- */
export function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}

/* ---------- Carousel Root ---------- */

export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    // Using `any` for the embla return to avoid typing mismatches between embla versions
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    );

    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const updateControls = React.useCallback((emblaApi: any) => {
      if (!emblaApi) return;
      try {
        setCanScrollPrev(
          Boolean(emblaApi.canScrollPrev && emblaApi.canScrollPrev())
        );
        setCanScrollNext(
          Boolean(emblaApi.canScrollNext && emblaApi.canScrollNext())
        );
      } catch {
        // defensive: some plugin combinations may not expose these
        setCanScrollPrev(false);
        setCanScrollNext(false);
      }
    }, []);

    const scrollPrev = React.useCallback(() => api?.scrollPrev?.(), [api]);
    const scrollNext = React.useCallback(() => api?.scrollNext?.(), [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );

    React.useEffect(() => {
      if (!api || !setApi) return;
      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) return;

      updateControls(api);
      // embla events
      api.on?.("reInit", updateControls);
      api.on?.("select", updateControls);

      return () => {
        try {
          api.off?.("select", updateControls);
          api.off?.("reInit", updateControls);
        } catch {
          /* ignore */
        }
      };
    }, [api, updateControls]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api,
          opts,
          orientation,
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = "Carousel";

/* ---------- CarouselContent ---------- */

export interface CarouselContentProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const CarouselContent = React.forwardRef<
  HTMLDivElement,
  CarouselContentProps
>(({ className, ...props }, ref) => {
  const ctx = useCarousel();
  // carouselRef comes from useEmblaCarousel above
  const { carouselRef, orientation } = ctx;

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

/* ---------- CarouselItem ---------- */

export interface CarouselItemProps
  extends React.HTMLAttributes<HTMLDivElement> {}

export const CarouselItem = React.forwardRef<HTMLDivElement, CarouselItemProps>(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();

    return (
      <div
        ref={ref}
        role="group"
        aria-roledescription="slide"
        className={cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className
        )}
        {...props}
      />
    );
  }
);
CarouselItem.displayName = "CarouselItem";

/* ---------- Controls (Previous / Next) ---------- */

export interface CarouselNavProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: string;
  size?: string;
}

export const CarouselPrevious = React.forwardRef<
  HTMLButtonElement,
  CarouselNavProps
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrev}
      onClick={scrollPrev}
      {...props}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
});
CarouselPrevious.displayName = "CarouselPrevious";

export const CarouselNext = React.forwardRef<
  HTMLButtonElement,
  CarouselNavProps
>(({ className, variant = "outline", size = "icon", ...props }, ref) => {
  const { orientation, scrollNext, canScrollNext } = useCarousel();

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollNext}
      {...props}
    >
      <ArrowRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
});
CarouselNext.displayName = "CarouselNext";
