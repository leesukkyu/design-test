import React from 'react';
import Button from './Button';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  title: 'components|basic/Button',
  component: Button,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '버튼 컴포넌트',
  }
};

export const button = () => {
  return (
    <Button
      size="md"
      onClick={action('onClick')}
    >button</Button>
  );
};

button.story = {
  name: 'Default'
};

export const normal = () => <Button size="md" onClick={action('onClick')}>button</Button>;
export const large = () => <Button size="lg" onClick={action('onClick')}>button</Button>;