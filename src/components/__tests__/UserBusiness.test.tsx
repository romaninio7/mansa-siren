import React from 'react';
import { mount, shallow } from 'enzyme';
import UserBusiness from 'components/UserBusiness';
import moxios from 'moxios';
import siren from 'api/siren';

let wrapper;
beforeEach(() => {
  moxios.install(siren);
});
afterEach(() => {
  moxios.uninstall(siren);
});

it('sets up a valid data: siret, startDate and adresse', async (done) => {
  const expectedData = {
    unite_legale: {
      etablissements: [
        {
          siret: '83307961900015',
          geo_adresse: '10 Rue Gabriel Peri 92120 Montrouge',
        },
      ],
      etablissement_siege: { date_debut: '2017-10-26' },
    },
  };
  wrapper = shallow(<UserBusiness />);
  moxios.wait(() => {
    moxios.stubRequest('/83307961900015', {
      status: 200,
      response: expectedData,
    });

    wrapper.update();
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.siret').innerHTML).toEqual('83307961900015');
    expect(wrapper.find('.startDate').innerHTML).toEqual('2017-10-26');
    expect(wrapper.find('.adresse').innerHTML).toEqual(
      '10 Rue Gabriel Peri 92120 Montrouge'
    );
    done();
  });
});
