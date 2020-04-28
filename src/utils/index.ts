// Getting a currensy sign
export const getCurrencySign = (currency: string): string => {
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

// Setting a ribbon color based on an account type
export const setAccountTypeColor = (account_type: string): string => {
  switch (account_type) {
    case 'TRANSACTION':
      return 'purple';
    case 'SAVINGS':
      return 'pink';
    default:
      return 'blue';
  }
};

// Setting an arrow direction
export const setDynamicArrow = (current: string): string => {
  return Number(current) > 0 ? 'up' : 'down';
};
