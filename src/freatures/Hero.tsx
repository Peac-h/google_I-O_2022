const CloseButton = () => (
  <button
    type="button"
    className="absolute bottom-0 right-4 top-0 flex items-center"
    aria-label="Close"
  >
    <svg
      className="fill-col-light-dark h-6 w-6"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 18 18"
    >
      <path d="m14.53 4.53-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
    </svg>
  </button>
);

const PausePlayButton = () => (
  <button
    className="border-dark hover:bg-col-dark group absolute right-4 top-4 rounded-full p-2 transition duration-200 ease-linear"
    aria-label="pause animation"
  >
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_2820_92651"
        style={{ maskType: "alpha" }}
        maskUnits="userSpaceOnUse"
        x="6"
        y="5"
        width="12"
        height="14"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.8923 18.6212H17.6758V5.37885H13.8923V18.6212ZM6.3252 18.6213H10.1087V5.37893H6.3252V18.6213Z"
          className="fill-col-light"
        ></path>
      </mask>
      <g mask="url(#mask0_2820_92651)">
        <rect
          x="0.649414"
          y="0.649414"
          width="22.7012"
          height="22.7012"
          className="fill-col-dark group-hover:fill-col-light"
        ></rect>
      </g>
    </svg>

    <svg
      className="hidden"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M0 0h24v24H0z" fill="none"></path>
      <path d="M8 5v14l11-7z"></path>
    </svg>
  </button>
);

const Hero = () => (
  <div className="hero-wrapper flex flex-col gap-y-2">
    <div className="border-light bg-col-yellow-dark relative rounded-xl py-4 text-center">
      <p className="text-col-dark text-sm font-medium">
        Tip: You can find bookmarked sessions in your{" "}
        <a
          href="https://developers.google.com/profile/u/me"
          target="_blank"
          className="underline"
        >
          Developer Profile
        </a>
        .
      </p>

      <CloseButton />
    </div>

    <div className="flex flex-col gap-x-2 gap-y-2 md:flex-row md:gap-y-0">
      <div className="border-dark bg-col-yellow-light relative flex flex-col items-center overflow-hidden rounded-lg md:w-2/3 md:flex-row">
        <div className="flex flex-1">
          <div className="hidden w-full self-end md:block md:h-[407px]">
            <PausePlayButton />
          </div>

          <div className="m-auto block self-center md:hidden">
            <img
              src="https://io.google/2022/app/images/homepage-header-static.svg"
              width="343"
              height="222"
            />
          </div>
        </div>
      </div>

      <div className="border-dark bg-col-blue text-col-dark flex flex-col justify-between rounded-xl p-6 lg:min-w-[550px] xl:w-1/3">
        <h2 className="w-5/6 text-base font-medium sm:text-[32px] sm:leading-8 sm:tracking-[-.8px] lg:text-5xl lg:leading-[56px]">
          And that's a wrap!
          <br />
          Thanks for joining Google I/O 2022.
        </h2>
        <div className="pt-20">
          <div className="sm:text-xl">
            <p>
              <a
                href="https://www.youtube.com/watch?v=CWTm0ccfZe4&amp;list=TLGGLYR0fesogp0xMjA1MjAyMg"
                rel="noreferrer"
                target="_blank"
                aria-label="I/O '22 recap"
                className="mt-4 underline md:mb-4 md:mt-0"
              >
                Watch the I/O 2022 recap
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Hero;
