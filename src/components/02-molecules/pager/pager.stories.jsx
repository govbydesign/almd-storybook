import parse from 'html-react-parser';
import pager from './pager.twig';
import data from './pager.yml';

const component = {
  title: 'Molecules/Pager',
};

export const PagerDefault = {
  name: 'Pager',
  render: (args) => parse(pager(args)),
  args: { ...data },
};

export default component;
