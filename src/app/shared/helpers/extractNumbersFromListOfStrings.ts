import extractNumberFromString from './extractNumberFromString';

const extractNumbersFromListOfStrings = (list: string[]): number[] => {
  return list.map(item => extractNumberFromString(item));
};

export default extractNumbersFromListOfStrings;
