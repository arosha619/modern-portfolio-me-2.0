import Link from "next/link";
import Socials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full items-center px-16 xl-px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* logo */}
          <Link href="/" className="group">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                arosha
              </span>
              <span className="text-2xl font-normal text-white/80 group-hover:text-accent/80 transition-colors duration-300">
                sandaruwan
              </span>
              <span className="text-accent text-2xl font-bold">.</span>
            </div>
          </Link>

          {/* socials */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
