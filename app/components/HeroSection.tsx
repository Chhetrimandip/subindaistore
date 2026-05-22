"use client"
import { useRef } from "react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement | null>(null);

  const handleShopNow = () => {
    const el = sectionRef.current;
    if (!el) return;
    const top = el.offsetTop + el.offsetHeight;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section ref={sectionRef} className="relative w-full h-[819px] flex flex-1 items-center justify-center overflow-hidden">
      <img
        alt="Premium Sports Gear"
        className="absolute inset-0 w-full h-full object-cover"
        // src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO9RLi985cfZHuUpvqMNBZBEZr8lnS0-XYy0LmXwHE1izz7lv88rLT650C-1aggcWRRdlofvW4w-5a5E0fSw_i-HE9HFRcC_bEPZ7PkQsgwIFPZgtg12___UZQZFBN5E-r8CbzmlB30q1p0WMOR_K1np5yV3Xkoi8sjRIpErQpJwrxkxXpG5E5_CAEtzFPMQNSiB2zlgmIYDXSqR8DvPNBrQuMLCpjyRRmoGEgSX_NS2Yp6MIk7Fz7EBFFg6NVrb8HrPFPcZsSCLOK"
          src={"hero_bg.jpg"}
 />
      <div className="absolute inset-0 bg-primary/40"></div>
      
      {/* Container: Added w-full to ensure the inner elements have a reference width */}
      <div className="relative z-10 text-center px-4 md:px-20 w-full max-w-4xl mx-auto">
        <span className="bg-secondary-container text-on-secondary-container px-4 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-widest mb-4 inline-block">
          Premium Imported Gear
        </span>
        
        {/* Title: whitespace-nowrap or specific width keeps this from stacking letters */}
        <h1 className="font-headline-xl text-headline-xl text-white mb-6 leading-tight">
          The Ultimate Athletic Showroom.
        </h1>

      <p className="font-body-md text-white   mb-10 text-body-md text-on-surface-variant">
          Discover curated collections of world-class professional sports equipment. From elite
          performance jerseys to professional-grade trophies.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button onClick={handleShopNow} className="bg-secondary-container text-white px-8 py-4 font-label-lg text-label-lg rounded-lg hover:opacity-90 transition-all uppercase tracking-wider whitespace-nowrap">
            Shop Now
          </button>
          <button onClick={handleShopNow} className="border border-white text-white px-8 py-4 font-label-lg text-label-lg rounded-lg hover:bg-white hover:text-primary transition-all uppercase tracking-wider whitespace-nowrap">
            View Catalog
          </button>
        </div>
      </div>
    </section>
  );
}