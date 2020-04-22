import React from 'react';
import { TAccount } from 'types';

interface AccountProps extends TAccount {
  onAccountSelect: (id: string) => void;
  onOpenModal: (status: boolean) => void;
}

// A single account component
const Account = (props: AccountProps): JSX.Element => {
  const {
    account_id,
    account_type,
    account_number,
    currency,
    current,
    onAccountSelect,
    onOpenModal,
  } = props;

  // Setting a ribbon color based on an account type
  const setAccountTypeColor = (account_type: string): string => {
    switch (account_type) {
      case 'TRANSACTION':
        return 'purple';
      case 'SAVINGS':
        return 'pink';
      default:
        return 'blue';
    }
  };

  // Getting a currensy sign
  const getCurrencySign = (currency: string): string => {
    switch (currency) {
      case 'GBP':
        return 'pound';
      case 'EUR':
        return 'euro';
      case 'USD':
        return 'dollar';
      default:
        return currency;
    }
  };

  // Setting an arrow direction
  const setDynamicArrow = (current: string): string => {
    return Number(current) > 0 ? 'up' : 'down';
  };

  //Handling a  click event
  const onClickHandle = (account_id: string, status: boolean): void => {
    onAccountSelect(account_id);
    onOpenModal(status);
  };

  return (
    // OnClick : sending a callback to the parent component UserFinance
    <div className='card' onClick={() => onClickHandle(account_id, true)}>
      <div
        className={`ui top right attached label ${setAccountTypeColor(
          account_type
        )}`}
      >
        {account_type}
      </div>
      <div className='content'>
        <div className='header'>
          <i className={`${getCurrencySign(currency)} sign icon`}></i> {current}
          <i
            className={`level ${setDynamicArrow(current)} alternate green icon`}
          ></i>
        </div>
        <div className='description'>
          <i className='icon credit card outline'></i> Account:&nbsp;
          <strong>{account_number}</strong>
        </div>
      </div>
      <div className='ui bottom attached button'>
        <i className='chart line icon'></i>
        Details
      </div>
    </div>
  );
};

export default Account;
