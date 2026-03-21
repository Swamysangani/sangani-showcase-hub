"use client";

import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useEffect, useState, ReactNode } from "react";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

export interface GalleryItem {
  id: string;
  title: string;
  summary: ReactNode;
  url?: string;
  image: string;
  linkLabel?: string;
  liveUrl?: string;
}

interface Gallery6Props {
  heading?: string;
  demoUrl?: string;
  demoLabel?: string;
  items?: GalleryItem[];
}

const Gallery6 = ({
  heading = "Gallery",
  demoUrl = "https://github.com/Swamysangani",
  demoLabel = "View GitHub",
  items = [],
}: Gallery6Props) => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on("select", updateSelection);
    return () => {
      carouselApi.off("select", updateSelection);
    };
  }, [carouselApi]);
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
          <div>
            <h2 className="mb-3 font-heading text-3xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              {heading}
            </h2>
            {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-1 text-sm font-medium text-primary md:text-base lg:text-lg"
            >
              {demoLabel}
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            )}
          </div>
          <div className="mt-8 flex shrink-0 items-center justify-start gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full relative h-auto">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              "(max-width: 768px)": {
                dragFree: true,
              },
            },
          }}
          className="relative max-w-6xl mx-auto"
        >
          <CarouselContent className="">
            {items.map((item) => (
              <CarouselItem key={item.id} className="pl-4 md:basis-1/2 lg:basis-1/2">
                <div className="group flex flex-col justify-between h-full glass-card p-4 rounded-xl hover:border-primary/30 transition-colors">
                  <div>
                    <div className="flex aspect-[3/2] overflow-clip rounded-xl">
                      <div className="flex-1">
                        <div className="relative h-full w-full origin-bottom transition duration-300 group-hover:scale-105">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mb-2 line-clamp-2 break-words pt-4 font-heading text-lg font-semibold md:mb-3 md:pt-4 md:text-xl lg:pt-4">
                    {item.title}
                  </div>
                  <div className="mb-4 text-sm text-muted-foreground grow">
                    {item.summary}
                  </div>
                  <div className="flex items-center gap-4 text-sm mt-auto pt-4 border-t border-primary/10">
                    {item.url && (
                      <a href={item.url} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                        {item.linkLabel || "Read more"}{" "}
                        <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    )}
                    {item.liveUrl && (
                      <a href={item.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-primary hover:underline">
                        Live Demo{" "}
                        <ArrowRight className="ml-1 size-4 transition-transform group-hover:translate-x-1" />
                      </a>
                    )}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export { Gallery6 };
