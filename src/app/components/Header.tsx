import { Link } from "react-router";
import { Navigation } from "./Navigation";

export function Header() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[10px] items-center pl-[16px] pr-[166px] py-[16px] relative w-full">
          <Link to="/">
            <p className="font-['Space_Mono:Bold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#0f8] text-[24px] w-[140px]">reiven.io</p>
          </Link>
          <Navigation />
        </div>
      </div>
    </div>
  );
}
