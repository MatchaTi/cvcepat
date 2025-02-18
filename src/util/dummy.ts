import { dummyData } from '../constant/dummyData';

export function getDummyData() {
  const randomIndex = Math.floor(Math.random() * dummyData.length);

  return dummyData[randomIndex];
}
