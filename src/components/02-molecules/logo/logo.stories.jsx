import parse from 'html-react-parser';
import logo from './logo.twig';
import data from './logo.yml';

const component = {
  title: 'Molecules/Logo',
};

export const SiteLogo = {
  name: 'Logo',
  render: (args) => parse(logo(args)),
  args: { ...data },
};

export default component;
