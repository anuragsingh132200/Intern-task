import * as React from "react";
import { useState } from "react";
import "../globals.css"

function MyComponent() {
  const [moreinfo, setMoreinfo] = useState(false);
  return (
    <div className=" flex flex-col pt-px pb-5 mt-3.5 w-[95vw] xl:w-[50vw] bg-white rounded border border-solid border-neutral-200 max-md:max-w-full">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/4866fe4683fb94d88b03681cbed0bc561655dc556ca4bcd7bc2ae34d86461691?apiKey=7255d85a71e84b389c79f8c733a77483&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/4866fe4683fb94d88b03681cbed0bc561655dc556ca4bcd7bc2ae34d86461691?apiKey=7255d85a71e84b389c79f8c733a77483&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4866fe4683fb94d88b03681cbed0bc561655dc556ca4bcd7bc2ae34d86461691?apiKey=7255d85a71e84b389c79f8c733a77483&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/4866fe4683fb94d88b03681cbed0bc561655dc556ca4bcd7bc2ae34d86461691?apiKey=7255d85a71e84b389c79f8c733a77483&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/4866fe4683fb94d88b03681cbed0bc561655dc556ca4bcd7bc2ae34d86461691?apiKey=7255d85a71e84b389c79f8c733a77483&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/4866fe4683fb94d88b03681cbed0bc561655dc556ca4bcd7bc2ae34d86461691?apiKey=7255d85a71e84b389c79f8c733a77483&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/4866fe4683fb94d88b03681cbed0bc561655dc556ca4bcd7bc2ae34d86461691?apiKey=7255d85a71e84b389c79f8c733a77483&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/4866fe4683fb94d88b03681cbed0bc561655dc556ca4bcd7bc2ae34d86461691?apiKey=7255d85a71e84b389c79f8c733a77483&"
        className="w-full aspect-[3.13] max-md:max-w-full"
      />
      <div className="flex flex-col px-5 mt-5 w-full max-md:max-w-full">
        <div className="text-lg text-black max-md:max-w-full">
          <span className="font-medium">🗓️</span>
          <span className="font-medium"> Meetu</span>p
        </div>
        <div className="flex gap-5 mt-3 text-2xl font-semibold text-black max-md:flex-wrap max-md:max-w-full">
          <div className="flex-auto my-auto max-md:max-w-full">
            Finance & Investment Elite Social Mixer @Lujiazui
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ec1d083440c802706cee1c53472f1120b0a2f7f26bf2ce29433cc0240fd66f00?apiKey=7255d85a71e84b389c79f8c733a77483&"
            className="shrink-0 w-9 aspect-[1.12] fill-stone-300 hover:bg-slate-200"
            onClick={() => {
              if (moreinfo) {
                setMoreinfo(false);
              } else {
                setMoreinfo(true);
              }
            }}
          />
        </div>
        <div className="mt-1 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-4/5 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col mt-1.5 max-md:max-w-full">
                <div className="flex gap-5 max-w-full text-base font-medium text-black w-[356px]">
                  <div className="flex flex-1 gap-1">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/19e984c4820161fa4f0586a3dec45f249f544a2f34a9c2de08aab0250766f783?apiKey=7255d85a71e84b389c79f8c733a77483&"
                      className="shrink-0 w-5 aspect-square"
                    />
                    <div className="flex-auto my-auto">Fri, 12 Oct, 2018</div>
                  </div>
                  <div className="flex flex-1 gap-1">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/43ba7fa66863767eb8fcc14611f8845b067fe7d4c4f615470974c5bdcdb68bf8?apiKey=7255d85a71e84b389c79f8c733a77483&"
                      className="shrink-0 w-5 aspect-square"
                    />
                    <div className="flex-auto my-auto">Ahmedabad, India</div>
                  </div>
                </div>
                <div className="justify-center items-center px-16 py-3.5 mt-4 text-sm font-semibold leading-5 text-center text-red-500 bg-white rounded-lg border border-gray-400 hover:border-white border-solid w-[90vw] xl:w-[46.5vw]">
                  Visit Website
                </div>
              </div>
            </div>
            {!moreinfo ? (
              <></>
            ) : (
              <div className=" flex flex-col ml-5 font-light  absolute rounded-4 right-[33vw] text-sm bg-white  w-[150px] border-2 rounded-lg border-slate-300 py-2">
                <div className="hover:bg-blue-400 p-2">Edit</div>
                <div className="hover:bg-blue-400 p-2">Remove</div>
                <div className="hover:bg-blue-400 p-2">Report</div>
              </div>
            )}
          </div>
        </div>
        <div className="flex gap-5 mt-2.5 w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-1 gap-2.5 text-lg font-semibold text-black">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6eb4d50c40ce6ffe7427a8ea85317f35ea2598f00f714713471047423ff69914?apiKey=7255d85a71e84b389c79f8c733a77483&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6eb4d50c40ce6ffe7427a8ea85317f35ea2598f00f714713471047423ff69914?apiKey=7255d85a71e84b389c79f8c733a77483&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6eb4d50c40ce6ffe7427a8ea85317f35ea2598f00f714713471047423ff69914?apiKey=7255d85a71e84b389c79f8c733a77483&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6eb4d50c40ce6ffe7427a8ea85317f35ea2598f00f714713471047423ff69914?apiKey=7255d85a71e84b389c79f8c733a77483&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6eb4d50c40ce6ffe7427a8ea85317f35ea2598f00f714713471047423ff69914?apiKey=7255d85a71e84b389c79f8c733a77483&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6eb4d50c40ce6ffe7427a8ea85317f35ea2598f00f714713471047423ff69914?apiKey=7255d85a71e84b389c79f8c733a77483&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6eb4d50c40ce6ffe7427a8ea85317f35ea2598f00f714713471047423ff69914?apiKey=7255d85a71e84b389c79f8c733a77483&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6eb4d50c40ce6ffe7427a8ea85317f35ea2598f00f714713471047423ff69914?apiKey=7255d85a71e84b389c79f8c733a77483&"
              className="shrink-0 w-12 aspect-square"
            />
            <div className="my-auto">Ronal Jones</div>
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
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b290aba712cc54304861ff38ecbcee664b698499d67662b0a4254648f02c71a4?apiKey=7255d85a71e84b389c79f8c733a77483&"
              className="shrink-0 aspect-[1.16] w-[42px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyComponent;
