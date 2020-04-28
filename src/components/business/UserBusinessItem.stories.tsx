import * as React from 'react';
import { storiesOf } from '@storybook/react';
import UserBusinessItem from 'components/business/UserBusinessItem';

storiesOf('UserProfile/UserBusiness/UserBusinessItem', module).add(
  'Component',
  () => (
    <UserBusinessItem
      businessData={['pink', 'map marker alternate', 'Address', 'address']}
      businessValue={'1 boulevard des Amoureux, 06300 Nice'}
    />
  )
);
