export default function PeriodListItem({ period, setPeriod, periodToSet }) {
  return (
    <li
      onClick={() => {
        setPeriod(periodToSet);
      }}
      className={`cursor-pointer hover:text-white/90 ${
        period === periodToSet && "text-white"
      }`}
    >
      {periodToSet[0].toUpperCase() + periodToSet.slice(1)}
    </li>
  );
}
