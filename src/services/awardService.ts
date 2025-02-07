import db from "../database/db";

export const getAwardsOfProducersWithMoreWin = () => {
 const winners = db
  .prepare("SELECT year, producers as producer FROM movies WHERE winner = 1")
  .all();

 const producerMap = new Map<string, number[]>(); // Map producers to their winning years

 // Organize producers by year
 winners.forEach(({ year, producer }: any) => {
  const producers = producer
   .split(/,| and | e /) // Separate by ',', 'and', or 'e'
   .map((p: any) => p.trim());

  producers.forEach((p: any) => {
   if (!producerMap.has(p)) {
    producerMap.set(p, []);
   }
   producerMap.get(p)?.push(year);
  });
 });

 const intervals: {
  producer: string;
  interval: number;
  previousWin: number;
  followingWin: number;
 }[] = [];

 // Calculate intervals between wins
 producerMap.forEach((years, producer) => {
  const uniqueYears = [...new Set(years)]; // Remove duplicate years
  uniqueYears.sort((a, b) => a - b); // Sort years ascending

  for (let i = 1; i < uniqueYears.length; i++) {
   intervals.push({
    producer,
    interval: uniqueYears[i] - uniqueYears[i - 1],
    previousWin: uniqueYears[i - 1],
    followingWin: uniqueYears[i],
   });
  }
 });

 // Find the minimum and maximum intervals
 const minInterval = Math.min(...intervals.map((i) => i.interval));
 const maxInterval = Math.max(...intervals.map((i) => i.interval));

 return {
  min: intervals.filter((i) => i.interval === minInterval),
  max: intervals.filter((i) => i.interval === maxInterval),
 };
};
