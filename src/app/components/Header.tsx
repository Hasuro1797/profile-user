import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <div className="flex justify-end items-center px-20 py-3 text-slate-400 border-b border-slate-200/30">
      <div className="flex gap-2 items-center">
        <h2 className="text-[14px] font-medium">{"Manuel Villarroel"}</h2>
        <Image
          src="/assets/perfil_png.png"
          alt="Profile Picture"
          width={40}
          height={40}
          className="rounded-full"
          priority
        />
      </div>
    </div>
  );
}
