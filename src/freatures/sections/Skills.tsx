const SkillCard = (props: { title: string; label: string }) => (
  <div className="border-hover flex flex-col justify-evenly rounded-2xl p-4 xl:flex-row xl:gap-4">
    <img
      loading="lazy"
      role="img"
      aria-hidden="true"
      className="w-1/4 xl:h-32 xl:w-32 xl:self-end"
      src="https://io.google/2022/app/images/codelabs-logo.svg"
    />

    <header className="flex w-full flex-col justify-end">
      <h5 className="font-medium uppercase leading-5 tracking-[.5px] sm:text-xs">
        Codelab
      </h5>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://codelabs.developers.google.com/codelabs/arcore-cloud-anchors"
      >
        <h3 className="my-2.5 font-medium sm:text-[32px] sm:leading-8 sm:tracking-[-.8px]">
          {props.title}
        </h3>
      </a>
      <div className="mt-2 flex flex-row justify-between">
        <span className="text-sm leading-6 tracking-[0.2px]">
          {props.label}
        </span>
      </div>
    </header>
  </div>
);

const Skills = () => (
  <section className="pt-24 md:px-11">
    <div className="mb-10 flex flex-col md:flex-row md:items-center md:justify-between">
      <h2 className="mx-2 mb-10 font-semibold sm:text-[28px] sm:leading-8 sm:tracking-[-.25px] md:mx-0 md:mb-0 lg:text-[36px] lg:leading-[44px] lg:tracking-[-.75px]">
        Grow your skills
      </h2>
      <a
        href="/program"
        rel="noopener"
        className="hidden cursor-pointer font-medium text-col-blue-dark md:block md:text-xl md:leading-7"
      >
        See more
      </a>
    </div>

    <div className="mx-2 grid grid-cols-1 grid-rows-2 gap-8 sm_md:grid-rows-2 md:mx-0 md:grid-cols-2 xl:grid-cols-2">
      <SkillCard title="ARCore Augmented Images" label="Augmented Reality" />
      <SkillCard
        title="ARCore Cloud Anchors with Cloud Anchors"
        label="Augmented Reality"
      />
      <SkillCard title="ARCore Raw Depth API" label="Augmented Reality" />
      <SkillCard
        title="Add a map to your Android app (Kotlin)"
        label="Location/Maps Android"
      />
    </div>

    <div>
      <a
        href="/program"
        rel="noopener"
        className="block cursor-pointer px-2 text-base font-medium leading-6 text-col-blue-dark md:hidden"
      >
        See more
      </a>
    </div>
  </section>
);

export default Skills;
