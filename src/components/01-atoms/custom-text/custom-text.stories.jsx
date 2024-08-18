import parse from 'html-react-parser';
import customtext from './custom-text.twig';
import data from './custom-text.yml';

const component = {
  title: 'Atoms/Custom text',
};

export const Text = {
  name: 'Custom text',
  render: (args) => parse(customtext(args)),
  args: { ...data },
};

export const TextGold = {
  ...Text,
  name: 'Custom text gold',
  render: (args) => parse(customtext(args)),
  args: {
    ...data,
    color: '#bd8461',
    modifier: 'custom-text--medium custom-text--gold'
  },
};

export const CustomTextSmall = {
  ...Text,
  name: 'Custom text small',
  render: (args) => parse(customtext(args)),
  args: {
    ...data,
    modifier: 'custom-text--small',
  },
};

export const CustomTextMedium = {
  ...Text,
  name: 'Custom text medium',
  render: (args) => parse(customtext(args)),
  args: {
    ...data,
    modifier: 'custom-text--medium',
  },
};

export default component;
