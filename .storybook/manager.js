import { addons } from '@storybook/manager-api';

addons.setConfig({
  // Collapses Stories roots by default for easier navigation.
  sidebar: {
    collapsedRoots: ['atoms', 'molecules', 'organisms', 'layouts', 'pages'],
  },
});
