"use client";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "@/components/ui/carousel";
import {
    SpecificImageEdgeType,
    SpecificImageNodeType,
    SpecificImageType
} from "@/types/specific-product";
import Image from "next/image";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function ImageCarousel({ images }: { images: SpecificImageType }) {
    const [selectedImage, setSelectedImage] = useState(images.edges[0]);

    return (
        <div className="flex w-full flex-col items-center justify-center">
            <Card className="aspect-square">
                <CardContent className="flex aspect-square items-center justify-center p-4">
                    <img
                        src={selectedImage.node.originalSrc}
                        alt={selectedImage.node.altText}
                        className="aspect-square rounded-md"
                    />
                </CardContent>
            </Card>
            <div className="mt-4 flex flex-row flex-wrap items-center justify-center gap-3">
                {images.edges.length > 1 &&
                    images.edges.map((image, key) => (
                        <div
                            key={key}
                            className={cn(
                                image.node.originalSrc === selectedImage.node.originalSrc
                                    ? "rounded-md ring-2 ring-primary ring-offset-2 ring-offset-background"
                                    : "",
                                "flex h-16 w-16 cursor-pointer flex-col items-center justify-center transition-all duration-150 ease-in-out hover:scale-[1.1]"
                            )}
                            onClick={() => setSelectedImage(image)}
                        >
                            <Card className="aspect-square">
                                <CardContent className="flex aspect-square items-center justify-center p-0">
                                    <img
                                        src={image.node.originalSrc}
                                        alt={image.node.altText}
                                        className="aspect-square h-full w-full rounded-sm"
                                    />
                                </CardContent>
                            </Card>
                        </div>
                    ))}
            </div>
        </div>
    );
}
