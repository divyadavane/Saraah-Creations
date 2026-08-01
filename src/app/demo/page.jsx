"use client";

import dynamic from "next/dynamic";
import { useEffect } from "react";

const Component = dynamic(() => import("@/components/ui/experience-hero"), {
  ssr: false,
});

export default function DemoOne() {
  useEffect(() => {
    import("lenis").then((LenisModule) => {
      const Lenis = LenisModule.default;
      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
      return () => lenis.destroy();
    });
  }, []);

  return (
    <div className="dark min-h-screen bg-[#020202] selection:bg-white selection:text-black">
      <main className="relative w-full overflow-x-hidden">
        <Component />
        <div className="fixed inset-0 pointer-events-none bento-mask opacity-10 z-[100]" />
      </main>
    </div>
  );
}
