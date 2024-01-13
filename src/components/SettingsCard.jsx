import PeriodListItem from "./PeriodListItem";

export default function SettingsCard({ period, setPeriod }) {
  let periodsArr = ["daily", "weekly", "monthly"];
  return (
    <ul className="flex h-[70px] items-center justify-between px-6 text-paleBlue sm:h-[200px] sm:flex-col sm:items-center sm:justify-center sm:gap-4 sm:text-lg lg:h-[162px] lg:items-start lg:justify-center lg:gap-3 lg:px-8 lg:text-base">
      {periodsArr.map((item) => {
        return (
          <PeriodListItem
            period={period}
            setPeriod={setPeriod}
            periodToSet={item}
            key={item}
          />
        );
      })}
    </ul>
  );
}
