import * as React from "react";
import "../globals.css"

function MyComponent() {
  const [more, setMore] = React.useState(false);
  return (
    <div className="flex flex-col px-5 py-5 mt-3.5 w-full bg-white rounded border border-solid border-neutral-200 max-md:max-w-full">
      <div className="flex gap-5 justify-between w-full font-medium text-black max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-5 justify-between">
          <div className="flex flex-col">
            <div className="text-lg">💼️ Job</div>
            <div className="mt-6 text-2xl font-semibold leading-7">
              Software Developer
            </div>
            <div className="flex gap-1 mt-4 text-base">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/9e00ac9254b3357b27e6bbee5416317c98dc01e1522bd0f3673fd6d23310d2ce?apiKey=7255d85a71e84b389c79f8c733a77483&"
                className="shrink-0 w-5 aspect-square"
              />
              <div className="flex-auto my-auto">
                Innovaccer Analytics Private Ltd.
              </div>
            </div>
          </div>
          <div className="flex gap-1 self-end mt-20 text-base max-md:mt-10">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b2e78229f864a7682e0890d0689b6bfa0ba4f96436ecd396618eae803d58ae9?apiKey=7255d85a71e84b389c79f8c733a77483&"
              className="shrink-0 w-5 aspect-square"
            />
            <div className="my-auto">Noida, India</div>
          </div>
        </div>
        <div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d158353f723a3d9a109a99ae2c99da0cd5f1c5221d29a5fb91bd5bf4168ca07?apiKey=7255d85a71e84b389c79f8c733a77483&"
            className="shrink-0 my-auto w-9 hover:bg-slate-200 aspect-square"
            onClick={() => {
              setMore(!more);
            }}
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
      <div className="hover:border-transparent justify-center items-center px-16 py-3 mt-4 text-sm font-semibold leading-5 text-center text-emerald-500 bg-white rounded-xl border border-gray-400 border-solid max-md:px-5 max-md:max-w-full">
        Apply on Timesjobs
      </div>
      <div className="flex gap-5 mt-8 w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-1 gap-2.5 text-lg font-semibold text-black">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4c9e5c51aa3a5dd268966782bf33b0b76cf8a81c05da465148f10efceee80a6e?apiKey=7255d85a71e84b389c79f8c733a77483&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c9e5c51aa3a5dd268966782bf33b0b76cf8a81c05da465148f10efceee80a6e?apiKey=7255d85a71e84b389c79f8c733a77483&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c9e5c51aa3a5dd268966782bf33b0b76cf8a81c05da465148f10efceee80a6e?apiKey=7255d85a71e84b389c79f8c733a77483&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c9e5c51aa3a5dd268966782bf33b0b76cf8a81c05da465148f10efceee80a6e?apiKey=7255d85a71e84b389c79f8c733a77483&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c9e5c51aa3a5dd268966782bf33b0b76cf8a81c05da465148f10efceee80a6e?apiKey=7255d85a71e84b389c79f8c733a77483&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c9e5c51aa3a5dd268966782bf33b0b76cf8a81c05da465148f10efceee80a6e?apiKey=7255d85a71e84b389c79f8c733a77483&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c9e5c51aa3a5dd268966782bf33b0b76cf8a81c05da465148f10efceee80a6e?apiKey=7255d85a71e84b389c79f8c733a77483&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4c9e5c51aa3a5dd268966782bf33b0b76cf8a81c05da465148f10efceee80a6e?apiKey=7255d85a71e84b389c79f8c733a77483&"
            className="shrink-0 w-12 aspect-square"
          />
          <div className="flex-auto my-auto">Joseph Gray</div>
        </div>
        <div className="flex flex-1 gap-5 justify-between my-auto text-sm font-medium text-right text-neutral-600">
          <div className="flex gap-2.5 my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/796f69616be18969b044e18aab72a37e4916680cdffae7fdc99465e6a9f5fa67?apiKey=7255d85a71e84b389c79f8c733a77483&"
              className="shrink-0 aspect-square w-[18px]"
            />
            <div className="my-auto">1.4k views</div>
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2483567c9c09e6dd8c6016691fa57160e9534febb419aa55d1266d45d92b4264?apiKey=7255d85a71e84b389c79f8c733a77483&"
            className="shrink-0 aspect-[1.16] w-[42px]"
          />
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
