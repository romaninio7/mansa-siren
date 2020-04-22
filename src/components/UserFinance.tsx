import React, { useEffect, useState } from 'react';
import mansaAPI from 'api/mansa';
import _ from 'lodash';
import { TAccount } from 'types';
import Account from 'components/Account';
//import AccountChart from 'components/chart/AccountChart';
import Modal from 'components/chart/Modal';

const UserFinance = (): JSX.Element => {
  //State to stock a fetched data
  const [accountsData, setAccountsData] = useState<TAccount[]>([]);

  //State to handle a chosen account
  const [currentAccount, setCurrentAccount] = useState<string>('');

  //State to handle an error
  const [error, setError] = useState<string>('');

  //State to handle a chosen account
  const [openModal, setOpenModal] = useState<boolean>(false);

  useEffect(() => {
    (async function getBusinessData() {
      try {
        const response = await mansaAPI.get(`/accounts`);

        // Picking up just an appropriate data
        const fetchedData: TAccount[] = response.data.map((account) => {
          return _.pick(account, [
            'account_id',
            'account_type',
            'account_number',
            'currency',
            'current',
          ]);
        });

        setAccountsData(fetchedData);
      } catch (e) {
        setError(e.toString());
      }
    })();
  }, []); // Doing just at once

  const onAccountSelect = (id: string): void => {
    setCurrentAccount(id);
  };

  const onOpenModal = (status: boolean): void => {
    setOpenModal(status);
  };

  // Helping function to generate accounts
  const renderAccounts = (accountsData: TAccount[]): JSX.Element[] => {
    return accountsData.map(
      (account: TAccount): JSX.Element => {
        return (
          <Account
            {...account}
            key={account.account_id}
            onAccountSelect={onAccountSelect}
            onOpenModal={onOpenModal}
          />
        );
      }
    );
  };

  // Shows up an error if exists
  if (error) {
    return <div className='ui header red'>{error}</div>;
  }
  // Loading while the accountsData is an empty array
  if (accountsData.length === 0) {
    return <div className='ui active centered inline loader big'></div>;
  }

  return (
    <>
      <div className='ui link cards centered'>
        {renderAccounts(accountsData)}
      </div>
      <Modal
        openModal={openModal}
        onDismiss={() => onOpenModal(false)}
        currentAccount={currentAccount}
      />
    </>
  );
};

export default UserFinance;
