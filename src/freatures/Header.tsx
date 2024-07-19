import { useCallback, useEffect, useState } from "react";
import LanguageDropdown from "../ui/LanguageDropdown";
import { useDarkMode } from "../context/useDarkMode";

import logoDark from "../assets/Logo-dark.svg";
import logo from "../assets/Logo.svg";

const menuItems = [
  { label: "Program", dropdown: ["Overview", "Speakers"] },
  { label: "Products", link: "/" },
  { label: "Community", link: "/" },
  { label: "Learning Lab", link: "/" },
  { label: "About", dropdown: ["Overview", "FAQ"] },
];

const HeaderLogo = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <a href="/" className="mr-12">
      <img
        className="h-[64px]"
        src={isDarkMode ? logoDark : logo}
        height="64"
        width="154"
      />
    </a>
  );
};

const MobileNav = () => {
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    (event.target as Element).id === "overlay" && setOpenMobileMenu(false);
  }, []);

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  useEffect(() => {
    openMobileMenu
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "auto");

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openMobileMenu]);

  return (
    <nav className="block xl:hidden" onClick={() => setOpenMobileMenu(true)}>
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
              className="fill-col-black-1 dark:fill-col-grey-1"
            ></path>
          </svg>
        </button>
      </div>

      <div className={openMobileMenu ? "block" : "hidden"}>
        <div className="mobileNav dark:bg-col-black-1 fixed left-0 top-0 z-50 flex h-full w-[19rem] max-w-full flex-col gap-4 overflow-y-scroll bg-white">
          <HeaderLogo />

          <Menu isMobile={true} />

          <LanguageDropdown className="language-dropdown--mobile" />
        </div>

        <div
          className="fixed left-0 top-0 z-40 h-full w-full bg-black/80"
          id="overlay"
        ></div>
      </div>
    </nav>
  );
};

const MobileMenu = (props: {
  openDropdown: number | null;
  onDropdownToggle: (arg: number) => void;
}) => {
  return (
    <ul className="mb-auto flex flex-col">
      {menuItems.map((item, index) => (
        <li key={index} className="dropdown pr-2 last:mt-1">
          {item.link ? (
            <a href={item.link} className="block px-5 pb-3 pt-4">
              {item.label}
            </a>
          ) : (
            <div>
              <button
                className={`flex w-full justify-between p-5 py-4 ${props.openDropdown === index ? "text-col-black-1 bg-col-grey-2 rounded-r-full" : ""}`}
                onClick={() => props.onDropdownToggle(index)}
              >
                <span>{item.label}</span>
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={`rotate-0 transform ${props.openDropdown === index ? "rotate-180" : "rotate-0"}`}
                >
                  <mask
                    id="mask0_672_74360"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="3"
                    y="5"
                    width="12"
                    height="7"
                  >
                    <path
                      d="M4.39666 5.05957L3.45667 5.99957L8.79 11.3329L14.1233 5.99957L13.1833 5.05957L8.79 9.44624"
                      className={`fill-col-black-1 ${props.openDropdown === index ? "" : "dark:fill-col-grey-1"}`}
                    ></path>
                  </mask>
                  <g mask="url(#mask0_672_74360)">
                    <rect
                      x="0.790039"
                      width="16"
                      height="16"
                      className={`fill-col-black-1 ${props.openDropdown === index ? "" : "dark:fill-col-grey-1"}`}
                    ></rect>
                  </g>
                </svg>
              </button>

              <div
                className={`text-col-black-1 dark:bg-col-black-1 dark:text-col-grey-1 flex-col items-start px-10 pt-4 dark:border-white ${props.openDropdown === index ? "flex" : "hidden"}`}
              >
                {item.dropdown?.map(
                  (dropdownItem: string, dropdownIndex: number) => (
                    <a
                      key={dropdownIndex}
                      href="/"
                      className="border-col-black-1 mb-6 border-b-2 pb-1 last:mb-4 dark:border-white"
                    >
                      {dropdownItem}
                    </a>
                  ),
                )}
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};

const DesktopMenu = (props: {
  openDropdown: number | null;
  onDropdownToggle: (arg: number) => void;
}) => {
  return (
    <ul className="mt-[1px] hidden w-[455.094px] flex-nowrap items-center justify-between text-sm leading-6 xl:flex">
      {menuItems.map((item, index) => (
        <li key={index} className={item.link ? "tracking-[.25px]" : "dropdown"}>
          {item.link ? (
            <a href={item.link}>{item.label}</a>
          ) : (
            <button
              className="relative flex items-center gap-2"
              onClick={() => props.onDropdownToggle(index)}
            >
              <span>{item.label}</span>
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`${props.openDropdown === index ? "rotate-180" : "rotate-0"}`}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M1.84754 0.22168L5.29004 3.65668L8.73254 0.22168L9.79004 1.27918L5.29004 5.77918L0.790039 1.27918L1.84754 0.22168Z"
                  className="fill-col-black-1 dark:fill-col-grey-1"
                ></path>
              </svg>
              <div
                className={`border-col-black-1 text-col-black-1 dark:bg-col-black-1 dark:text-col-grey-1 absolute top-8 z-20 flex-col items-start rounded-2xl border-2 bg-white p-4 dark:border-white ${props.openDropdown === index ? "flex" : "hidden"}`}
              >
                {item.dropdown?.map((dropdownItem, dropdownIndex) => (
                  <a
                    key={dropdownIndex}
                    href="/"
                    className="border-col-black-1 mb-4 border-b-2 pb-1 dark:border-white"
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

const Menu = (props: { isMobile?: boolean }) => {
  const [openDropdown, setOpenDropdown] = useState<number | null>(null);

  const handleDropdownToggle = (index: number | null) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      openDropdown !== null &&
        !(event.target as Element).closest(".dropdown") &&
        setOpenDropdown(null);
    },
    [openDropdown],
  );

  useEffect(() => {
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return props.isMobile ? (
    <MobileMenu
      openDropdown={openDropdown}
      onDropdownToggle={handleDropdownToggle}
    />
  ) : (
    <DesktopMenu
      openDropdown={openDropdown}
      onDropdownToggle={handleDropdownToggle}
    />
  );
};

const Header = () => (
  <header className="border-col-black-1 border-b-2 xl:border-b-0 dark:border-white">
    <nav className="flex items-center py-3 md:px-8">
      <MobileNav />
      <HeaderLogo />
      <Menu />
      <LanguageDropdown className="language-dropdown--header" />
    </nav>
  </header>
);

export default Header;
