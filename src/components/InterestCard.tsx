import { IconType } from "react-icons";

interface CardType {
  title: string;
  subtitle: string;
  Icon: IconType;
}

export default function InterestCard({ title, subtitle, Icon }: CardType) {
  return (
    <article className="w-full p-4 rounded border-[1px] border-slate-200/30 relative overflow-hidden group flex flex-col items-stretch h-full ">
      <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
      <Icon className="absolute z-10 -top-12 -right-12 text-9xl text-slate-200/30 group-hover:text-violet-400 group-hover:rotate-12 transition-transform duration-300" />
      <Icon className="mb-2 text-2xl text-violet-600 group-hover:text-white transition-colors relative z-10 duration-300" />
      <h3 className="font-medium text-lg text-violet-600 group-hover:text-white relative z-10 duration-300">
        {title}
      </h3>
      <p className="text-slate-400 group-hover:text-violet-200 relative z-10 duration-300">
        {subtitle}
      </p>
    </article>
  );
}
