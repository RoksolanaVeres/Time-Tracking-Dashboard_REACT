import { useState } from "react";
import cardData from "../data.json";
import ProfileCard from "./components/ProfileCard";
import ActivityCard from "./components/ActivityCard";
import workIcon from "./assets/images/icon-work.svg";
import playIcon from "./assets/images/icon-play.svg";
import studyIcon from "./assets/images/icon-study.svg";
import exerciseIcon from "./assets/images/icon-exercise.svg";
import socialIcon from "./assets/images/icon-social.svg";
import selfCareIcon from "./assets/images/icon-self-care.svg";

const background = {
  1: ["bg-lightRed", workIcon],
  2: ["bg-softBlue", playIcon],
  3: ["bg-coral", studyIcon],
  4: ["bg-limeGreen", exerciseIcon],
  5: ["bg-violet", socialIcon],
  6: ["bg-softOrange", selfCareIcon],
};

export default function App() {
  const [period, setPeriod] = useState("weekly");

  return (
    <div
      id="app-layout"
      className="flex min-h-dvh items-center justify-center bg-veryDarkBlue px-6 py-20 font-rubik lg:px-10"
    >
      <div
        id="app-container--main"
        className="grid w-full max-w-[1120px] gap-6 text-black sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <ProfileCard setPeriod={setPeriod} period={period} />
        {cardData.map((card) => {
          return (
            <ActivityCard
              key={card.id}
              title={card.title}
              bgColor={background[card.id][0]}
              icon={background[card.id][1]}
              currentTime={card.timeframes[period].current}
              prevTime={card.timeframes[period].previous}
              prevActivityPeriod={
                period === "daily"
                  ? "Yesterday"
                  : period === "weekly"
                    ? "Last Week"
                    : "Last Month"
              }
            />
          );
        })}
      </div>
    </div>
  );
}
