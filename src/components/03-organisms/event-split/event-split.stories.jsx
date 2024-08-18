import parse from 'html-react-parser';
import event from './event-split.twig';
import data from './event-split.yml';

const component = {
  title: 'Organisms/Event split',
};

export const EventSplit = {
  name: 'Event split',
  render: (args) => parse(event(args)),
  args: { ...data },
};

export const EventSplitRight = {
  ...EventSplit,
  name: 'Event split reversed',
  render: (args) => parse(event(args)),
  args: {
    ...data,
    modifier: 'is-reversed',
  },
};

export default component;
