import Image from "next/image";
import { navLists } from "@/constants";

const NavBar = () => {
  return (
    <header className="flex w-full items-center justify-between px-5 py-5 sm:px-10">
      <nav className="screen-max-width flex w-full">
        <Image
          src={"/icons/apple.svg"}
          alt="apple logo"
          width={14}
          height={18}
        />

        <div className="flex flex-1 justify-center space-x-5 max-sm:hidden">
          {navLists.map((tab) => (
            <div
              key={tab}
              className="cursor-pointer text-sm text-gray transition-all hover:text-white"
            >
              {tab}
            </div>
          ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:flex-1 max-sm:justify-end">
          <Image
            src={"/icons/search.svg"}
            alt="search"
            width={18}
            height={18}
          />

          <Image src={"/icons/bag.svg"} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
