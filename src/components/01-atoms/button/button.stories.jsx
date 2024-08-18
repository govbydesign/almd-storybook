import parse from 'html-react-parser';
import button from './button.twig';
import data from './button.yml';

const component = {
  title: 'Atoms/Button',
};

export const ButtonPrimary = {
  name: 'Button primary',
  render: (args) => parse(button(args)),
  args: { ...data },
};

export const ButtonLight = {
  ...ButtonPrimary,
  render: (args) => parse(button(args)),
  args: {
    ...data,
    modifier: 'button--light',
  },
};

export const ButtonLink = {
  ...ButtonPrimary,
  render: (args) => parse(button(args)),
  args: {
    ...data,
    modifier: 'button--link'
  },
};

export default component;
