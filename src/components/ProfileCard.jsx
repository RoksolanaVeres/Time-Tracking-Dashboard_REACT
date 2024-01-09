import profilePicture from "../assets/images/image-jeremy.png";
import SettingsCard from "./SettingsCard";

export default function ProfileCard({ setPeriod, period }) {
  return (
    <div
      id="profile-card--main"
      className="row-span-2 h-[205px] rounded-2xl bg-darkBlue sm:h-[344px] md:row-span-3 md:h-auto lg:row-span-2 lg:h-auto"
    >
      <div
        id="profile-card--bio"
        className="flex h-[135px] w-auto items-center justify-center gap-3 rounded-2xl bg-blue p-6 align-middle md:h-[300px] md:flex-col md:text-center lg:h-[360px] lg:items-start lg:justify-start lg:p-7 lg:text-start"
      >
        <img
          src={profilePicture}
          alt="profile picture"
          className="size-[70px] rounded-full border-2 border-white md:size-[90px] lg:mb-10"
        />
        <div>
          <p className="text-sm font-light text-paleBlue text-white/80">
            Report for
          </p>
          <h1 className="pt-2 text-xl font-light tracking-wide text-white md:pt-3 md:text-3xl lg:text-[40px] lg:leading-tight">
            Jeremy Robson
          </h1>
        </div>
      </div>
      <SettingsCard setPeriod={setPeriod} period={period} />
    </div>
  );
}
