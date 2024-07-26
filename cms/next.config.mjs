import { withPayload } from '@payloadcms/next/withPayload';

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
	redirects: async () => {
		return [
			{
				source: '/',
				destination: '/admin',
				permanent: true,
			},
		];
	},
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		ignoreBuildErrors: true,
	},
};

export default withPayload(nextConfig);
