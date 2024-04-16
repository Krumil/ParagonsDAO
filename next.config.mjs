/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "random.imagecdn.app",
				port: "",
				pathname: "/**"
			},
			{
				protocol: "https",
				hostname: "artblocks-mainnet.s3.amazonaws.com",
				port: "",
				pathname: "/**"
			},
			{
				protocol: "https",
				hostname: "media-proxy.artblocks.io",
				port: "",
				pathname: "/**"
			},
			{
				protocol: "https",
				hostname: "bright-moments-mainnet.s3.amazonaws.com",
				port: "",
				pathname: "/**"
			},
			{
				protocol: "https",
				hostname: "bright-moments-flex-mainnet.s3.amazonaws.com",
				port: "",
				pathname: "/**"
			},
			{
				protocol: "https",
				hostname: "art-blocks-x-pace-mainnet.s3.amazonaws.com",
				port: "",
				pathname: "/**"
			},
			{
				protocol: "https",
				hostname: "picsum.photos",
				port: "",
				pathname: "/**"
			}
		]
	}
};

export default nextConfig;
