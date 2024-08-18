import parse from 'html-react-parser';
import label from './label.twig';
import data from './label.yml';

const component = {
  title: 'Atoms/Label',
};

export const LabelDefault = {
  name: 'Label',
  render: (args) => parse(label(args)),
  args: { ...data },
};

export const LabelGold = {
  ...LabelDefault,
  name: 'Label gold',
  render: (args) => parse(label(args)),
  args: {
    ...data,
    modifier: 'label--gold',
  },
};

export const LabelGoldLight = {
  ...LabelDefault,
  name: 'Label gold light',
  render: (args) => parse(label(args)),
  args: {
    ...data,
    modifier: 'label--gold-light',
  },
};

export const LabelLarge = {
  ...LabelDefault,
  name: 'Label large',
  render: (args) => parse(label(args)),
  args: {
    ...data,
    modifier: 'label--large',
  },
};

export default component;
