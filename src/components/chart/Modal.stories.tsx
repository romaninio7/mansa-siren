import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Modal from 'components/chart/Modal';
import { action } from '@storybook/addon-actions';

storiesOf('Modal', module).add('Component', () => (
  <Modal
    onDismiss={action('clicked')}
    currentAccount='afcf2bd0-9a72-11e9-86ef-07c2f863fee7'
    openModal={true}
  />
));
