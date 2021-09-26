/** Default 메타 데이터 */
const DefaultMeta = () => {
  return (
    <>
      <meta name="description" content="세종대학교 온라인 축제 ONLINE. 즐겁게 즐겨보세요!" />
      <meta name="keywords" content={`세종대학교 온라인 축제, ONLINE`} />
			<meta name="copyright" content={`Copyright © 2021 ${process.env.NEXT_PUBLIC_BRAND_KOR}`} />
      <meta name="author" content={process.env.NEXT_PUBLIC_BRAND_KOR} />
      {/* ------------------------ Default ------------------------ */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_DEFAULT_HOST} />
      <meta property="og:site_name" content={process.env.NEXT_PUBLIC_BRAND_KOR} />
      <meta property="og:title" content={`[${process.env.NEXT_PUBLIC_BRAND_KOR}] 세상 모든 배움 초특가!!!`} />
      <meta property="og:description" content="세종대학교 온라인 축제 ONLINE. 즐겁게 즐겨보세요!" />
      <meta property="og:image" content={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/img/og_image.png`} />
      {/* ------------------------ Twitter ------------------------ */}
      <meta name="twitter:card" content="세종대학교 온라인 축제 ONLINE. 즐겁게 즐겨보세요!" />
      <meta name="twitter:domain" content={process.env.NEXT_PUBLIC_DEFAULT_HOST} />
      <meta name="twitter:title" content={`[${process.env.NEXT_PUBLIC_BRAND_KOR}] 세상 모든 배움 초특가!!!`} />
      <meta name="twitter:description" content="세종대학교 온라인 축제 ONLINE. 즐겁게 즐겨보세요!" />
      <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/img/og_image.png`} />
      {/* ------------------------ Facebook ----------------------- */}
      <meta name="facebook:card" content="세종대학교 온라인 축제 ONLINE. 즐겁게 즐겨보세요!" />
      <meta name="twitter:domain" content={process.env.NEXT_PUBLIC_DEFAULT_HOST} />
      <meta name="facebook:title" content={`[${process.env.NEXT_PUBLIC_BRAND_KOR}] 세상 모든 배움 초특가!!!`} />
      <meta name="facebook:description" content="세종대학교 온라인 축제 ONLINE. 즐겁게 즐겨보세요!" />
      <meta name="facebook:image" content={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/img/og_image.png`} />
    </>
  );
};

export default DefaultMeta;
