import parse from 'html-react-parser';
import fullbreaker from './full-breaker.twig';
import data from './full-breaker.yml';

const component = {
  title: 'Molecules/Full breaker',
};

export const Breaker = {
  name: 'Full breaker',
  render: (args) => parse(fullbreaker(args)),
  args: { ...data },
};

export default component;
