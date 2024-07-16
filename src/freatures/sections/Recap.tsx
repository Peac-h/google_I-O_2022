const Recap = () => (
  <section className="border-dark mt-2 flex flex-col rounded-lg bg-col-yellow-light p-6 text-col-dark md:flex-row md:p-10">
    <div className="flex h-full flex-1 flex-col">
      <h2 className="font-h2-large">I/O '22 recap</h2>
      <div className="my-6 text-left text-lg font-medium md:mr-24 md:text-xl xl:mr-32">
        <p className="mt-auto pb-16">
          From announcements and technology deep-dives to bringing the developer
          community together, I/O is a unique experience for everyone who
          attends. Watch this year's recap to catch up on anything you might
          have missed.
        </p>
        <p>
          <a
            href="https://www.youtube.com/watch?v=CWTm0ccfZe4&amp;list=TLGGLYR0fesogp0xMjA1MjAyMg"
            rel="noreferrer"
            target="_blank"
            aria-label="I/O '22 recap"
            className="mt-6 md:mt-32"
          >
            Watch the I/O 2022 recap
          </a>
        </p>
      </div>
    </div>

    <div
      aria-label="I/O '22 recap"
      className="mt-8 flex items-center justify-center rounded-lg md:mt-0"
    >
      <iframe
        className="h-56 w-full rounded-lg md:h-[14.625rem] md:w-[26rem] lg:h-[14.625rem] lg:w-[26rem] xl:h-[20.8125rem] xl:w-[37rem]"
        width="460"
        height="387"
        src="https://www.youtube.com/embed/CWTm0ccfZe4&amp;loop=1?playlist=CWTm0ccfZe4,htG27DW5ju4"
        title="I/O '21 Recap"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  </section>
);

export default Recap;
