"use client";
import { useEffect } from "react";
import gsap from "gsap";

export default function cursor(){
  // Kursor 
  // ⏬
  // ⏬
  // ⏬
  useEffect(() => {
    
    const cursor = document.querySelector(".custom-cursor") as HTMLElement | null;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.2, ease: "power2.out" });
    };

    document.addEventListener("mousemove", moveCursor);

    return () => {
      document.removeEventListener("mousemove", moveCursor);
    };
  }, []);
  // XXXXX


    return(
        <div className="custom-cursor"></div>
    );
}