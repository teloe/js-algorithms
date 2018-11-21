'use strict';

/**
 * Marie invented a Time Machine and wants to test it by time-traveling to visit Russia on the Day of the Programmer
 * (the day of the year) during a year in the inclusive range from  to .
 *
 * From  to , Russia's official calendar was the Julian calendar; since  they used the Gregorian calendar system. The
 * transition from the Julian to Gregorian calendar system occurred in , when the next day after January  was February
 * . This means that in , February  was the  day of the year in Russia.
 *
 * In both calendar systems, February is the only month with a variable amount of days; it has  days during a leap year,
 * and days during all other years. In the Julian calendar, leap years are divisible by ; in the Gregorian calendar,
 * leap years are either of the following:
 *
 * Divisible by .
 * Divisible by  and not divisible by .
 * Given a year, , find the date of the  day of that year according to the official Russian calendar during that
 * year. Then print it in the format dd.mm.yyyy, where dd is the two-digit day, mm is the two-digit month, and yyyy is
 * .
 *
 * For example, the given .  is divisible by , so it is a leap year. The  day of a leap year after  is September 12, so
 * the answer is .
 */

function dayOfProgrammer(year) {
  let day = 243,
      month = 9;
  if (year % 4 === 0 || year % 400 === 0 && year % 100 !== 0) {
    day += 1;
  }
  let dayOfP = 256 - day;
  return dayOfP + '.' + '0' + month + '.' + year;
}

console.log(dayOfProgrammer(2017)); // 13.09.2017
console.log(dayOfProgrammer(2016)); // 12.09.2016
console.log(dayOfProgrammer(1800)); // 12.09.1800
