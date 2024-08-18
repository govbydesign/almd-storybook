import parse from 'html-react-parser';
import card from './card.twig';
import data from './card.yml';

const component = {
  title: 'Molecules/Card',
};

export const CardDefault = {
  name: 'Card',
  render: (args) => parse(card(args)),
  args: { ...data },
};

export default component;
