import parse from 'html-react-parser';
import breadcrumb from './breadcrumb.twig';
import data from './breadcrumb.yml';

const component = {
  title: 'Atoms/Breadcrumb',
  args: { ...data },
};

export const BreadcrumbMenu = {
  name: 'Breadcrumb',
  render: (args) => parse(breadcrumb(args)),
};

export default component;
