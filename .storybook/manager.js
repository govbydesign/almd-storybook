import { addons } from '@storybook/manager-api';
import almd from './almd';

addons.setConfig({
  theme: almd,
  // Collapses Stories roots by default for easier navigation.
  sidebar: {
    collapsedRoots: ['atoms', 'molecules', 'organisms', 'layouts', 'pages'],
  },
});
