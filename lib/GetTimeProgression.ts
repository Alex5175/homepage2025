export default function GetTimeProgession(startDate: Date, endDate: Date) {
  const currentDate = Date.now();
  const timeSpan = endDate.valueOf() - startDate.valueOf();
  const timeElapsed = currentDate - startDate.valueOf();
  const progress = timeElapsed / timeSpan;
  return progress;
}

const progress = GetTimeProgession(
  new Date("July 1, 2025"),
  new Date("March 31, 2026")
);

console.log(progress);
