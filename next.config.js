module.exports = {
    // Keeping strictMode to true breaks class generation https://github.com/vercel/next.js/issues/7322
    reactStrictMode: false,
    transpilePackages: ['@mui/utils', '@mui/material', '@mui/system', '@mui/styles']
};
