import { Button } from "@/components/ui/button";
import { github } from "@/utils/Icons";
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle/ThemeToggle";
import SearchDialog from "./SearchDialog/SearchDialog";

function Navbar() {
  return (
    <nav className="w-full py-4 flex items-center justify-between">
      <div className="ml-10 dark:animate-pulse cursor-pointer">
        <h2 className="hidden md:block font-semibold text-2xl font-md text-blue-400 dark:text-slate-200">
          Sky Vista ⛅
        </h2>
      </div>
      <div className="search-container flex shrink-0 w-full gap-2 sm:w-fit">
        <SearchDialog />
        <div className="btn-group flex items-center gap-2">
          <ThemeToggle />
          <Link
            prefetch={false}
            className="source-code shrink-0"
            href={"https://github.com/Sayakdutt/SkyVista"}
            target="_blank"
          >
            <Button variant={"default"} className="h-9">
              {github}
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
