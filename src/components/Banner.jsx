import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Card, CardContent } from "./ui/card";

const Banner = ({ images }) => {
  return (
    <div className="relative w-full h-80 overflow-hidden rounded-2xl shadow-lg">
      <Carousel className="w-full h-full">
        <CarouselContent className="h-full">
          {images.map((src, index) => (
            <CarouselItem key={index} className="h-full">
              <Card className="border-0 shadow-none h-full">
                <CardContent className="p-0 h-full">
                  <img
                    src={src}
                    alt={`banner-${index}`}
                    className="object-cover w-full h-full rounded-2xl"
                    loading="lazy"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 sm:left-4 bg-white/60 hover:bg-white" />
        <CarouselNext className="right-2 sm:right-4 bg-white/60 hover:bg-white" />
      </Carousel>
    </div>
  );
};

export default Banner;
