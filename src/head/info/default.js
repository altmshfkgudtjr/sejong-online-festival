/** Default 메타 데이터 */
const DefaultMeta = () => {
  return (
    <>
      <meta name="description" content="매일 업데이트되는 온라인 클래스 선착순 할인! 국내 최대 100만 수강 참여! 끝까지 듣는다! 다이어트, 영상편집, 캘리그라피, 식단관리, 공예, 필라테스, 발레핏, 라이프스타일, 댄스, 요가, 스피치" />
      <meta name="keywords" content={`${process.env.NEXT_PUBLIC_BRAND_KOR}, 다이어트, 영상편집, 캘리그라피, 식단관리, 공예, 필라테스, 발레핏, 라이프스타일, 댄스, 요가, 스피치`} />
			<meta name="copyright" content={`Copyright © 2021 ${process.env.NEXT_PUBLIC_BRAND_KOR}`} />
      <meta name="author" content={process.env.NEXT_PUBLIC_BRAND_KOR} />
      {/* ------------------------ Default ------------------------ */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={process.env.NEXT_PUBLIC_DEFAULT_HOST} />
      <meta property="og:site_name" content={process.env.NEXT_PUBLIC_BRAND_KOR} />
      <meta property="og:title" content={`[${process.env.NEXT_PUBLIC_BRAND_KOR}] 세상 모든 배움 초특가!!!`} />
      <meta property="og:description" content="매일 업데이트되는 온라인 클래스 선착순 할인! 국내 최대 100만 수강 참여! 끝까지 듣는다! 다이어트, 영상편집, 캘리그라피, 식단관리, 공예, 필라테스, 발레핏, 라이프스타일, 댄스, 요가, 스피치" />
      <meta property="og:image" content={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/img/class/classu.png`} />
      {/* ------------------------ Twitter ------------------------ */}
      <meta name="twitter:card" content="매일 업데이트되는 온라인 클래스 선착순 할인! 국내 최대 100만 수강 참여! 끝까지 듣는다! 다이어트, 영상편집, 캘리그라피, 식단관리, 공예, 필라테스, 발레핏, 라이프스타일, 댄스, 요가, 스피치" />
      <meta name="twitter:domain" content={process.env.NEXT_PUBLIC_DEFAULT_HOST} />
      <meta name="twitter:title" content={`[${process.env.NEXT_PUBLIC_BRAND_KOR}] 세상 모든 배움 초특가!!!`} />
      <meta name="twitter:description" content="매일 업데이트되는 온라인 클래스 선착순 할인! 국내 최대 100만 수강 참여! 끝까지 듣는다! 다이어트, 영상편집, 캘리그라피, 식단관리, 공예, 필라테스, 발레핏, 라이프스타일, 댄스, 요가, 스피치" />
      <meta name="twitter:image" content={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/img/class/classu.png`} />
      {/* ------------------------ Facebook ----------------------- */}
      <meta name="facebook:card" content="매일 업데이트되는 온라인 클래스 선착순 할인! 국내 최대 100만 수강 참여! 끝까지 듣는다! 다이어트, 영상편집, 캘리그라피, 식단관리, 공예, 필라테스, 발레핏, 라이프스타일, 댄스, 요가, 스피치" />
      <meta name="twitter:domain" content={process.env.NEXT_PUBLIC_DEFAULT_HOST} />
      <meta name="facebook:title" content={`[${process.env.NEXT_PUBLIC_BRAND_KOR}] 세상 모든 배움 초특가!!!`} />
      <meta name="facebook:description" content="매일 업데이트되는 온라인 클래스 선착순 할인! 국내 최대 100만 수강 참여! 끝까지 듣는다! 다이어트, 영상편집, 캘리그라피, 식단관리, 공예, 필라테스, 발레핏, 라이프스타일, 댄스, 요가, 스피치" />
      <meta name="facebook:image" content={`${process.env.NEXT_PUBLIC_ASSET_PREFIX}/img/class/classu.png`} />
			{/* ----------------------- IOS ----------------------- */}
			<meta property="al:ios:app_name" content={process.env.NEXT_PUBLIC_BRAND_KOR} />
			<meta property="al:ios:app_store_id" content="1464482964" />
			{/* ----------------------- Android ----------------------- */}
			<meta property="al:android:app_name" content={process.env.NEXT_PUBLIC_BRAND_KOR} />
			<meta
				property="al:web:url"
				content="https://play.google.com/store/apps/details?id=com.modooclass"
			/>
    </>
  );
};

export default DefaultMeta;
