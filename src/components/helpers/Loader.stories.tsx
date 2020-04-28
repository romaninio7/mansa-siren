import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Loader from 'components/helpers/Loader';
import { withKnobs, select } from '@storybook/addon-knobs';

storiesOf('Loader', module)
  .addDecorator(withKnobs)
  .add('Lines', () => (
    <Loader linesNumber={select('Lines number', { 4: 4, 8: 8 }, 6)} />
  ))
  .add('Round', () => <Loader round />)
  .add('Fullscreen', () => <Loader fullScreen />);
