import Image from "next/image";
import logo from "../../src/app/favicon.ico";
const Header = () => {
  return (
    <header>
      <nav className="bg-white border border-gray-200 px-4 lg:px-6 py-2.5 ">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a href="#" className="flex items-center">
            <Image
              src={logo}
              className="mr-3 h-6 w-6 sm:h-9 sm:w-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Educative
            </span>
          </a>
        </div>
      </nav>
    </header>
  );
};
export default Header;