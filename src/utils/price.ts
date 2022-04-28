export const currency = 'Є';
// By using toFixed we always show two decimals
export const parseRawPrice = (price: number) => `${(price).toFixed(2)} ${currency}`;