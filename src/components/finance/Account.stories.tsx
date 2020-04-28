import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Account from 'components/finance/Account';
import { withKnobs, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

storiesOf('UserFinance/Account', module)
  .addDecorator(withKnobs)
  .add('Component', () => (
    <Account
      account_id='afcf2bd0-9a72-11e9-86ef-07c2f863fee7'
      account_type='TRANSACTION'
      account_number='26178346'
      currency={select(
        'Currency',
        { GBR: 'pound', EUR: 'EUR', USD: 'USD' },
        'pound'
      )}
      current='175.52'
      onAccountSelect={() => {}}
      onOpenModal={action('clicked')}
    />
  ));
