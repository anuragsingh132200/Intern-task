import * as React from "react";
import "../globals.css"
function Card({
  image,
  category,
  title,
  description,
  authorImage,
  authorName,
  views,
  shareImage,
}) {
  const [more, setMore] = React.useState(false);
  return (
    <article className="w-[95vw] xl:w-[50vw] flex flex-col pt-px pb-5 mt-3.5 bg-white rounded border border-solid border-neutral-200 max-md:max-w-full">
      <img
        src={image}
        alt={title}
        className="w-full aspect-[3.13] max-md:max-w-full"
      />
      <div className="flex flex-col px-5 mt-5 w-full max-md:max-w-full">
        <div className="text-lg text-black max-md:max-w-full">
          <span className="font-medium">🔬️</span>{" "}
          <span className="font-medium">{category}</span>
        </div>
        <h2 className="flex gap-5 mt-4 text-2xl font-semibold leading-8 text-black max-md:flex-wrap max-md:max-w-full">
          <span className="flex-auto max-md:max-w-full">{title}</span>
          <div>
            <img
              onClick={() => {
                setMore(!more);
              }}
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ec1d083440c802706cee1c53472f1120b0a2f7f26bf2ce29433cc0240fd66f00?apiKey=7255d85a71e84b389c79f8c733a77483&"
              alt=""
              className="shrink-0 self-start w-10 hover:bg-slate-200 aspect-square"
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
        </h2>
        <p className="mt-5 text-xl leading-6 text-zinc-600 max-md:max-w-full">
          {description}
        </p>
        <div className="flex gap-5 justify-between mt-8 w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex gap-2.5 text-lg font-semibold text-black">
            <img
              src={authorImage}
              alt={`${authorName}'s profile`}
              className="shrink-0 w-12 aspect-square"
            />
            <div className="my-auto">{authorName}</div>
          </div>
          <div className="flex gap-5 justify-between my-auto text-sm font-medium text-right text-neutral-600">
            <div className="flex gap-2.5 my-auto">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/796f69616be18969b044e18aab72a37e4916680cdffae7fdc99465e6a9f5fa67?apiKey=7255d85a71e84b389c79f8c733a77483&"
                alt=""
                className="shrink-0 aspect-square w-[18px]"
              />
              <div className="my-auto">{views} views</div>
            </div>
            <img
              src={shareImage}
              alt="Share"
              className="shrink-0 aspect-[1.16] w-[42px]"
            />
          </div>
        </div>
      </div>
    </article>
  );
}

function MyComponent() {
  const cards = [
    {
      image:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/8e41c840c16882edf58ddeefb0c9103f7c27cfeb7471388a5fbbdfa297f57153?apiKey=7255d85a71e84b389c79f8c733a77483&",
      category: "Education",
      title:
        "Tax Benefits for Investment under National Pension Scheme launched by Government",
      description:
        "I've worked in UX for the better part of a decade. From now on, I plan to rei…",
      authorImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/7ec84fbb753ed7f4e0d874102933001776d127767fbe8f49a15774a3bc7ae7ec?apiKey=7255d85a71e84b389c79f8c733a77483&",
      authorName: "Sarah West",
      views: "1.4k",
      shareImage:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/1d2b1c95d91ffa86d532207cbbb830fc1c4ba5ed905e2d467c4df782281e8f66?apiKey=7255d85a71e84b389c79f8c733a77483&",
    },
    // Add more card data objects as needed
  ];

  return (
    <div className="flex flex-col gap-4">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}

export default MyComponent;
