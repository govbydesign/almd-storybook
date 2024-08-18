import parse from 'html-react-parser';
import menu from './menu.twig';
import data from './menu.yml';

const component = {
  title: 'Atoms/Menu',
};

export const MenuSimple = {
  name: 'Menu',
  render: (args) => parse(menu(args)),
  args: { ...data },
};

export default component;
