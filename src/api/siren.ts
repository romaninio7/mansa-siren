import axios from 'axios';

// Creating API to fetch a SIREN data
export default axios.create({
  baseURL: 'https://entreprise.data.gouv.fr/api/sirene/v3/unites_legales',
});
