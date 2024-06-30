const Session = (props: {
  title: string;
  paragraph: string;
  label: string;
  imgSrc: string;
  href: string;
}) => (
  <div className="border-hover mx-2 rounded-xl p-4 md:mx-0 md:p-5">
    <a href={props.href} className="mb-4 block">
      <div className="relative mb-5 aspect-[16/9] w-full">
        <img
          loading="lazy"
          role="img"
          aria-hidden="true"
          className="absolute h-full w-full rounded-xl object-cover"
          src={props.imgSrc}
        />
      </div>

      <h3 className="my-2 font-medium sm:text-xl sm:leading-6 sm:tracking-[-.5px] lg:text-2xl lg:leading-[30px]">
        {props.title}
      </h3>

      <p className="my-2 leading-6 sm:text-lg lg:text-base">
        {props.paragraph}
      </p>
    </a>

    <div className="flex flex-wrap gap-x-4 text-sm leading-6 tracking-[.2px]">
      {props.label}
    </div>
  </div>
);

const Sessions = () => (
  <section className="pt-24 md:px-9">
    <div className="mb-4 flex flex-col lg:flex-row lg:items-center lg:justify-between">
      <h2 className="mx-2 font-semibold sm:text-[28px] sm:leading-[32px] sm:tracking-[-.25px] md:mx-0 lg:text-[36px] lg:leading-[44px] lg:tracking-[-.75px] xl:my-[28px] xl:mb-[28px]">
        Featured sessions
      </h2>
      <a
        href="/program"
        rel="noopener"
        className="hidden cursor-pointer font-medium text-col-blue-dark lg:text-xl xl:block"
      >
        See full program
      </a>
    </div>

    <div className="grid min-h-[440px] grid-cols-1 sm_md:grid-cols-2 xl:grid-cols-4">
      <Session
        title="What's new in Android"
        paragraph="Hear the latest news on everything happening in the world of Android development: Android 13, Jetpack, tooling, perfo..."
        label="Beginner Android Keynote"
        imgSrc="https://io.google/2022/data/im/4e81975b-46a2-4966-98d8-19fb4fb66f78.webp"
        href="https://io.google/2022/program/4e81975b-46a2-4966-98d8-19fb4fb66f78/"
      />
      <Session
        title="The cloud built for developers"
        paragraph="Learn how Google Cloud and Workspace teams are building cloud services to help developers and technologists create tr..."
        label="Intermediate Cloud Keynote"
        imgSrc="https://io.google/2022/data/im/3af70a34-1be2-4040-b873-7549ba4e7b48.webp"
        href="https://io.google/2022/program/3af70a34-1be2-4040-b873-7549ba4e7b48/"
      />
      <Session
        title="What's new in Firebase"
        paragraph="Learn how to build and run apps users love with Firebase, a platform designed to help throughout your business’ journey."
        label="Beginner Firebase Keynote"
        imgSrc="https://io.google/2022/data/im/4b4d658d-9682-4573-9ebe-0a48e7ff75df.webp"
        href="https://io.google/2022/program/4b4d658d-9682-4573-9ebe-0a48e7ff75df/"
      />
      <Session
        title="What's new in Flutter"
        paragraph="Learn the latest from Flutter including how to build beautiful native apps for six platforms from a single codebase."
        label="Beginner Flutter Keynote"
        imgSrc="https://io.google/2022/data/im/a2114fc4-10f7-4071-a065-69dc727aeaa5.webp"
        href="https://io.google/2022/program/a2114fc4-10f7-4071-a065-69dc727aeaa5/"
      />
    </div>

    <div>
      <a
        href="/program"
        rel="noopener"
        className="block cursor-pointer text-base font-medium leading-6 text-col-blue-dark xl:hidden"
      >
        See full program
      </a>
    </div>
  </section>
);

export default Sessions;
