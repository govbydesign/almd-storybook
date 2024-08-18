import parse from 'html-react-parser';
import imageblock from './image-card.twig';
import data from './image-card.yml';

const component = {
  title: 'Molecules/Image card',
};

export const ImageCard = {
  name: 'Image card',
  render: (args) => parse(imageblock(args)),
  args: { ...data },
};

export const ImageCardWithName = {
  ...ImageCard,
  name: 'Image with title',
  render: (args) => parse(imageblock(args)),
  args: {
    ...data,
    caption: '',
  },
};

export const ImageCardWithCaption = {
  ...ImageCard,
  name: 'Image with caption',
  render: (args) => parse(imageblock(args)),
  args: {
    ...data,
    title: '',
  },
};

export const ImageCardOnly = {
  ...ImageCard,
  name: 'Image only',
  render: (args) => parse(imageblock(args)),
  args: {
    ...data,
    caption: '',
    title: '',
   },
};

export default component;
