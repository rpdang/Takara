import Link from "next/link";

type HeaderLinks = {
  title: string;
  ref: string;
};

const headerLinks: HeaderLinks[] = [
  { title: "Home", ref: "#" },
  { title: "Company", ref: "#" },
  { title: "Features", ref: "#" },
  { title: "Contact", ref: "#" },
] as const;

const Header = () => {
  const getTakaraLogo = () => (
    <Link href="#" className="flex items-center">
      <svg
        className="h-6 sm:h-9"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        fill="none"
      >
        <g id="T">
          <rect x="40" y="40" width="15" height="45" rx="10" fill="#8A45FF" />
          <rect x="20" y="22" width="55" height="15" rx="10" fill="#D56AFF" />
        </g>
      </svg>
      <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
        akara
      </span>
    </Link>
  );

  return (
    <header className="fixed w-full">
      <nav className="border-gray-100 bg-white py-2.5">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between px-4">
          {getTakaraLogo()}
          <div className="flex items-center lg:order-2">
            <Link
              href="#"
              className="rounded-lg bg-theme-600 px-4 py-2 text-sm font-medium text-white hover:bg-theme-800 focus:outline-none focus:ring-4 focus:ring-theme-300 dark:bg-theme-600 dark:hover:bg-theme-700 dark:focus:ring-theme-800 sm:mr-2 lg:mr-0 lg:px-5 lg:py-2.5"
            >
              Coming Soon
            </Link>
            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="ml-1 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 lg:hidden"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
            id="mobile-menu-2"
          >
            <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
              {headerLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.ref}
                    className={`block rounded ${i == 0 ? "bg-theme-700 text-white lg:text-theme-700" : "border-b border-gray-100 text-gray-700 hover:bg-gray-50"} py-2 pl-3 pr-4 lg:bg-transparent lg:p-0`}
                    aria-current="page"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
