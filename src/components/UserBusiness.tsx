import React, { useEffect, useState } from 'react';

import sirenAPI from 'api/siren';

interface IBusinessData {
  siret: string;
  startDate: string;
  adresse: string;
}

const UserBusiness = (): JSX.Element => {
  const SIREN = '833079619';

  // State for a fetched business data
  const [businessData, setBusinessData] = useState<IBusinessData>({});

  //State to handle an error
  const [error, setError] = useState<string>('');

  //State to handle an error
  const [fetching, setFetching] = useState<boolean>(false);

  useEffect(() => {
    setFetching(true);
    (async function getBusinessData() {
      try {
        const response = await sirenAPI.get(`/${SIREN}`);

        // Forming an appropriate data
        const fetchedData: IBusinessData = {
          siret: response.data.unite_legale.etablissements[0].siret,
          startDate: response.data.unite_legale.etablissement_siege.date_debut,
          adresse: response.data.unite_legale.etablissements[0].geo_adresse,
        };
        // Setting a fetched data
        setBusinessData(fetchedData);
        setFetching(true);
      } catch (e) {
        setError(e.toString());
      }
    })();
  }, []); // Using at once

  // Shows up an error if exists
  if (error) {
    return <div className='ui header red centered'>{error}</div>;
  }
  // Loading while businessData is an empty object
  if (Object.keys(businessData).length === 0 && fetching) {
    return <div className='ui active centered inline loader'></div>;
  }

  return (
    <div className='ui divided selection list'>
      <a className='item'>
        <div className='ui label blue large horizontal'>
          <i className='id badge outline icon'></i>
          SIRET:
        </div>
        <span className='siret'> {businessData.siret}</span>
      </a>
      <a className='item'>
        <div className='ui label teal large horizontal'>
          <i className='icon calendar plus outline'></i>
          Start date:
        </div>
        <span className='startDate'>{businessData.startDate} </span>
      </a>
      <a className='item'>
        <div className='ui label pink large horizontal'>
          <i className='icon map pin'></i>
          Addresse:
        </div>
        <span className='adresse'>{businessData.adresse}</span>
      </a>
    </div>
  );
};

export default UserBusiness;
