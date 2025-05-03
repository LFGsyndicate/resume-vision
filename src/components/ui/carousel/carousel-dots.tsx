
import * as React from "react"
import { CircleDot } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useCarousel } from "./use-carousel"

const CarouselDots = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { scrollTo, selectedIndex, scrollSnaps } = useCarousel()

  return (
    <div
      ref={ref}
      className={cn("flex justify-center gap-1 mt-4", className)}
      {...props}
    >
      {scrollSnaps.map((_, index) => (
        <Button
          key={index}
          variant="ghost"
          size="sm"
          className={cn(
            "h-6 w-6 p-0 rounded-full",
            selectedIndex === index ? "opacity-100" : "opacity-50"
          )}
          onClick={() => scrollTo(index)}
        >
          <CircleDot className={cn(
            "h-3 w-3",
            selectedIndex === index ? "text-primary" : "text-muted-foreground"
          )} />
          <span className="sr-only">Go to slide {index + 1}</span>
        </Button>
      ))}
    </div>
  )
})
CarouselDots.displayName = "CarouselDots"

export { CarouselDots }
