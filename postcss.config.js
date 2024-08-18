import postcssImport from 'postcss-import';
import postcssImportExtGlob from 'postcss-import-ext-glob';
import postcssNested from 'postcss-nested';
import postcssPresetEnv from 'postcss-preset-env';
import postcssGlobalData from '@csstools/postcss-global-data';

export default {
  plugins: [
    postcssImportExtGlob(),
    postcssImport(),
    postcssNested(),
    postcssGlobalData({
      files: ['./src/utilities/breakpoints.css'],
    }),
    postcssPresetEnv({
      stage: 4,
      features: {
        'custom-media-queries': { preserve: false }
      },
    }),
  ],
};
