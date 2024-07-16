const SkillCard = (props: { title: string; label: string[] }) => (
  <div className="border-hover flex flex-col justify-evenly rounded-2xl p-4 xl:flex-row xl:gap-4">
    <img
      loading="lazy"
      role="img"
      aria-hidden="true"
      className="w-1/4 xl:h-32 xl:w-32 xl:self-end"
      src="https://io.google/2022/app/images/codelabs-logo.svg"
    />
    <header className="flex w-full flex-col justify-end">
      <h5 className="font-h5">Codelab</h5>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://codelabs.developers.google.com/codelabs/arcore-cloud-anchors"
      >
        <h3 className="font-h3-large my-2.5">{props.title}</h3>
      </a>
      <div className="mt-2 flex flex-row gap-4">
        {props.label.map((label, i) => (
          <span className="font-span" key={i}>
            {label}
          </span>
        ))}
      </div>
    </header>
  </div>
);

const Skills = () => (
  <section className="pt-24 text-white md:px-11">
    <div className="mx-2 mb-20 flex flex-col md:mx-0 md:mb-10 md:flex-row md:items-end md:justify-between">
      <h2 className="font-h2">Grow your skills</h2>
      <a href="/program" rel="noopener" className="font-more-l md:block">
        See more
      </a>
    </div>
    <div className="mx-2 grid grid-cols-1 grid-rows-4 gap-8 sm_md:grid-rows-2 md:mx-0 md:grid-cols-2 xl:grid-cols-2">
      <SkillCard
        title="ARCore Augmented Images"
        label={["Augmented Reality"]}
      />
      <SkillCard
        title="ARCore Cloud Anchors with Cloud Anchors"
        label={["Augmented Reality"]}
      />
      <SkillCard title="ARCore Raw Depth API" label={["Augmented Reality"]} />
      <SkillCard
        title="Add a map to your Android app (Kotlin)"
        label={["Location/Maps", "Android"]}
      />
    </div>
    <div>
      <a
        href="/program"
        rel="noopener"
        className="font-more-s mx-2 inline-block sm:text-xl md:hidden"
      >
        See more
      </a>
    </div>
  </section>
);

export default Skills;
