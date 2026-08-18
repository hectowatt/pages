/** @type {import('next').NextConfig} */
const branchName = process.env.BRANCH_NAME ? "/" + process.env.BRANCH_NAME : "";
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
    output: "export",
    basePath: isProd ? '/pages' : '',  // 本番環境だけ適用
    trailingSlash: true, // URL に末尾のスラッシュを追加
    assetPrefix: isProd ? '/pages' : '',
    publicRuntimeConfig: {
        basePath: isProd ? '/pages' : '', // 同じbasePathを公開設定に含める
    },
    images: {
        unoptimized: true,
    }
};

export default nextConfig;
