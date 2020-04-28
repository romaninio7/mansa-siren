import * as React from 'react';

//Components
import Loader from 'components/helpers/Loader';
import Error from 'components/helpers/Error';
import UserBusinessItem from 'components/business/UserBusinessItem';

//Functions & API
import useFetch from 'hooks/useFetch';
import sirenAPI from 'api/siren';

//Data & Structure
import * as consts from 'consts';
import { IBusinessData } from 'interfaces';

const UserBusiness = (): JSX.Element => {
  const { fetchedData, error, fetching } = useFetch(sirenAPI, consts.sirenUser);

  const businessData: IBusinessData = {
    siret: fetchedData?.data.unite_legale.etablissements[0].siret,
    startDate: fetchedData?.data.unite_legale.etablissement_siege.date_debut,
    adresse: fetchedData?.data.unite_legale.etablissements[0].geo_adresse,
  };

  if (error) {
    return <Error>{error}</Error>;
  }

  if (fetching) {
    return <Loader linesNumber={6} />;
  }

  const businessListRender = (): JSX.Element[] => {
    return Object.values(businessData).map((item, index) => {
      return (
        <UserBusinessItem
          businessValue={item}
          businessData={consts.businessData[index]}
          key={index}
        />
      );
    });
  };

  return <div className='ui divided list large'>{businessListRender()}</div>;
};

export default UserBusiness;
