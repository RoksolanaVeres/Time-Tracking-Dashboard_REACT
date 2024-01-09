import EllipsisIcon from "./EllipsisIcon";

export default function ActivityCard({
  title,
  currentTime,
  prevTime,
  prevActivityPeriod,
  bgColor,
  icon,
}) {
  return (
    <div
      id={`${title}-card--main`}
      className={`${bgColor} lg:mw-[260px] relative flex h-[160px] flex-col justify-end overflow-hidden rounded-2xl lg:h-auto`}
    >
      <img
        src={icon}
        alt=""
        className="absolute -top-1 right-6 w-[75px] lg:w-[82px]"
      />
      <div
        id={`${title}-card--data`}
        className="z-10 h-[125px] cursor-pointer rounded-2xl bg-darkBlue p-7 text-white hover:bg-lightBlue lg:h-auto"
      >
        <div
          id={`${title}-card--header`}
          className="flex justify-between pb-4 lg:pb-7"
        >
          <h2 className="text-base font-normal lg:text-lg">{title}</h2>
          <EllipsisIcon />
        </div>
        <div className="flex items-center justify-between lg:flex-col lg:items-start">
          <h3 className="text-2xl font-light lg:pb-5 lg:text-5xl">
            {currentTime}hrs
          </h3>
          <p className="text-xs font-light text-paleBlue lg:text-sm">
            {prevActivityPeriod} - {prevTime}hrs
          </p>
        </div>
      </div>
    </div>
  );
}
