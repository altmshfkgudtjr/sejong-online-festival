import Script from "next/script";

/**
 * Polyfill 적용 사항
 * - Intersection Observer
 * - Map
 * - Set
 * - requestAnimationFrame
 */
const Polyfill = () => {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        noModule
        src="https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver%2CMap%2CSet%2CrequestAnimationFrame"
      />
    </>
  );
};

export default Polyfill;
