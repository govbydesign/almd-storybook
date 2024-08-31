import parse from 'html-react-parser';
import alert from './alert.twig';
import data from './alert.yml';

const component = {
  title: 'Atoms/Alert',
};

export const AlertDefault = {
  name: 'Alert',
  render: (args) => parse(alert(args)),
  args: { ...data },
};

export default component;
