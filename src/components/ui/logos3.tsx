"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { type LucideIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./carousel";

export interface SkillLogo {
  id: string;
  name: string;
  icon: LucideIcon;
}

interface Logos3Props {
  heading?: string;
  logos: SkillLogo[];
  className?: string;
}

const Logos3 = ({
  heading = "My Skills",
  logos,
  className
}: Logos3Props) => {
  return (
    <section className={`py-12 ${className || ""}`}>
      {heading && (
        <div className="container flex flex-col items-center text-center">
          <h3 className="mb-8 text-xl font-heading font-semibold text-pretty">
            {heading}
          </h3>
        </div>
      )}
      <div className="pt-4">
        <div className="relative mx-auto flex items-center justify-center max-w-full lg:max-w-5xl overflow-hidden glass-card rounded-2xl py-8">
          <Carousel
            opts={{ loop: true }}
            plugins={[AutoScroll({ playOnInit: true, speed: 1.5 })]}
            className="w-full"
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => {
                const Icon = logo.icon;
                return (
                  <CarouselItem
                    key={logo.id}
                    className="flex basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/6 justify-center pl-0"
                  >
                    <div className="mx-4 flex shrink-0 flex-col items-center justify-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                      <div className="p-4 rounded-full bg-secondary/50">
                        <Icon size={32} strokeWidth={1.5} />
                      </div>
                      <span className="text-sm font-medium">{logo.name}</span>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
          </Carousel>
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export { Logos3 };
