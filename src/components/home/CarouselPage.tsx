"use client";

import type { EmblaCarouselType } from "embla-carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ArrowDown } from "lucide-react";

// Slide Type
interface Slide {
  image: string;
  title: string;
  desc: string;
}

const CarouselPage = () => {
  const slides: Slide[] = [
    {
      image: "/images/carousel/img1.jpg",
      title: "गुरुकुल — ऋषियों की धरती से ज्ञान का प्रकाश",
      desc: "ज्ञान की प्राचीन परंपरा, शिक्षा का पवित्र धाम",
    },
    {
      image: "/images/carousel/img2.jpg",
      title: "गुरुकुल — शिक्षा, संस्कृति और संस्कार का संगम",
      desc: "ज्ञान, अनुशासन और आध्यात्मिकता का घर, गुरुओं की कृपा, शिष्यों का मार्ग",
    },
    {
      image: "/images/carousel/img3.jpg",
      title: "गुरुकुल — ज्ञान, अनुशासन और आध्यात्मिकता का घर",
      desc: "गुरुकुल: भारतीय शिक्षा की आत्मा, सीखने की प्राचीन परंपरा, जहाँ शिक्षा चरित्र निर्माण बनती है",
    },
  ];

  const [current, setCurrent] = useState(0);

  // Embla API – keep relaxed to avoid version-based type issues
  const [api, setApi] = useState<EmblaCarouselType | null>(null);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => {
      try {
        setCurrent(api.selectedScrollSnap());
      } catch {
        // defensive handling
      }
    };

    api.on("select", onSelect);
    onSelect();

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section className="w-full overflow-hidden">
      <Carousel
        className="relative w-full"
        setApi={setApi}
        opts={{
          loop: true,
        }}
      >
        {/* CONTENT */}
        <CarouselContent className="relative w-full !ml-0 !p-0 flex">
          {slides.map((item, index) => (
            <CarouselItem
              key={index}
              className="!pl-0 !ml-0 w-full h-[80vh] overflow-hidden"
            >
              <div className="relative w-full h-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="100vw"
                  className="object-cover"
                  priority
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* TEXT */}
                <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center px-4">
                    <h2 className="text-4xl font-bold drop-shadow-lg">
                      {item.title}
                    </h2>

                    <p className="text-lg mt-2 drop-shadow-lg">{item.desc}</p>

                    <div className="text-center px-4 pt-8 block">
                      <Link href="#next-section" className="cursor-pointer">
                        <Button
                          size="lg"
                          className="bg-gradient-to-r from-red-600 to-rose-500 hover:from-red-700 hover:to-rose-600 text-white shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-6"
                        >
                          आगे और देखें!
                          <ArrowDown className="ml-2 w-5 h-5" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* NAVIGATION */}
        <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2 z-10" />
        <CarouselNext className="right-4 top-1/2 -translate-y-1/2 z-10" />

        {/* DOTS */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-50">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`h-2 rounded-full transition-all ${
                current === i ? "bg-white w-6" : "bg-white/50 w-2"
              }`}
              onClick={() => api?.scrollTo(i)}
            />
          ))}
        </div>
      </Carousel>
    </section>
  );
};

export default CarouselPage;
