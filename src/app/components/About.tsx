import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section className="grid py-20 lg:grid-cols-2 gap-4 lg:gap-0 justify-center justify-items-center items-center">
      <div className="text-slate-400 font-medium text-balance p-6 flex flex-col gap-4">
        <h1 className="text-5xl font-bold text-center lg:text-left text-violet-600 text-pretty lg:max-w-[300px]">
          Web Enthusiast & Developer
        </h1>
        <p className="lg:max-w-[450px] text-center lg:text-left">
          {
            "Hi, I'm Manuel Villarroel, a dedicated web developer with a focus on React and Next.js 14. I thrive on creating intuitive, dynamic, and responsive web applications. My passion for coding drives me to continuously learn and implement the latest technologies. Let's collaborate to bring innovative and user-friendly web solutions to life!"
          }
        </p>
      </div>
      <div>
        <Image
          src={"/assets/profile.png"}
          alt="profile image"
          width={400}
          height={400}
          className="rounded-full image-shadow"
          priority
        />
      </div>
    </section>
  );
}
