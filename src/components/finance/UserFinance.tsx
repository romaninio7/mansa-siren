import React, { useState } from 'react';
import _ from 'lodash';

//Components
import Account from 'components/finance/Account';
import Modal from 'components/chart/Modal';
import Loader from 'components/helpers/Loader';
import Error from 'components/helpers/Error';

//Functions & API
import useFetch from 'hooks/useFetch';
import mansaAPI from 'api/mansa';

//Data & Structure
import * as consts from 'consts';
import { IAccount } from 'interfaces';

const UserFinance = (): JSX.Element => {
  //State to handle a chosen account
  const [currentAccount, setCurrentAccount] = useState<string>('');

  //State to handle a chosen account
  const [openModal, setOpenModal] = useState<boolean>(false);

  const { fetchedData, error, fetching } = useFetch(
    mansaAPI,
    consts.accountsURL
  );

  // Picking up just an appropriate data
  let accountsData: IAccount[] = [];
  accountsData = fetchedData?.data.map((account: IAccount) => {
    return _.pick(account, [
      'account_id',
      'account_type',
      'account_number',
      'currency',
      'current',
    ]);
  });

  const onAccountSelect = (id: string): void => {
    setCurrentAccount(id);
  };

  const onOpenModal = (status: boolean): void => {
    setOpenModal(status);
  };

  // Helping function to generate accounts
  const renderAccounts = (accountsData: IAccount[]): JSX.Element[] => {
    return accountsData.map(
      (account: IAccount): JSX.Element => {
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

  if (error) {
    return <Error>{error}</Error>;
  }

  if (fetching) {
    return <Loader round />;
  }

  return (
    <>
      <div className='ui link cards centered'>
        {fetchedData && renderAccounts(accountsData)}
      </div>
      {currentAccount && (
        <Modal
          openModal={openModal}
          onDismiss={() => onOpenModal(false)}
          currentAccount={currentAccount}
        />
      )}
    </>
  );
};

export default UserFinance;
