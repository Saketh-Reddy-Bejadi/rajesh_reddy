import { Link, useLocation } from "react-router";
import type { CardProps } from "../types/index";

const Card: React.FC<CardProps> = ({ element }) => {
  const location = useLocation();
  return (
    <Link
      to={`${location.pathname.replace(/\/$/, "")}/${element.id}`}
      className="flex flex-col gap-3 p-3 rounded-xl bg-white dark:bg-[#2F2E32] min-h-80 hover:-translate-y-2 transition-transform duration-200 shadow-lg dark:shadow-zinc-800"
    >
      <div className="min-h-52 rounded-xl overflow-hidden">
        <img className="h-full w-full" src={element.imgURL} alt="" />
      </div>
      <div className="px-2">
        <p className="font-semibold text-xl">{element.title}</p>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400 text-sm">
          {element.desc}
        </p>
      </div>
    </Link>
  );
};

export default Card;
