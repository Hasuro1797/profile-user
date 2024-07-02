import { interestList } from "@/lib/interestList";
import React from "react";
import InterestCard from "./InterestCard";
import { FaCode } from "react-icons/fa";
import { FaArrowTrendUp } from "react-icons/fa6";
import { MdComputer, MdOutlineTravelExplore } from "react-icons/md";
import { RiOpenSourceLine } from "react-icons/ri";
import { SiDavinciresolve, SiSololearn } from "react-icons/si";
import { GiEngagementRing } from "react-icons/gi";
import { HiOutlinePhotograph } from "react-icons/hi";
import { IoGameControllerOutline } from "react-icons/io5";
import { IconType } from "react-icons";
import TitleComponent from "./TitleComponent";

export default function Interests() {
  const icons = [
    FaCode,
    MdComputer,
    FaArrowTrendUp,
    SiDavinciresolve,
    RiOpenSourceLine,
    SiSololearn,
    GiEngagementRing,
    MdOutlineTravelExplore,
    HiOutlinePhotograph,
    IoGameControllerOutline,
  ];
  return (
    <section className="p-4 flex flex-col mx-auto  rounded">
      <TitleComponent title="Interests" />
      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 justify-items-center">
        {interestList.map((interest) => (
          <li key={interest.id} className="w-full">
            <InterestCard
              title={interest.title}
              subtitle={interest.description}
              Icon={icons[interest.id - 1]}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
