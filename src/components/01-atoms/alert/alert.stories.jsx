import parse from 'html-react-parser';
import alert from './alert.twig';
import data from './alert.yml';

const component = {
  title: 'Atoms/Alert',
};

export const AlertInfo = {
  name: 'Info alert',
  render: (args) => parse(alert(args)),
  args: { ...data },
};

export const AlertScheduled = {
  ...AlertInfo,
  name: 'Scheduled alert',
  render: (args) => parse(alert(args)),
  args: {
    ...data,
    type: 'scheduled',
  },
};

export const AlertMaintenance = {
  ...AlertInfo,
  name: 'Maintenance alert',
  render: (args) => parse(alert(args)),
  args: {
    ...data,
    type: 'maintenance',
  },
};

export const AlertOutage = {
  ...AlertInfo,
  name: 'Outage alert',
  render: (args) => parse(alert(args)),
  args: {
    ...data,
    type: 'outage'
  },
};

export const AlertEmergency = {
  ...AlertInfo,
  name: 'Outage alert',
  render: (args) => parse(alert(args)),
  args: {
    ...data,
    type: 'emergency'
  },
};

export default component;
