import parse from 'html-react-parser';
import contentcard from './content-card.twig';
import data from './content-card.yml';

const component = {
  title: 'Molecules/Content card',
};

export const Card = {
  name: 'Content card',
  render: (args) => parse(contentcard(args)),
  args: { ...data },
};

export default component;
