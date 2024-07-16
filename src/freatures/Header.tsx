import { useCallback, useEffect, useState } from "react";

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

const Menu = () => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const menuItems = [
    { label: "Program", dropdown: ["Overview", "Speakers"] },
    { label: "Products", link: "/" },
    { label: "Community", link: "/" },
    { label: "Learning Lab", link: "/" },
    { label: "About", dropdown: ["Overview", "FAQ"] },
  ];

  const handleDropdownToggle = (index: number | null) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      const target = event.target as Element;
      if (openDropdown !== null && !target.closest(".dropdown")) {
        setOpenDropdown(null);
      }
    },
    [openDropdown],
  );

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <ul className="mt-[1px] hidden w-[455.094px] flex-nowrap items-center justify-between text-sm leading-6 xl:flex">
      {menuItems.map((item, index) => (
        <li key={index} className={item.link ? "tracking-[.25px]" : "dropdown"}>
          {item.link ? (
            <a href={item.link}>{item.label}</a>
          ) : (
            <button
              className="relative flex items-center gap-2"
              onClick={() => handleDropdownToggle(index)}
            >
              <span>{item.label}</span>
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${openDropdown === index ? "rotate-180" : "rotate-0"}`}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.84754 0.22168L5.29004 3.65668L8.73254 0.22168L9.79004 1.27918L5.29004 5.77918L0.790039 1.27918L1.84754 0.22168Z"
                  className="fill-col-light"
                ></path>
              </svg>
              <div
                className={`absolute top-8 z-20 flex-col items-start rounded-2xl border-2 border-white bg-col-dark p-4 text-col-light ${openDropdown === index ? "flex" : "hidden"}`}
              >
                {item.dropdown?.map((dropdownItem, dropdownIndex) => (
                  <a
                    key={dropdownIndex}
                    href="/"
                    className="mb-4 border-b-2 pb-1"
                  >
                    {dropdownItem}
                  </a>
                ))}
              </div>
            </button>
          )}
        </li>
      ))}
    </ul>
  );
};

const LanguageSelect = () => (
  <div className="ml-auto flex">
    <div className="lg_xl:block hidden">
      <select
        name="language-select"
        className="language-select w-32 appearance-none bg-transparent py-2 font-medium text-white"
        defaultValue="en"
      >
        {[
          { abb: "en", lang: "English" },
          { abb: "es", lang: "Español" },
          { abb: "pt", lang: "Português" },
          { abb: "fr", lang: "Français" },
          { abb: "id", lang: "Indonesia" },
          { abb: "ko", lang: "한국어" },
          { abb: "zh", lang: "中文" },
          { abb: "ja", lang: "日本語" },
        ].map((option) => (
          <option value={option.abb}>{option.lang}</option>
        ))}
      </select>
    </div>
  </div>
);

const Header = () => (
  <header className="border-b-2 border-white xl:border-b-0">
    <nav className="flex items-center py-3 md:px-8">
      <MobileNavButton />
      <HeaderLogo />
      <Menu />
      <LanguageSelect />
    </nav>
  </header>
);

export default Header;
