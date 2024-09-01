/** @type { import('@storybook/react').Preview } */
import { themes } from '@storybook/theming';
import Twig from 'twig';
import drupalFilters from 'twig-drupal-filters';
import '../src/styles.css';
import '../src/components/components.css';

function setupFilters(twig) {
  twig.cache();
  drupalFilters(twig);
  return twig;
}

setupFilters(Twig);

const preview = {
  parameters: {
    docs: {
      theme: themes.dark,
    },
    controls: {
      // Hides the Addons panel for each story.
      disabled: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  // Hides autodocs globally.
  tags: ['!autodocs'],
};

export default preview;
