import parse from 'html-react-parser';
import breaker from './breaker-with-nav.twig';
import data from './breaker-with-nav.yml';

const component = {
  title: 'Organisms/Breaker with nav',
};

export const BreakerWithNav = {
  name: 'Breaker with nav',
  render: (args) => parse(breaker(args)),
  args: { ...data },
};


export default component;
