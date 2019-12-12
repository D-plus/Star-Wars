const extractNumberFromString = (value: string): number | null => {
  const pattern = /\d+/;
  const resultOfMatch = value.match(pattern);
  return resultOfMatch && +resultOfMatch[0];
};

export default extractNumberFromString;
