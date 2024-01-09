export default function SettingsCard({ period, setPeriod }) {
  return (
    <ul className="flex h-[70px] items-center justify-between px-6 text-paleBlue sm:h-[200px] sm:flex-col sm:items-center sm:justify-center sm:gap-4 sm:text-lg lg:h-[162px] lg:items-start lg:justify-center lg:gap-3 lg:px-8 lg:text-base">
      <li
        onClick={() => {
          setPeriod("daily");
        }}
        className={`cursor-pointer hover:text-white/90 ${
          period === "daily" && "text-white"
        }`}
      >
        Daily
      </li>
      <li
        onClick={() => {
          setPeriod("weekly");
        }}
        className={`cursor-pointer hover:text-white/90 ${
          period === "weekly" && "text-white"
        }`}
      >
        Weekly
      </li>
      <li
        onClick={() => {
          setPeriod("monthly");
        }}
        className={`cursor-pointer hover:text-white/90 ${
          period === "monthly" && "text-white"
        }`}
      >
        Monthly
      </li>
    </ul>
  );
}
