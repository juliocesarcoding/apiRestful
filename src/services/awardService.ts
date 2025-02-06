import db from "../database/db";

export const getAwardsOfProducersWithMoreWin = () => {
 const winners = db
  .prepare("SELECT year, producers as producer FROM movies WHERE winner = 1")
  .all();

 const producerMap = new Map<string, number[]>(); // Maps producers to the years they won

 // Organizar os produtores e os anos em que ganharam
 winners.forEach(({ year, producer }: any) => {
  const producers = producer.split(", ").map((p: any) => p.trim()); // Separar múltiplos produtores
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

 // Calcular intervalos entre prêmios consecutivos
 producerMap.forEach((years, producer) => {
  years.sort((a, b) => a - b); // Ordena os anos para calcular os intervalos

  for (let i = 1; i < years.length; i++) {
   intervals.push({
    producer,
    interval: years[i] - years[i - 1],
    previousWin: years[i - 1],
    followingWin: years[i],
   });
  }
 });

 // Encontrar os maiores e menores intervalos
 const minInterval = Math.min(...intervals.map((i) => i.interval));
 const maxInterval = Math.max(...intervals.map((i) => i.interval));

 return {
  min: intervals.filter((i) => i.interval === minInterval),
  max: intervals.filter((i) => i.interval === maxInterval),
 };
};
