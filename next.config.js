const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules');
const withImages = require('next-images');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/* Production 환경 여부 */
const isProd = process.env.NODE_ENV === 'production';

/* Config 설정 */
const nextConfig = {
  // Build Directory 경로 설정
  distDir: process.env.BUILD_DIR || 'build',

  // Build 식별값 설정 (Default: Current git commit hash value)
  generateBuildId: async () =>
    new Promise((resolve, reject) => {
      require('child_process').exec('git rev-parse --verify HEAD', (err, stdout) => {
        if (err) {
          reject(err);
        } else {
          resolve(stdout);
        }
      });
    }),

	// Base Path 설정
	basePath: isProd ? '' : '',

  // CDN Prefix 설정
  assetPrefix: isProd ? '' : '',

	// 폰트 최적화 여부
	optimizeFonts: true,
	
  // 압축 여부
  compress: true,

	// Production에서 Sourcemap Off
	productionBrowserSourceMaps: false,

  // Webpack 5 설정
  webpack: (config) => {
		return {
			...config,
			mode: isProd ? 'production' : 'development',
			devtool: isProd ? 'cheap-module-source-map' : 'eval-source-map',
		}
	},
  rules: [],

  // React StrictMode 여부
  reactStrictMode: false,

  async rewrites() {
		// 다중 API Server에 따른 프록시 설정
		const proxy = [
			// 메인 API 서버
			{
				source: '/api/:version/:path*',
        destination: `${process.env.NEXT_PUBLIC_API_SERVER_1}/api/:version/:path*`
			},
			// Node API 서버
			{
				source: '/next/api/:version/:path*',
        destination: '/api/:version/:path*'
			},
		];

		// 페이지 리다이렉션 설정
		const redirection = [];

    return [
			...proxy,
			...redirection
		];
  },

  // X-Powered-By(Header) 비활성화
  poweredByHeader: false,

	// Next.js 지원 Eslint 비활성화
	ignoreDuringBuilds: true,
};

module.exports = withPlugins(
	[
		[withTM, {
			transpileModules: [
				'axios'
			]
		}],
		[withImages, {
			esModule: true,
			dynamicAssetPrefix: true,
			inlineImageLimit: false,
			name: "[name].[hash].[ext]",
		}],
		withBundleAnalyzer
	], 
	nextConfig
);