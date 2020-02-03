import { DateTime } from 'luxon';

export function createDateArray(length: number) {
  const dates: number[] = [];

  for (let i = 0; i < length; i++) {
    dates.push(+DateTime.local().minus({ day: i }).toJSDate());
  }
  console.log(dates)

  return dates.reverse();
}

