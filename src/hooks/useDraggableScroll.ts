"use client";

import { useEffect, useRef, useState } from "react";

interface useDraggableScrollProps {
  damping?: number;
}

export function useDraggableScroll({ damping = 0.95 }: useDraggableScrollProps = {}) {
  const ref = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Velocity tracking
  const velocity = useRef(0);
  const prevX = useRef(0);
  const lastTime = useRef(0);
  const momentumId = useRef<number>();

  const checkScroll = () => {
    if (!ref.current) return;
    const { scrollLeft: sLeft, scrollWidth, clientWidth } = ref.current;
    
    // We update state for arrows
    const scrollTolerance = 5;
    setCanScrollLeft(sLeft > scrollTolerance);
    setCanScrollRight(sLeft < scrollWidth - clientWidth - scrollTolerance);
  };

  const startMomentum = () => {
    if (Math.abs(velocity.current) < 0.5) return;
    
    const tick = (_time: number) => {
      if (!ref.current) return;
      
      // Apply momentum
      ref.current.scrollLeft -= velocity.current;
      velocity.current *= damping; // De-accelerate
      checkScroll();
      
      if (Math.abs(velocity.current) > 0.5) {
        momentumId.current = requestAnimationFrame(tick);
      }
    };
    
    momentumId.current = requestAnimationFrame(tick);
  };

  const stopMomentum = () => {
    if (momentumId.current) {
      cancelAnimationFrame(momentumId.current);
    }
    velocity.current = 0;
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Check bounds on mount and resize
    checkScroll();
    const handleResize = () => checkScroll();
    window.addEventListener("resize", handleResize);

    // native scroll listener to just update bounds safely
    const handleNativeScroll = () => {
      if (!isDragging.current) {
         checkScroll();
      }
    };
    el.addEventListener("scroll", handleNativeScroll, { passive: true });

    // Drag handlers
    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      startX.current = e.pageX - el.offsetLeft;
      scrollLeft.current = el.scrollLeft;
      
      prevX.current = e.pageX;
      lastTime.current = performance.now();
      
      stopMomentum();
      el.style.scrollBehavior = "auto";
      el.style.cursor = "grabbing";
    };

    const onMouseLeave = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      el.style.cursor = "grab";
      startMomentum();
    };

    const onMouseUp = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      el.style.cursor = "grab";
      startMomentum();
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      
      const x = e.pageX - el.offsetLeft;
      
      // Calculate velocity for momentum
      const now = performance.now();
      const dt = now - lastTime.current;
      const dx = e.pageX - prevX.current;
      if (dt > 0) {
        // v = d/t. Using current mouse move delta vs time
        velocity.current = dx / (dt / 16); // normalize roughly to 60fps ms per frame
      }
      
      prevX.current = e.pageX;
      lastTime.current = now;

      // Calculate new scroll position
      const walk = (x - startX.current) * 1.5; // Drag multiplier
      let nextScrollLeft = scrollLeft.current - walk;

      // Apply rubber-banding resistance on edges
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (nextScrollLeft < 0) {
         // Rubber band left
         const overscroll = -nextScrollLeft;
         nextScrollLeft = -(overscroll ** 0.85); // Damped overscroll
      } else if (nextScrollLeft > maxScroll) {
         // Rubber band right
         const overscroll = nextScrollLeft - maxScroll;
         nextScrollLeft = maxScroll + (overscroll ** 0.85); // Damped overscroll
      }

      el.scrollLeft = nextScrollLeft;
      checkScroll();
    };

    el.addEventListener("mousedown", onMouseDown);
    el.addEventListener("mouseleave", onMouseLeave);
    el.addEventListener("mouseup", onMouseUp);
    el.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("resize", handleResize);
      el.removeEventListener("scroll", handleNativeScroll);
      el.removeEventListener("mousedown", onMouseDown);
      el.removeEventListener("mouseleave", onMouseLeave);
      el.removeEventListener("mouseup", onMouseUp);
      el.removeEventListener("mousemove", onMouseMove);
      stopMomentum();
    };
  }, [damping]);

  const snapScrollBy = (dir: "left" | "right") => {
    const el = ref.current;
    if (!el) return;
    stopMomentum();
    
    // Smooth behavior for button clicks
    el.style.scrollBehavior = "smooth";
    const cardWidth = el.querySelector<HTMLElement>(".hw-card")?.offsetWidth ?? 400;
    el.scrollBy({ left: dir === "left" ? -cardWidth - 20 : cardWidth + 20 });
    
    // reset tracking
    setTimeout(() => {
        if(el) el.style.scrollBehavior = "auto";
        checkScroll();
    }, 600);
  };

  return { ref, canScrollLeft, canScrollRight, snapScrollBy };
}
