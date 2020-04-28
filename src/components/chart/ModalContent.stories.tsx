import * as React from 'react';
import { storiesOf } from '@storybook/react';
import ModalContent from 'components/chart/ModalContent';
import { action } from '@storybook/addon-actions';

let content = <div>Some content in the modal</div>;
storiesOf('Modal/ModalContent', module).add('Component', () => (
  <ModalContent onDismiss={action('clicked')}>{content}</ModalContent>
));
