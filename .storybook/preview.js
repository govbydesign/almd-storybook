/** @type { import('@storybook/react').Preview } */
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
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ['autodocs']
};

export default preview;
