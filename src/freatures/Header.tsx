const MobileNavButton = () => (
  <nav className="block xl:hidden">
    <div className="ml-5 flex md:ml-0">
      <button>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z"
            className="fill-col-light"
          ></path>
        </svg>
      </button>
    </div>
  </nav>
);

const HeaderLogo = () => (
  <a href="/" className="mr-12">
    <img
      className="h-[64px]"
      src="https://io.google/2022/app/images/Logo-dark.svg"
      height="64"
      width="154"
    />
  </a>
);

const Header = () => (
  <header className="border-b-2 border-white xl:border-b-0">
    <nav className="flex items-center py-3 md:px-8">
      <MobileNavButton />
      <HeaderLogo />
    </nav>
  </header>
);

export default Header;
