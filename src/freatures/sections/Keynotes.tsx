const KeynoteCard = (props: {
  href: string;
  imgSrc: string;
  title: string;
  label: string;
}) => (
  <div className="border-hover mx-2 rounded-xl md:mx-0">
    <div className="w-full p-4 md:p-5">
      <a href={props.href}>
        <div className="relative mb-5 aspect-[16/9] w-full">
          <img
            loading="lazy"
            role="img"
            aria-hidden="true"
            className="absolute h-full w-full rounded-xl object-cover"
            src={props.imgSrc}
            alt={`${props.title} thumbnail`}
          />
        </div>
        <div className="mb-4">
          <h3 className="font-h3 my-2">{props.title}</h3>
        </div>
      </a>
      <div className="mt-auto flex justify-between">
        <div className="font-span">
          <span>{props.label}</span>
        </div>
      </div>
    </div>
  </div>
);

const Keynotes = () => (
  <section className="px-2 pt-24 md:px-9">
    <h2 className="font-h2 mb-8">Watch the keynotes</h2>
    <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2">
      <KeynoteCard
        href="/2022/program/8e80903f-955f-4a5b-9118-b0ce4acdb0e6/"
        imgSrc="https://io.google/2022/data/im/8e80903f-955f-4a5b-9118-b0ce4acdb0e6.webp"
        title="Google I/O keynote"
        label="Keynote"
      />
      <KeynoteCard
        href="/2022/program/0209f281-0b0e-4339-9e7a-a501e36f03c7/"
        imgSrc="https://io.google/2022/data/im/0209f281-0b0e-4339-9e7a-a501e36f03c7.webp"
        title="Developer keynote"
        label="Keynote"
      />
    </div>
  </section>
);

export default Keynotes;
