import * as React from "react";
import "../globals.css"
function ArticleImage({ src, alt }) {
  return (
    <img
      loading="lazy"
      src={src}
      alt={alt}
      className="w-full aspect-[3.13] max-md:max-w-full"
    />
  );
}

function ArticleHeader() {
  return (
    <div className="text-lg text-black max-md:max-w-full">
      <span className="font-medium">✍️ </span>
      <span className="font-medium">Article</span>
    </div>
  );
}

function ArticleTitle({ title, threedots }) {
  const [more, setMore] = React.useState(false);
  return (
    <div className="flex gap-5 mt-4 text-2xl font-semibold leading-8 text-black max-md:flex-wrap max-md:max-w-full">
      <div className="flex-auto max-md:max-w-full">{title}</div>
      <div className="">
        <img
          loading="lazy"
          onClick={() => {
            setMore(!more);
          }}
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec1d083440c802706cee1c53472f1120b0a2f7f26bf2ce29433cc0240fd66f00?apiKey=7255d85a71e84b389c79f8c733a77483&"
          alt="Author"
          className="shrink-0 hover:bg-slate-200 self-start w-7 aspect-square"
        />
        {!more ? (
          <></>
        ) : (
          <div className=" flex flex-col ml-5 font-light text-sm absolute rounded-4 right-[33vw] bg-white  w-[150px] border-2 rounded-lg border-slate-300 py-2">
            <div className="hover:bg-blue-400 p-2">Edit</div>
            <div className="hover:bg-blue-400 p-2">Remove</div>
            <div className="hover:bg-blue-400 p-2">Report</div>
          </div>
        )}
      </div>
    </div>
  );
}

function ArticleExcerpt({ excerpt }) {
  return (
    <div className="mt-5 text-xl leading-6 text-zinc-600 max-md:max-w-full">
      {excerpt}
    </div>
  );
}

function AuthorInfo({ name, image }) {
  return (
    <div className="flex flex-1 gap-2.5 text-lg font-semibold text-black">
      <img
        loading="lazy"
        src={image}
        alt={name}
        className="shrink-0 w-12 aspect-square"
      />
      <div className="flex-auto my-auto">{name}</div>
    </div>
  );
}

function ArticleStats({ views, readTime }) {
  return (
    <div className="flex flex-1 gap-5 justify-between my-auto text-sm font-medium text-right text-neutral-600">
      <div className="flex gap-2.5 my-auto">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/796f69616be18969b044e18aab72a37e4916680cdffae7fdc99465e6a9f5fa67?apiKey=7255d85a71e84b389c79f8c733a77483&"
          alt="Views"
          className="shrink-0 aspect-square w-[18px]"
        />
        <div className="my-auto">{views} views</div>
      </div>
      <img
        loading="lazy"
        src={readTime}
        alt="Read time"
        className="shrink-0 aspect-[1.16] w-[42px]"
      />
    </div>
  );
}

function ArticleCard({
  image,
  title,
  excerpt,
  authorName,
  authorImage,
  views,
  readTime,
}) {
  return (
    <article className="flex flex-col pt-px pb-5 mt-7 bg-white rounded border border-solid border-neutral-200 max-md:max-w-full">
      <ArticleImage src={image} alt={title} />
      <div className="flex flex-col px-5 mt-5 max-md:px-5 max-md:max-w-full">
        <ArticleHeader />
        <ArticleTitle title={title} authorImage={authorImage} />
        <ArticleExcerpt excerpt={excerpt} />
        <div className="flex gap-5 mt-8 w-full max-md:flex-wrap max-md:max-w-full">
          <AuthorInfo name={authorName} image={authorImage} />
          <ArticleStats views={views} readTime={readTime} />
        </div>
      </div>
    </article>
  );
}

function MyComponent() {
  const articles = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/e0849817d4063b1b9cb2e8673bcce2a49b5b51f3fabfa40fbb49b2413709d2be?apiKey=7255d85a71e84b389c79f8c733a77483&",
      title: "What if famous brands had regular fonts? Meet RegulaBrands!",
      excerpt:
        "I've worked in UX for the better part of a decade. From now on, I plan to rei…",
      authorName: "Sarthak Kamra",
      authorImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/41f7aabd845445396ba28ffbb05023cd62b218efcebc6f66f9cf902c36384870?apiKey=7255d85a71e84b389c79f8c733a77483&",
      views: "1.4k",
      threedots:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/ec1d083440c802706cee1c53472f1120b0a2f7f26bf2ce29433cc0240fd66f00?apiKey=7255d85a71e84b389c79f8c733a77483&",
      readTime:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/2576324c4fbb5f027dd72455da5b0b8e873f96fc4eea507ac61b42a81f3173cd?apiKey=7255d85a71e84b389c79f8c733a77483&",
    },
    // Add more articles here...
  ];

  return (
    <main className="w-[95vw] xl:w-[50vw]">
      {articles.map((article, index) => (
        <ArticleCard key={index} {...article} />
      ))}
    </main>
  );
}

export default MyComponent;
