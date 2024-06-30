const ProductCard = (props: {
  href: string;
  imgSrc: string;
  title: string;
}) => (
  <a
    className="xs:p-4 border-hover mx-auto flex w-40 flex-col items-center justify-around rounded-2xl p-2 sm_md:p-5 md:w-48"
    href={props.href}
  >
    <img src={props.imgSrc} role="img" aria-hidden="true" />
    <h2 className="mt-3 flex h-12 items-start justify-center text-center font-medium">
      {props.title}
    </h2>
  </a>
);

const Products = () => (
  <section className="px-2 pt-24 md:px-9">
    <div className="flex flex-col items-center justify-between xl:flex-row">
      <div className="mb-10 flex flex-col md:mb-0 md:w-3/4">
        <h5 className="font-h2">Learn more about our products</h5>
      </div>
      <a href="/products" rel="noopener" className="font-more-l xl:block">
        See all products
      </a>
    </div>

    <div className="my-12 grid grid-cols-2 gap-2 sm_md:grid-cols-3 md:grid-cols-4 xl:grid-cols-6">
      <ProductCard
        href="/accessibility"
        imgSrc="https://io.google/2022/app/images/accessibility-logo.svg"
        title="Accessibility"
      />
      <ProductCard
        href="/android"
        imgSrc="https://io.google/2022/app/images/android-logo.svg"
        title="Android"
      />
      <ProductCard
        href="/arcore"
        imgSrc="https://io.google/2022/app/images/arcore-logo.svg"
        title="ARCore"
      />
      <ProductCard
        href="/chrome-os"
        imgSrc="https://io.google/2022/app/images/chrome-logo.svg"
        title="Chrome OS"
      />
      <ProductCard
        href="/firebase"
        imgSrc="https://io.google/2022/app/images/firebase-logo.svg"
        title="Firebase"
      />
      <ProductCard
        href="/flutter"
        imgSrc="https://io.google/2022/app/images/flutter-logo.svg"
        title="Flutter"
      />
    </div>

    <div>
      <a href="/products" rel="noopener" className="font-more-s xl:hidden">
        See all products
      </a>
    </div>
  </section>
);

export default Products;
