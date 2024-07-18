const ModeButtonSwitch = (props: { toggleDarkMode: () => void }) => {
  return (
    <button
      aria-label="Toggle Dark Mode"
      role="button"
      className="flex items-start"
      onClick={props.toggleDarkMode}
    >
      <svg
        width="24"
        height="24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 3a.75.75 0 0 1-.75-.75V.75a.75.75 0 1 1 1.5 0v1.5A.75.75 0 0 1 12 3ZM5.105 5.855a.755.755 0 0 1-.53-.22L3.5 4.575A.76.76 0 0 1 4.575 3.5l1.06 1.06a.745.745 0 0 1 0 1.06.755.755 0 0 1-.53.235ZM12 19.5A7.5 7.5 0 0 1 6.693 6.695a.76.76 0 0 1 .71-.2.745.745 0 0 1 .535.5 16.1 16.1 0 0 0 9.116 9.085.75.75 0 0 1 .25 1.225 7.454 7.454 0 0 1-5.306 2.195ZM7 8.67A6 6 0 0 0 15.364 17 17.56 17.56 0 0 1 7 8.67ZM18.33 15.08a.791.791 0 0 1-.26-.045.755.755 0 0 1-.444-.965A5.934 5.934 0 0 0 18 12a6 6 0 0 0-6-6c-.707 0-1.408.128-2.07.375a.75.75 0 0 1-.94-1.018.76.76 0 0 1 .42-.392 7.5 7.5 0 0 1 9.625 9.625.76.76 0 0 1-.705.49ZM2.25 12.75H.75a.75.75 0 1 1 0-1.5h1.5a.75.75 0 1 1 0 1.5ZM4.046 20.705A.755.755 0 0 1 3.5 20.5a.745.745 0 0 1 0-1.06l1.06-1.06a.75.75 0 1 1 1.06 1.06L4.576 20.5a.755.755 0 0 1-.53.205ZM12 24a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 1 1 1.5 0v1.5A.75.75 0 0 1 12 24ZM19.955 20.705a.755.755 0 0 1-.53-.205l-1.06-1.06a.75.75 0 0 1 1.06-1.06l1.075 1.045a.745.745 0 0 1-.252 1.232.757.757 0 0 1-.293.048ZM23.25 12.75h-1.5a.75.75 0 1 1 0-1.5h1.5a.75.75 0 1 1 0 1.5ZM18.896 5.855a.755.755 0 0 1-.752-.75.745.745 0 0 1 .222-.53l1.06-1.075a.76.76 0 1 1 1.075 1.075l-1.06 1.06a.755.755 0 0 1-.545.22Z"
          className="fill-col-grey-dark"
        ></path>
      </svg>
    </button>
  );
};

const LanguageSelect = () => (
  <select
    name="language-select"
    className="border-grey language-select mt-8 w-56 appearance-none bg-transparent py-2 font-medium text-col-grey-dark xl:mt-0"
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
    ].map((option, i) => (
      <option value={option.abb} key={i}>
        {option.lang}
      </option>
    ))}
  </select>
);

const Footer = (props: { toggleDarkMode: () => void }) => (
  <footer className="w-max-full flex flex-col bg-col-dark px-7 pb-16 pt-10 xl:flex-row xl:items-center xl:justify-between xl:px-16 xl:py-10">
    <div className="flex flex-1 flex-col items-start space-y-6 text-base font-medium text-col-grey xl:flex-row xl:items-center xl:space-x-6 xl:space-y-0">
      <div className="mb-4 flex w-full justify-between text-2xl font-semibold xl:mb-0 xl:mr-12 xl:w-16">
        <a href="/">Google</a>
        <div className="flex xl:hidden">
          <ModeButtonSwitch toggleDarkMode={props.toggleDarkMode} />
        </div>
      </div>

      <a href="/">I/O 2021</a>
      <a href="/">I/O Playground</a>
      <a href="/">Privacy &amp; Terms</a>
      <a href="/">Community guidelines</a>
      <a href="/">FAQ</a>

      <div className="mt-6">
        <LanguageSelect />
      </div>
    </div>

    <div className="mt-12 flex items-center space-x-6 xl:mt-0 xl:justify-end xl:justify-self-end">
      <a href="/">
        <img
          src="https://io.google/2022/app/images/ic_twitter.svg"
          role="img"
          aria-hidden="true"
          height="24"
          width="24"
        />
      </a>
      <a href="/">
        <img
          src="https://io.google/2022/app/images/ic_facebook.svg"
          role="img"
          aria-hidden="true"
          height="24"
          width="24"
        />
      </a>
      <a href="/">
        <img
          src="https://io.google/2022/app/images/ic_googledev.svg"
          role="img"
          aria-hidden="true"
          height="24"
          width="24"
        />
      </a>
      <a href="/">
        <img
          src="https://io.google/2022/app/images/ic_youtube.svg"
          role="img"
          aria-hidden="true"
          height="24"
          width="24"
        />
      </a>
      <a href="/">
        <img
          src="https://io.google/2022/app/images/ic_medium.svg"
          role="img"
          aria-hidden="true"
          height="24"
          width="24"
        />
      </a>
      <div className="hidden xl:flex">
        <ModeButtonSwitch toggleDarkMode={props.toggleDarkMode} />
      </div>
    </div>
  </footer>
);

export default Footer;
