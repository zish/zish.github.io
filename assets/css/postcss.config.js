const path = require('path');
const themeDir = path.join(__dirname, '..', '..', 'themes', 'blist') + '/';

module.exports = {
  plugins: [
    require('postcss-import')({
      path: [themeDir],
    }),
    require('tailwindcss')(path.join(themeDir, 'assets', 'css', 'tailwind.config.js')),
    require('autoprefixer')({
      path: [themeDir],
    }),
  ],
};
