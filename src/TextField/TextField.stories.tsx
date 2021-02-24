import React from 'react';
import TextField from './TextField';
import { withKnobs, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import mdx from './TextField.mdx';

export default {
  title: 'components|basic/TextField',
  component: TextField,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '입력 컴포넌트',
    docs: {
      page: mdx
    }
  }
};

export const textField = () => {
  const placeholder = text('placeholder', '텍스트');
  return (
    <TextField
      placeholder={placeholder}
      onChange={action('onChange')}
    />
  );
};
textField.story = {
  name: 'Default'
};

export const standard = () => <TextField />;