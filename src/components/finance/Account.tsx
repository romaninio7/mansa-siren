import * as React from 'react';
import { IAccount } from 'interfaces';
import { getCurrencySign, setAccountTypeColor, setDynamicArrow } from 'utils';

interface AccountProps extends IAccount {
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

  //Handling a  click event
  const onClickHandle = (account_id: string, status: boolean): void => {
    onAccountSelect(account_id);
    onOpenModal(status);
  };

  return (
    <div
      className='card account-item'
      onClick={() => onClickHandle(account_id, true)}
    >
      <div
        className={`ui top right attached label account-type ${setAccountTypeColor(
          account_type
        )}`}
      >
        {account_type}
      </div>
      <div className='content'>
        <div className='header'>
          <i className={`${getCurrencySign(currency)} sign  icon`}></i>
          <span className='current'>{current}</span>
          <i
            className={`level ${setDynamicArrow(current)} alternate green icon`}
          ></i>
        </div>
        <div className='description'>
          <i className='icon credit card outline'></i> Account:&nbsp;
          <strong className='account-number'>{account_number}</strong>
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
