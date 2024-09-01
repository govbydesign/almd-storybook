import parse from 'html-react-parser';
import fullbreaker from './breaker.twig';
import data from './breaker.yml';

const component = {
  title: 'Molecules/Breaker',
};

export const BreakerDefault = {
  name: 'Breaker',
  render: (args) => parse(fullbreaker(args)),
  args: { ...data },
};

export default component;
