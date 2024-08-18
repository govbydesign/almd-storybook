import parse from 'html-react-parser';
import quicklinks from './quicklinks.twig';
import data from './quicklinks.yml';

const component = {
  title: 'Molecules/Quick links',
};

export const QuickLinks = {
  name: 'Quick links',
  render: (args) => parse(quicklinks(args)),
  args: { ...data },
};

export default component;
