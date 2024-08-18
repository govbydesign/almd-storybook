import parse from 'html-react-parser';
import iconcard from './icon-card.twig';
import data from './icon-card.yml';

const component = {
  title: 'Molecules/Icon card',
};

export const IconCard = {
  name: 'Icon card',
  render: (args) => parse(iconcard(args)),
  args: { ...data },
};

export default component;
